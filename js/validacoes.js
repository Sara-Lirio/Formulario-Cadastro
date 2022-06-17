nome.addEventListener('blur', () => {
    if (nome.value.length > 3) {
        notificacaoNome.innerHTML = ' '
        labelNome.style.fontSize = '.85em';
        labelNome.style.top = '-25px'
        labelNome.style.color = '#494949';
    } else if (nome.value.length > 0 && nome.value.length <= 3) {
        notificacaoNome.innerHTML = '** Insira no mínimo 3 caracteres'
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

cpf.addEventListener('blur', () => {
    if (cpf.value.length === 14) {
        notificacaoCPF.innerHTML = ' '
        labelCPF.style.fontSize = '.85em';
        labelCPF.style.top = '-25px'
        labelCPF.style.color = '#494949';
    } else if (cpf.value.length > 0 && cpf.value.length <= 13) {
        notificacaoCPF.innerHTML = '** CPF incompleto'
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

labelData.addEventListener('click', () => {
    data.style.fontSize = '.85em';
    data.style.top = '-25px'
    data.style.color = '#3f9ad3';
})

labelData.addEventListener('blur', () => {
    data.style.fontSize = '.9em';
    data.style.top = '-18px'
    data.style.color = '#494949';
})

cep.addEventListener('blur', () => {
    const cepValue = cep.value.length
    if (cepValue === 10) {
        notificacaoCEP.innerHTML = ' '
        labelCEP.style.fontSize = '.85em';
        labelCEP.style.top = '-25px'
        labelCEP.style.color = '#494949';
    } else if (cepValue > 0 && cepValue <= 9) {
        notificacaoCEP.innerHTML = '** CEP inválido'
        labelCEP.style.fontSize = '.85em';
        labelCEP.style.top = '-25px'
        labelCEP.style.color = '#3f9ad3';
    } else if (cepValue >= 0) {
        notificacaoCEP.innerHTML = ' '
        labelCEP.style.fontSize = '1.05em';
        labelCEP.style.top = '-5px'
        labelCEP.style.color = '#494949';
    } else {
        notificacaoCEP.innerHTML = ' '
        labelCEP.style.fontSize = '.85em';
        labelCEP.style.top = '-25px'
        labelCEP.style.color = '#3f9ad3';
    }
})

celular.addEventListener('blur', () => {
    if (celular.value.length >= 1 && celular.value.length <= 13) {
        labelCel.style.fontSize = '.85em';
        labelCel.style.top = '-25px'
        labelCel.style.color = '#3f9ad3';
    } else if (celular.value.length <= 0) {
        labelCel.style.fontSize = '1.05em';
        labelCel.style.top = '-5px'
        labelCel.style.color = '#494949';
    } else if (celular.value.length === 14) {
        labelCel.style.fontSize = '.85em';
        labelCel.style.top = '-25px'
        labelCel.style.color = '#494949';
    }
})

email.addEventListener('blur', () => {
    if (email.value.length >= 1 && email.value.length <= 2) {
        labelEmail.style.fontSize = '.85em';
        labelEmail.style.top = '-25px'
        labelEmail.style.color = '#3f9ad3';
    } else if (email.value.length <= 0) {
        labelEmail.style.fontSize = '1.05em';
        labelEmail.style.top = '-5px'
        labelEmail.style.color = '#494949';
    } else if (email.value.length >= 3) {
        labelEmail.style.fontSize = '.85em';
        labelEmail.style.top = '-25px'
        labelEmail.style.color = '#494949';
    }
})

senha.addEventListener('blur', () => {
    if (senha.value.length < 12 && senha.value.length >= 6) {
        labelSenha.style.fontSize = '.85em';
        labelSenha.style.top = '-25px'
        labelSenha.style.color = '#494949';
    } else if (senha.value.length <= 5 && senha.value.length > 0) {
        labelSenha.style.fontSize = '.85em';
        labelSenha.style.top = '-25px'
        labelSenha.style.color = '#3f9ad3';
    } else if (senha.value.length <= 0) {
        labelSenha.style.fontSize = '1.05em';
        labelSenha.style.top = '-5px'
        labelSenha.style.color = '#494949';
    } else {
        labelSenha.style.fontSize = '.85em';
        labelSenha.style.top = '-25px'
        labelSenha.style.color = '#3f9ad3';
    }
})

confirmaSenha.addEventListener('blur', () => {
    if (confirmaSenha.value.length < 12 && senha.value.length >= 6) {
        labelConfirmaSenha.style.fontSize = '.85em';
        labelConfirmaSenha.style.top = '-25px'
        labelConfirmaSenha.style.color = '#494949';
    } else if (confirmaSenha.value.length <= 5 && senha.value.length > 0) {
        labelConfirmaSenha.style.fontSize = '.85em';
        labelConfirmaSenha.style.top = '-25px'
        labelConfirmaSenha.style.color = '#3f9ad3';
    } else if (confirmaSenha.value.length <= 0) {
        labelConfirmaSenha.style.fontSize = '1.05em';
        labelConfirmaSenha.style.top = '-5px'
        labelConfirmaSenha.style.color = '#494949';
    } else {
        labelConfirmaSenha.style.fontSize = '.85em';
        labelConfirmaSenha.style.top = '-25px'
        labelConfirmaSenha.style.color = '#3f9ad3';
    }
})