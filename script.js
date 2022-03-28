function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  20
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    
    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.jpg' 
        document.body.style.background = '#aba1ab'
        saudacao.innerHTML = 'Bom dia!'

    } else if (hora >= 12 && hora < 19){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#aa725d'
        saudacao.innerHTML = 'Boa Tarde!'
        
    } else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#1d393d'
        saudacao.innerHTML = 'Boa Noite!'

    }
    
}



