class InputsCadastro {
    constructor(){
        $('#nome').blur(() => {
            this.validaNome()
        })

        // $('#cpf').blur(() => {
        //     this.validaCPF()
        // })

        // $('#data').blur(() => {
        //     this.validaData()
        // })

        // $('#cep').blur(() => {
        //     this.validaCEP()
        // })

        // $('#celular').blur(() => {
        //     this.validaCelular()
        // })

        // $('#email').blur(() => {
        //     this.validadeEmail()
        // })

        // $('#senha').blur(() => {
        //     this.validaSenha()
        // })

        // $('#confirma-senha').blur(() => {
        //     this.validadeConfirmacaoSenha()
        // })


        $('#formCadastro').submit(evento => {
            evento.preventDefault()
            if(validaCadastro.validaForm()){
                alert ('formulário validado com sucesso')
            } else {
                this.validaNome()
            }
        })
    }


    validaNome(){
        validaCadastro.nome = $('#nome').val()
        if (validaCadastro.validaNome()){
            alert ("nome valido")
        }else {
            alert("nome invalido")
        }
    }
}