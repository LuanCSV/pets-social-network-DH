const loginFake = `exemplo@exemplo.com.br`;
const senhaFake = `123456`;

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
