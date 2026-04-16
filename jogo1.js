function jogo1(){
    alert('Começou o jogo!')
    let numerocomputador = Math.floor(Math.random() * 20) + 1;
    let respostausuario

    while(respostausuario !== numerocomputador){
        respostausuario = parseInt(prompt('Adivinhe o número de 1 a 20: '))

        if(isNaN(respostausuario)) {
            window.alert('Número inválido')
        } else if(numerocomputador < respostausuario) {
            window.alert('O número do computador é menor')
        } else if(numerocomputador > respostausuario) {
            window.alert('O número do computador é maior.') 
        } else{
            alert('PARABÉNS! Você acertou!')
            break
        }
    }
}
    //pode trocar console log por alert
    //pode trocar o window.prompt só por prompt