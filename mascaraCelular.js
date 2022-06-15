const inputCelular = document.querySelector('#celular');


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

