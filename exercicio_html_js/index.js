const form = document.getElementById('form-numbers'); 
const valorA = document.getElementById('number1');
const valorB = document.getElementById('number2');
let formEValido = false;

function validaNumero(a,b){
    let valorA = a;
    let valorB = b;
    return a < b;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensagemSucesso = `Isso, pequeno jumentinho! O segundo número (<b>${number2.value}</b>) é maior do que o primeiro (<b>${number1.value}</b>).`;
    const mensagemErro = `Larga a mão de ser jumento! O segundo número (<b>${number2.value}</b>) tem que ser maior do que o primeiro (<b>${number1.value}</b>).`;

    formEValido = validaNumero(valorA.valueAsNumber, valorB.valueAsNumber);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
    } else {
        const containerMensagemErro = document.querySelector('.message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
    }
})    

valorB.addEventListener('keyup', function(e){
    const mensagemErro = `Larga a mão de ser jumento! O segundo número 
    (<b>${number2.value}</b>) tem que ser maior do que o primeiro (<b>${number1.value}</b>).`;

    formEValido = validaNumero(valorA.valueAsNumber, valorB.valueAsNumber);
    console.log(e.target.value)

    if (!formEValido){        
        const containerMensagemErro = document.querySelector('.message');
        valorB.style.border = '1px solid red';        
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

    }else{        
        const containerMensagemErro = document.querySelector('.message');
        valorB.style.border = '';
        containerMensagemErro.style.display = 'none';
    }

})