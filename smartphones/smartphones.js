const card_login = document.querySelector('#card_login')
const card_cadastro = document.querySelector('#card_cadastro')
const btn_cor = document.querySelector('.btn_cor')


document.querySelector('#card_login')
    .addEventListener('click',() =>{
        btn_cor.style.left = "-1px"

}  )

document.querySelector('#card_cadastro')
    .addEventListener('click', () => {
        btn_cor.style.left = "112px"



    })


    const formlogin = document.getElementById('login')
    const formcadastro = document.getElementById('cadastro')

    formlogin.style.display = null
    formcadastro.style.display = 'none'

    function activeTab(tabname){
        if(tabname==='login'){
            formcadastro.style.display = 'none'
            formlogin.style.display = null
        }
        else if(tabname==='cadastro'){
            formlogin.style.display = 'none'
            formcadastro.style.display = null
        }
    }



    function getFields(form) {
        const data = new FormData(form);
        const fields = {}

        for (const [key, value] of data) {
            fields[key] = value
        }

        return fields
    }

    function onSignIn(event) {
        event.preventDefault();
        const formLogin = document.getElementById('login'); 
        const fields = getFields(formLogin);
        console.log(fields);
        if(fields.email!='shoppingcapinhas@gmail.com' || fields.senha != 'shoppingcapinha123'){
            alert('Email ou senha incorretos');
            return;
        }
            alert('Login efetuado com sucesso!')
            window.location = '../index.html';
    }

    function onSignUp(event) {
        event.preventDefault();
        const formCadastro = document.getElementById('cadastro');
        const fields = getFields(formCadastro);
        console.log(fields);

        if(fields.senha!=fields.senha2){
            alert('Senhas incompativeis');
            return;

        }
        alert('Cadastro concluido');
        window.location = './index.html';
    }