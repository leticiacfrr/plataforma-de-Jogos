function jogo3(){
    alert('Começou o jogo!')
    let numerousuario = parseInt(prompt('Insira um número inteiro: '))
    
    if (isNaN(numerousuario)){
        alert('Insira um número válido!')
        return
    }
    let area = document.getElementById('Tabuada')
    area.innerHTML = ''

    for (let i=1; i<=10; i++){
        let resultadotabuada = numerousuario*i
        area.innerHTML +=`${numerousuario} x ${i} = ${resultadotabuada} <br>`
        console.log(`${numerousuario} x ${i} = ${resultadotabuada}`)
    }
}
