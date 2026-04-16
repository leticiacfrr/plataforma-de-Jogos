function jogo5() {
    alert('Começou a soma em série!')
    let quantdeuns = parseInt(prompt('Insira um número: '))
    
    if (isNaN(quantdeuns)){
        alert('Insira um número válido!')
        return
    }
    let area = document.getElementById('soma')
    area.innerHTML = ''
    let numero = "";
    let soma = 0;

    for (let i = 1; i <= quantdeuns; i++){
        numero += "1";              
        soma += parseInt(numero);  
    }
    area.innerHTML +=`${soma}<br>`
    console.log(soma);
}