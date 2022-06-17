const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const cepValido = (cep) => cep.length == 14 && /^[0-9]+$/.test(numero);

const pesquisarCep = async () => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const rCep = cep.replace('-', '').replace('.', '')
    const url = `http://viacep.com.br/ws/${rCep}/json/`

        const dados = await fetch(url);
        const endereco = await dados.json();

        preencherFormulario(endereco);

        if (endereco.hasOwnProperty('erro')) {
            notifCEPinv.innerHTML = '** CEP não encontrado'
            notificacaoCEP.innerHTML = ' '
        }
        else {
            
            notificacaoCEP.innerHTML = ' '
        }
    
}

document.getElementById('cep').addEventListener("focusout", pesquisarCep);