// Atividade da seção 3 do livro usado na aula
// https://costasilvati.github.io/IntroNodeJS/atividade-avaliativa.html

// BES -> Bacharelado em Engenharia de Software
// ADS -> Análise e Desenvolvimento de Sistemas
// BEC -> Bacharelado em Engenharia da Computação

const participantes = 
[
{nome: 'Ana',    idade: 25, curso: 'BES', presente: true,  notas: [7,9,8.1]},
{nome: 'Bruno',  idade: 18, curso: 'ADS', presente: false, notas: [0,0,0]  },
{nome: 'Carlos', idade: 29, curso: 'BEC', presente: false, notas: [0,0,0]  },
{nome: 'Pedro',  idade: 15, curso: 'BEC', presente: true,  notas: [5,5,8]  },
{nome: 'Carla',  idade: 22, curso: 'BES', presente: true,  notas: [9.7,8,9]}
]

function gerarRelatorio() { 
    let 
        nomeCursoEach          = participantes.map(p=>[p.nome, p.curso]),
        mediaEach              = participantes.map(p => p.notas
                                    .reduce((t,e)=>t+e, 0) / p.notas.length),
        situacaoEach           = mediaEach.map(media=>media >= 7.0 
                                    ? 'aprovado' 
                                    : 'recuperação'),
        maioridadeEach         = participantes.map(p=>p.idade >= 18),
        presencaEach           = participantes.map(p=>p.presente),
        totalParticipantes     = participantes.length,
        participantesPresentes = presencaEach.reduce((t, e) => {
                                     return e ? t+1 : t
                                 }, 0),
        participantesAusentes  = totalParticipantes - participantesPresentes,
        mediaGeral             = (mediaEach.reduce((t,e)=>t+e, 0) 
                                    / mediaEach.length),
        maiorMedia             = participantes.reduce((max, curr) => {
                                    let maxMedia =  max.notas
                                                    .reduce((t,e)=>t+e) 
                                                    / max.notas.length
                                    let currMedia = curr.notas
                                                    .reduce((t,e)=>t+e)
                                                    /curr.notas.length
                                    if (currMedia > maxMedia) { 
                                        max = curr
                                    }
                                    return max
                                 }).nome,
        aprovados              = []

    for (i in participantes) {
        if (mediaEach[i] >= 7.0) {
            aprovados.push(participantes[i].nome)
        }
    }
    return {
        nomeCurso   : nomeCursoEach,
        mediaNotas  : mediaEach,
        situacao    : situacaoEach,
        maiorDeIdade: maioridadeEach,
        presente    : presencaEach,
        totalParticipantes,
        participantesPresentes,
        participantesAusentes,
        mediaGeral,
        maiorMedia,
        aprovados
    }
}

console.log(gerarRelatorio())
