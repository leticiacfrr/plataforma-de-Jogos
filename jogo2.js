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

    let area = document.getElementById('resultado')
    area.innerHTML = ''

    let resultado = escolhacomputador + '-' + escolhausuario
    switch (resultado){
        case 'pedra-pedra':
        case 'papel-papel':
        case 'tesoura-tesoura':
            console.log('Empate!')
            area.innerHTML +=`Empate!<br>`
            break
        case 'pedra-tesoura':
        case 'papel-pedra':
        case 'tesoura-papel':
            console.log('O computador venceu!')
            area.innerHTML +=`O computador venceu!<br>`
            break
        case 'pedra-papel':
        case 'papel-tesoura':
        case 'tesoura-pedra':
            console.log('Você venceu!')
            area.innerHTML +=`Você venceu<br>`
            break
        default:
            console.log('Opção inválida!')
            area.innerHTML +=`opção invalida<br>`
    }
    console.log('Sua escolha:'+ escolhausuario)//print bruto
    console.log(`Escolha do computador: ${escolhacomputador}`)//template literal
    area.innerHTML +=`Sua escolha: ${escolhausuario}<br>`
    area.innerHTML +=`Escolha do computador: ${escolhacomputador}<br>`

}