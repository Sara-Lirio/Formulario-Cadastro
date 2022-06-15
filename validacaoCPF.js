let inputCPF = document.querySelector('#cpf');
let enviar = document.querySelector('#submit');

inputCPF.addEventListener('keyup', function () {
    let inputlength = inputCPF.value.length

    if (inputlength === 14){
        alert('foi')
    } else {
        alert ('não foi')
    }
})
