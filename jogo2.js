function jogo2(){
    alert('Começou o jogo!')
    let sorteiocomputador = Math.floor(Math.random() * 3);
    let escolhacomputador

    if(sorteiocomputador == 0){
        escolhacomputador = 'pedra'
    } else if (sorteiocomputador == 1){
        escolhacomputador = 'papel'
    } else {
        escolhacomputador = 'tesoura'
    }
    let escolhausuario = prompt('Escolha: pedra, papel ou tesoura')

    let resultado = escolhacomputador + '-' + escolhausuario
    switch (resultado){
        case 'pedra-pedra':
        case 'papel-papel':
        case 'tesoura-tesoura':
            console.log('Empate!')
            break
        case 'pedra-tesoura':
        case 'papel-pedra':
        case 'tesoura-papel':
            console.log('O computador venceu!')
            break
        case 'pedra-papel':
        case 'papel-tesoura':
        case 'tesoura-pedra':
            console.log('Você venceu!')
            break
        default:
            console.log('Opção inválida!')
    }
    console.log('Sua escolha:'+ escolhausuario)//print bruto
    console.log(`Escolha do computador: ${escolhacomputador}`)//template literal

}