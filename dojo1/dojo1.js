const usuarios = [
    { nome: "Ana", idade: 20, ativo: true, compras: [100, 50, 25]},
    { nome: "Bruno", idade: 17, ativo: false, compras: [30, 20] },
    { nome: "Carlos", idade: 32, ativo: true, compras: [200, 150, 50, 100] },
    { nome: "Diana", idade: 25, ativo: true, compras: [] },
    { nome: "Eduardo", idade: 15, ativo: false, compras: [10] }
]

// desafio 1
const d1 = usuarios.map(u => {
    return `${u.nome}: total = ${u.compras.reduce((t, e) => t+e, 0)}`
})


// desafio 2
const d2 = usuarios.filter(u => u.ativo)

// desafio 3
const d3 = usuarios.filter(u => u.idade >= 18)

// desafio 4
const d4 = usuarios.reduce((max, u) => {
    let total = u.compras.reduce((t, e) => t+e, 0) 
    if (total > max[1]) {
        return [u.nome, total]
    }
    return max
}, [null, -1])

// desafio 5
//console.log('"5" + 2:', "5" + 2) 
//console.log('"5" - 2:', "5" - 2)
//console.log('true + 1: ', true + 1)
//console.log('false == 0: ', false == 0)
//console.log('false === 0: ', false === 0)
/**
 * Coerção de tipos em JS:
 * 
 *  String + numero: Numero é transformado em String e as duas são concatenadas
 * 
 *  String (-, *, /) numero: String é transformada em numero e uma operacao ma-
 *      temática é realizada
 *  
 * Valores truthy e falsy:
 * 
 *  Truthy: Valores que não são necessariamente do tipo boolean mas são avalia-
 *          dos como true. 
 * 
 *          Qualquer número diferente de 0;
 *          Qualquer String não vazia
 *          Um array (vazio ou nao)
 *          Um objeto (vazio ou nao)
 *          Infinity
 * 
 *  Falsy: Valores que não são necessariamente do tipo boolean mas são avalia-
 *         dos como false.
 * 
 *          Número literal 0
 *          null
 *          undefined
 *          string vazia
 *          NaN
 *          
 *  Comparacao com == ou ===:
 *  
 *      A comparação com == não exige que o tipo dos valores comparados seja o
 *      mesmo, assim, uma comparação entre '5' e 5 teria como resultado true.
 * 
 *      A comparação com === exige que além dos valores, os tipos também sejam
 *      iguais. Uma comparação entre '5' e 5 teria como resultado false.
 * 
 */

// desafio 6
const p1 = {
    nome: 'Maria',
    falar: function() {
        console.log(this.nome)
    }
}
//p1.falar()

const p2 ={
    nome: 'Joao',
    falar: () => console.log(this.nome)
}
//p2.falar()
/**
 * O que acontece ali em cima é que um objeto literal nao cria um contexto
 * novo para o this quando ele é declarado. O que eu quero dizer com isso é que
 * o this continua apontando para onde ele estava apontando antes, que nesse
 * caso é para o module.exports. 
 * 
 * Mas por que a funcao declarada com function() funciona ? 
 * 
 *  Por que funcoes declaradas dessa forma variam seu this de acordo com
 *  o contexto em que sao chamadas (enfase em chamadas, nao declaradas). Assim,
 *  quando voce chama a funcao por meio de um objeto, o this vai apontar para 
 *  aquele objeto no momento, entao o atributo nome do objeto vai ser impresso.
 *  
 *  Por outro lado, com funcoes arrow, seu this nao muda, e é definido de acor-
 *  do com o contexto lexico em que foi declarada. Assim, como no momento em
 *  que foi declarada, o this apontava para module.exports, ela vai apontar 
 *  sempre para module.exports, porque uma das caracteristicas da funcao arrow
 *  é que não é possivel mudar para onde seu this aponta.
*/

// desafio 7
const gerarRelatorio = () => {
    let usuariosAtivos  =   0,
        usuarioInativos =   0,
        totalIdade      =   0,
        maiorValor      =   0, 
        maiorComprador  = null
    usuarios.forEach(e => {
        if (e.ativo) { usuariosAtivos++ }
        else { usuarioInativos++ }
        totalIdade += e.idade
        let totalGasto = e.compras.reduce((acc,e) => acc+e, 0)
        if (totalGasto > maiorValor) {
            maiorValor = totalGasto
            maiorComprador = e
        }
    })
    return {
        totalUsuarios: usuarios.length,
        usuariosAtivos,
        usuarioInativos,
        mediaIdade: totalIdade / usuarios.length,
        maiorComprador: maiorComprador.nome
    }
}
console.log(gerarRelatorio())

// extra
const extra = () => {
    let maisNovo   = null,
        maisVelho  = null,
        totalGasto =    0
    usuarios.forEach(u => {
        if (u.idade > (maisVelho?.idade || -1)) {
            maisVelho = u
        }
        if (u.idade < (maisNovo?.idade || Infinity)) {
            maisNovo = u
        }
        totalGasto += u.compras.reduce((t, e) => t+e, 0)
    })
    return {
        maisNovo: maisNovo.nome,
        maisVelho: maisVelho.nome,
        valorMedioCompras: totalGasto / usuarios.length
    }
}
console.log(extra())
