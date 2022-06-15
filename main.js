let nome = document.querySelector('#name')
let notificacaoNome = document.querySelector('#notificacaoNome')
let labelNome = document.querySelector('#label-name')

let cpf = document.querySelector('#cpf')
let labelCPF = document.querySelector('#label-cpf')
let notifacaoCPF = document.querySelector('#notificacaoCPF')

// verificação do nome
nome.addEventListener('blur', () => {
    if (nome.value.length > 3) {
        notificacaoNome.innerHTML = ' '
        labelNome.style.fontSize = '.85em';
        labelNome.style.top = '-25px'
        labelNome.style.color = '#3f9ad3';
    } else if (nome.value.length > 0 && nome.value.length <= 3) {
        notificacaoNome.innerHTML = '**Insira no mínimo 3 caracteres'
        labelNome.style.fontSize = '.85em';
        labelNome.style.top = '-25px'
        labelNome.style.color = '#3f9ad3';
    } else if (nome.value.length >= 0) {
        notificacaoNome.innerHTML = ' '
        labelNome.style.fontSize = '1.05em'
        labelNome.style.top = '-5px';
        labelNome.style.color = '#494949';
    } else {
        notificacaoNome.innerHTML = ' '
        labelNome.style.fontSize = '.85em';
        labelNome.style.top = '-25px'
        labelNome.style.color = '#3f9ad3';
    }
})

// verificação cpf
cpf.addEventListener('blur', () => {
    if(cpf.value.length === 14){
        notificacaoCPF.innerHTML = ' '
        labelCPF.style.fontSize = '.85em';
        labelCPF.style.top = '-25px'
        labelCPF.style.color = '#3f9ad3';
    } else if (cpf.value.length > 0 && cpf.value.length <=13){
        notificacaoCPF.innerHTML = 'CPF incompleto'
        labelCPF.style.fontSize = '.85em';
        labelCPF.style.top = '-25px'
        labelCPF.style.color = '#3f9ad3';
    } else if (cpf.value.length >= 0) {
        notificacaoCPF.innerHTML = ' '
        labelCPF.style.fontSize = '1.05em';
        labelCPF.style.top = '-5px'
        labelCPF.style.color = '#494949';
    } else {
        notificacaoCPF.innerHTML = ' '
        labelCPF.style.fontSize = '.85em';
        labelCPF.style.top = '-25px'
        labelCPF.style.color = '#3f9ad3'
    }
})


function Campo(p) {
    let campo = document.getElementsByTagName('input')[p];

    if (campo.value != "") {
        campo.parentElement.lastElementChild.style.fontSize = '.85em';
        campo.parentElement.lastElementChild.style.top = '-25px';
        campo.parentElement.lastElementChild.style.color = '#3f9ad3';
    } else {
        campo.parentElement.lastElementChild.style.fontSize = '1.05em';
        campo.parentElement.lastElementChild.style.top = '-5px';
        campo.parentElement.lastElementChild.style.color = '#494949';
    }
}


function cadastrar() {

}