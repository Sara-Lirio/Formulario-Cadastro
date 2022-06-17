const inputCPF = document.querySelector('#cpf');
const inputCEP = document.querySelector('#cep');
const inputCelular = document.querySelector('#celular');

inputCPF.addEventListener('keypress',() => {
    let inputlength = inputCPF.value.length

    if (inputlength === 3 || inputlength === 7){
        inputCPF.value += '.'
    } else if(inputlength === 11) {
        inputCPF.value += '-'
    }
})

inputCEP.addEventListener('keypress',() => {
    let inputlength = inputCEP.value.length

    if (inputlength === 2){
        inputCEP.value += '.'
    } else if(inputlength === 6) {
        inputCEP.value += '-'
    }
})

inputCelular.addEventListener('keypress',() => {
    let inputlength = inputCelular.value.length

    if (inputlength === 0){
        inputCelular.value += '('
    } else if(inputlength === 3) {
        inputCelular.value += ')'
    }  else if(inputlength === 9) {
        inputCelular.value += '-'
    }
})

