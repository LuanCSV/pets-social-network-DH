const loginFake = `exemplo@exemplo.com.br`;
const senhaFake = `Exemplo10`;

function pega(element){
   element.preventDefault()
    let login = document.getElementById('inputEmailLogin').value;
    let senha = document.getElementById('inputSenhaLogin').value;
    $('#modalLogin').modal('show');
    if(loginFake === login && senhaFake === senha){
        document.getElementById('is_logged?').innerText = "Logado com Sucesso!"
    }else{
        document.getElementById('is_logged?').innerText = "Usuario ou Senha inválida, verifique e tente novamente!"
        document.getElementById('inputEmailLogin').value = "";
        document.getElementById('inputSenhaLogin').value = "";
    }

}

const button = document.getElementById('btnLogin').addEventListener('click', pega)


function validarEmail(){
let filter = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
let email = document.getElementById('inputEmailLogin').value
let  error = document.querySelector('#error-email')
if(!filter.test(email)){
   error.innerHTML=`Insira um e-mail valído`
}

}

function redefinirMsg(){
    let error = document.getElementById('error-email')
    if(error.innerHTML.length >0){
        error.innerHTML=""
    }
}


function validarSenha(){
let validapswd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let psswd = document.getElementById('inputSenhaLogin').value
let errorSenha = document.querySelector('#error-senha')
if(!validapswd.test(psswd)){
   errorSenha.innerHTML = "Senha inválida"
}

}

function redefinirPsw(){
    let error = document.getElementById('error-senha')
    if(error.innerHTML.length > 0){
        error.innerHTML=""
    }
}