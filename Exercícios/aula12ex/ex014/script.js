function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12){
        msg.innerHTML += 'Bom dia!'
        img.src = 'fotomanha.png'
        document.body.style.background = '#86c2f3'
        
    } else if (hora >= 12 && hora <18){
        msg.innerHTML += 'Boa tarde!'
        img.src = 'fototarde.png'
        document.body.style.background = '#f4b660'
    }else{
        msg.innerHTML += 'Boa noite!'
        img.src = 'fotonoite.png'
        document.body.style.background = '#352a48'
    }
}