const inputCPF = document.querySelector('#cpf');


inputCPF.addEventListener('keypress',() => {
    let inputlength = inputCPF.value.length

    if (inputlength === 3 || inputlength === 7){
        inputCPF.value += '.'
    } else if(inputlength === 11) {
        inputCPF.value += '-'
    }
  
})

