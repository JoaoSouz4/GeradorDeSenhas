//Este módulo irá capturar os dados de entrada da aplicação
import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtd = document.querySelector('.qtd');
const maiscula = document.querySelector('.check-maiusculas');
const minuscula = document.querySelector('.check-minusculas');
const numero = document.querySelector('.check-numeros');
const simbolo = document.querySelector('.check-simbolos');
const btn = document.querySelector('.gerar-senha');
const btnClean = document.querySelector('.btn-clear');
const btnCopy = document.querySelector('.btn-copy');
const aviso = document.querySelector('.aviso');
const senha = document.querySelector('.senha');


export default () => {

    btn.addEventListener('click', function criar(){
        senha.innerHTML = gera();
    });

   btnCopy.addEventListener('click',()=>{

     if ($('.senha').html().length <=0){
        alert('Nada a ser copiado');
        return;
    }
       
        copyClipboard(senhaGerada.textContent);
        aviso.style.opacity = 1;
        aviso.style.transition = '0.5s';
        voltar();
   });

    btnClean.addEventListener('click', ()=>{
        senha.innerHTML = '';
    });
}

function voltar(){
    setTimeout(()=>{
        aviso.style.opacity = 0;
        
    }, 1500)
}

function gera(){
    const senha = geraSenha(
        qtd.value,
        maiscula.checked,
        minuscula.checked,
        numero.checked,
        simbolo.checked,
    )

    return senha || 'Sem parametros';
}

function copyClipboard(input){
    navigator.clipboard.writeText(input);
}

