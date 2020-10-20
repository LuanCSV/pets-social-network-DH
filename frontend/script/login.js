const loginFake = `exemplo@exemplo.com.br`
const senhaFake = `123456`

function pega(element){
   element.preventDefault()
    let login = document.getElementById('inputEmail').value
    let senha = document.getElementById('inputSenha').value
    if(loginFake === login && senhaFake === senha){
        $('#modalLoginTrue').modal('show')
    }else{
        
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputSenha').value = "";
        $('#modalLoginFalse').modal('show')
        
    }

}

const button = document.getElementById('btnLogin').addEventListener('click', pega)
