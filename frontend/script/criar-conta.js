function comparaSenha(){
let senhaCriada = document.getElementById("inputSenhaCadastro").value
let senhaCompara = document.getElementById("inputConfirmSenha").value
let errorCompara = document.getElementById("erro-confirm-senha")

if(senhaCriada !== senhaCompara){
    errorCompara.innerHTML = "As senhas não são iguais, por favor verifique "
}

}


function redefinirConfirm(){
    let errorCompara = document.getElementById('erro-confirm-senha')
    if(errorCompara.innerHTML.length > 0){
        errorCompara.innerHTML=""
    }
}

function comparaEmail(){
    let filter = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
    let emailCadastro = document.getElementById('inputEmailCadastro').value
    let erroEmail = document.getElementById('erro-email-cadastro')
    if(!filter.test(emailCadastro)){
        erroEmail.innerHTML = 'Email invalído'
    }
}

function redefinirEmail(){
    let errorComparaEmail = document.getElementById('erro-email-cadastro')
    if(errorComparaEmail.innerHTML.length > 0){
        errorComparaEmail.innerHTML=""
    }
}

