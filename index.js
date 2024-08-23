const prompt = require('prompt-sync');
const entrada = prompt();

var senha = entrada('Digite a senha: ');
var senhaCorreta = '2024';


while (senha != senhaCorreta) {
senha +-  parseInt(senhaCorreta);
senha = parseInt(entrada('Acesso negado. Tente novamente:'));
}

console.log('Acesso permitido');



