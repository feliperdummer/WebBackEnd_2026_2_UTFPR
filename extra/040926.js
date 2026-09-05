///////////////////// helper ///////////////////
const isNumber   = v => typeof(v) === 'number'
const isString   = v => typeof(v) === 'string'
const isBoolean  = v => typeof(v) === 'boolean'
const isFunction = v => typeof(v) === 'function'
const isObject   = v => typeof(v) === 'object'
////////////////////////////////////////////////

const pedidos = [
    { id: 1, cliente: "Ana",    total: 120, status: "aprovado"  },
    { id: 2, cliente: "Bruno",  total: 80,  status: "pendente"  },
    { id: 3, cliente: "Ana",    total: 200, status: "aprovado"  },
    { id: 4, cliente: "Carlos", total: 50,  status: "cancelado" },
    { id: 5, cliente: "Bruno",  total: 150, status: "aprovado"  }
];

// desafio 01 - Manipulação básica
const d1 = pedidos
           .filter(pedido => pedido.status==='aprovado')
           .map(pedido => pedido.cliente)
console.log(d1)

// desafio 02 - Agregação de dados
const d2 = (pedidos
           .filter(pedido => pedido.status==='aprovado')
           .map(pedido => pedido.total)
           .reduce((total, atual) => total+atual)
           / d1.length).toFixed(2)
console.log(d2)

/** desafio 03 - HashTable
 * 
 * Usa o construtor de um HashMap de forma que 
 * ele recebe um array bidimensional onde cada
 * entrada é um array que tem como primeiro ele-
 * mento a chave a ser inserida e o valor asso-
 * ciado a essa chave.
 * 
 * O Resultado disso será:
 * 
 *  pedidosByCliente = {
 *      'Ana' -> []
 *      'Bruno' -> []
 *      'Carlos' -> []
 *  }
 * 
 * Depois, o forEach percorre o array de pedidos e associa de acordo 
 * com o nome, cada pedido a um cliente presente no HashMap.
 * 
 */
const pedidosByCliente = new Map(
    pedidos.map(pedido => [pedido.cliente, []])
)
pedidos.forEach(pedido => {
    pedidosByCliente.get(pedido.cliente).push(pedido)
})
console.log(pedidosByCliente)

/** desafio 04 - Classe
 * 
 * A única diferença pro array resultante desse desafio
 * pro array original é que o array original é composto
 * por objetos literais e aqui ele é composto por obje-
 * tos do tipo Pedido
 * 
 */
class Pedido {
    constructor(id, cliente, total, status) {
        if (   !isNumber(id)    || !isString(cliente)
            || !isNumber(total) || !isString(status))
        {
            throw TypeError('tipos de dados inválidos')
        }
        this.id = id
        this.cliente = cliente
        this.total = total
        this.status = status
    }

    isAprovado() {
        return this.status === 'aprovado'
    }
}
const newPedidos = [
    new Pedido(1, 'Ana',    120, 'aprovado' ),
    new Pedido(2, 'Bruno',  80,  'pendente' ),
    new Pedido(3, 'Ana',    200, 'aprovado' ),
    new Pedido(4, 'Carlos', 50,  'cancelado'),
    new Pedido(5, 'Bruno',  150, 'aprovado' )
]

// desafio 05 - programação funcional
const calcularTotalCliente = (pedidos, cliente) => {
    return pedidos
           .filter(pedido => pedido.cliente === cliente)
           .map(pedido => pedido.total)
           .reduce((total, atual) => total+atual)
}
console.log(calcularTotalCliente(pedidos, 'Bruno'))

// desafio 06 - (map + filter + reduce)
const d6 = []
pedidosByCliente.entries()
    .forEach(cliente => {
        const aprovados = cliente[1]
            .filter(pedido => pedido.status==='aprovado')
        if (aprovados.length != 0) {
            d6.push(
                {
                    cliente: cliente[0],
                    total: aprovados
                           .map(pedido => pedido.total)
                           .reduce((total, atual) => total+atual)
                }
            )
        }
    })
console.log(d6)

// desafio extra
pedidos.sort((pedido1, pedido2) => -(pedido1.total - pedido2.total))
const extra = JSON.stringify({ cliente: pedidos[0].cliente })
console.log(extra)