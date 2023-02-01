const form = document.getElementById('form-numbers'); 
let formEValido = false;

function validaNumero(a,b){
    let valorA = a;
    let valorB = b;
    return a < b;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const valorA = document.getElementById('number1').value;
    const valorB = document.getElementById('number2').value;
    const mensagemSucesso = `Isso, pequeno jumentinho! O segundo número (<b>${number2.value}</b>) é maior do que o primeiro (<b>${number1.value}</b>).`;
    const mensagemErro = `Larga a mão de ser jumento! O segundo número (<b>${number2.value}</b>) tem que ser maior do que o primeiro (<b>${number1.value}</b>).`;

    formEValido = validaNumero(valorA, valorB);

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        document.getElementById('number1').value = "";
        document.getElementById('number2').value = "";
    }
})    

console.log(form);