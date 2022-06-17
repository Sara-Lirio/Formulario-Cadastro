class ValidaCadastro {
    constructor () {
        this.nome = ''
        // this.cpf = ''
        // this.data = ''
        // this.cep = ''
        // this.celular = ''
        // this.endereco = ''
        // this.cidade = ''
        // this.estado = ''
        // this.email = ''
        // this.senha = ''
        // this.confirmaSenha = ''
    }


validaNome(){
    if( this.nome.value.length > 3 ) {
        campoPreenchido()
    } else if (this.nome.value.length > 0 && this.nome.value.length <= 3 ) {
        campoIncompleto()
    } else if (this.nome.value.length >= 0) {
        campoVazio()
    }
}

validaForm(){
    return this.validaNome()
}
}

const validaCadastro = new ValidaCadastro()
