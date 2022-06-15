function Campo(p){
    let campo = document.getElementsByTagName('input')[p];
 
    if(campo.value!=""){
        campo.parentElement.lastElementChild.style.fontSize='.85em';
        campo.parentElement.lastElementChild.style.top='-25px';
        campo.parentElement.lastElementChild.style.color='#3f9ad3';
    } else {
        campo.parentElement.lastElementChild.style.fontSize='1.05em';
        campo.parentElement.lastElementChild.style.top='-5px';
        campo.parentElement.lastElementChild.style.color='#494949';
    }
}