
function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte){
    if ((idade === 1 && porte === 'M')) {
        return true
    } else {
        return false
    }
}

function calcularConsumoDeRacao(nome, idade, pesoDog){
    return pesoDog * 300
}

function decidirTipoDeAtividadePorPorte(porte) {
    let atividade
    
    switch (porte){ 
        case 'pequeno':
            atividade = 'brincar dentro de casa'
            break
        case 'medio':
            atividade = 'caminhada no quarteirão'
            break
        case 'grande':
            atividade = 'correr no parque'
            break
        default:
            atividade = 'porte invalido'
    }

    return atividade
}

async function buscarDadoAsync(nome) {
    return new Promise((resolve) => {
         setTimeout(() => resolve('Pipoca'), 100);
    })  
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}