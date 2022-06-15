const inputCEP = document.querySelector('#cep');


inputCEP.addEventListener('keypress',() => {
    let inputlength = inputCEP.value.length

    if (inputlength === 2){
        inputCEP.value += '.'
    } else if(inputlength === 6) {
        inputCEP.value += '-'
    }
  
})
