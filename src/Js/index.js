let textCripto = document.getElementById('textCripto')

const list = () =>{
    if(localStorage.length == 0 ){
        let text = document.createElement('h1')
        textCripto.append(text)
        text.innerHTML = 'Você ainda não criptografou...'
    }else{
        let text = document.createElement('h1')
        textCripto.append(text)
        text.innerHTML = 'Você criptografou:'+ localStorage.getItem('texto')
    }
}

list();