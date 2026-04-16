function jogo4(){
    alert('Olha a mágica!')
    let numerodelinhas = parseInt(prompt('Insira um número: '))
    
    if (isNaN(numerodelinhas)){
        alert('Insira um número válido!')
        return
    }
    let area = document.getElementById('triangulo')
    area.innerHTML = ''

    let triangulo = ''
    for(let i=1; i<=numerodelinhas; i++){
        triangulo += '*'
        area.innerHTML +=`${triangulo}<br>`
        console.log(`${triangulo}`)
    }
}