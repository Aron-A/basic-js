console.clear(); //limpando o terminal
console.log(); // começa pulando uma linha
var prompt = require('prompt-sync')();

/*
Ideia:
    Faça um programa que peça o nome de usuário e a senha de um usuário.
    A senha deve ter no mínimo 8 caracteres,
    pelo menos um número e um caracter especial.
 */
var finish = false;
var tentativas = 0;
var error_mapping = ['Menos de 8 caracteres !', 'Não incluiu ao menos 1 Número :(', 'Não possui caracter especial :('];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special_char = ['@', '!', '#', '$', '%', '^', '&', '*', '(', ')'];
console.clear();
var login = prompt('Olá, para começar me informe o seu login: ');
while (finish !== true) {
    var error_code = true;
    var pass = prompt('Okay ' + login + ', qual a senha ?: ');
    if (pass.length >= 8) {
        for (i = 0; i < numbers.length; i++) {
            if (pass.includes((numbers[i]).toString())) {
                error_code = false;
            }
        }
        if (error_code === true) {
            error_code = 1
        } else {
            error_code = true;
            for (i = 0; i < special_char.length; i++) {
                if (pass.includes(special_char[i])) {
                    error_code = false;
                }
            }
            if (error_code === true) {
                    error_code = 2
                }
        }
    } else {
        error_code = 0
    }
    if (error_code === 0 || error_code === 1 || error_code === 2){
        tentativas++
        console.log(error_mapping[error_code])
        if (tentativas <2){
            console.log('Vamos tentar novamente !')
        } else if (tentativas === 2){
            console.log('A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.')
        } else if (tentativas === 3){
            console.log('Pode falar, você não sabe ler. Vamos tentar mais uma vez.')

        } else if (tentativas > 3){
            console.log('Você não sabe nem criar uma senha. Desisto !')
            finish = true
        }

    } else {
        finish = true
        console.log('Você está Logado.')
    }

}


