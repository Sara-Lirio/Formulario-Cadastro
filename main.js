/* INPUT CPF :
- Verificar se são somente 11 caracteres Função VerificarCPF
- Soma de todos os CPF número iguais (11/22/33/44...) SomaCPF
- Excluir possíveis CPFs nulos (11111111111,222222222) CPFnulos
*/

const cpf = '11111111111'

function verificaCPF (cpf) {
    if (cpf.length == 11){
        console.log(true);
    } else {
        console.log(false);
    }
}

verificaCPF(cpf)