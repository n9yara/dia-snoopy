function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 4
    msg.innerHTML = `agora são ${hora} horas`
    
     if(hora >= 6 && hora < 12){
        img.src = 'dia.png'
        document.body.style.background = '#89d0fd'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#efcb51'
    }else if(hora >= 18 && hora <= 23){
        img.src = 'noite.png'
        document.body.style.background = '#4979af'
        

    }else{
        img.src = 'madrugada.gif'
        document.body.style.background = '#5d378e'

    }
        

     }

    

