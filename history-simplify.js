console.clear(); //limpando o terminal
console.log(); // começa pulando uma linha
var prompt = require('prompt-sync')();

/* Para hoje você deve:
Construir o rascunho da sua história
Criar as variáveis com o prompt para fazer as perguntas e receber as respostas
Exibir ao final o valor de cada uma das respostas
0 respostas Sim: Você falha miseravelmente.
1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
*/

console.clear();

console.log(`\nNas profundezas das montanhas, ao sul das Terras do Rio Acádia, 
encontra-se um pacifico vilarejo.Esse pequeno vilarejo é conhecido por ser o berço da antiga lendaria Seita Espadachim Tiashuyia 
e também é o lugar onde Dijon Yang passou toda sua infância aperfeiçoando suas técnicas. 
Enquanto todos dormiam Dijon aprimorava suas habilidades utilizando espadas de bamboo, 
praticando antes do nascer do sol até a luz do luar. Seu maior sonho era ser bom o suficiente 
para entrar na Seita Espadachim, ja que o nível requerido é altíssimo. Sendo assim, 
após incontáveis dias e noites, se esforçando ao máximo e enfrentando neve e fortes períodos de chuvas, 
finalmente o portão do Templo Sagrado foram abertos para ele. Não demorou muito e logo, 
seu magnífico talento e obsessão por espadas atraiu a atenção dos líderes, incluindo o Mestre Tagima, 
o principal lider espiritual da Seita Espadachim Tiashuyia. Então,
com o todo o treinamento e orientação do Mestre Tagima, Dijon se destacou dentre todos seus
colegas e acabou se tornando o mais novo líder dessa nova geração de alunos.\n`);

let yes = 0;
var step = 0;
var finish = false;

while (finish !== true) {
    if (step === 0) {
        var rep = prompt(`O mais novo líder Dijon estava feliz sob a vida pacata de cultivo nas montanhas? `);
    } else if (step === 1) {
        var rep = prompt(`Mas sua obsessão e ambição pela espada podia ser controlado? `);
    } else if (step === 2) {
        var rep = prompt(`O Mestre Tajima deixou Dijon descer da montanha e explorar novas áreas? `);
    } else if (step === 3) {
        var rep = prompt(`Dijon obedeceu as ordens de Mestre Tajima sobre descer a montanha ? `);
    } else if (step === 4) {
        var rep = prompt(`Ele (Dijon) era incapaz de fazer qualquer coisa para se tornar o mais forte? `);
    }
    if (rep == 'sim') {
        yes++
        step++
        if (step >= 4) {
            finish = true;
        }
    } else if (rep == 'nao') {
        step++
        if (step >= 4) {
            finish = true;
        }
    } else if (rep == 'exit') {
        finish = true;
    } else {
        console.log('\n Por favor, tente novamente digitando apenas sim ou nao ou exit para sair \n ');
    }
}
if (rep != 'exit') {
    let final = prompt(`Aperte qualquer tecla para o final escolhido.. `);

    if (yes == 0) {
        console.log(`\nDijon conheceu o homem que se tornaria seu maior rival após abandonar as Terras do Rio Acádia, Zilong que por 
    sua vez tinha a vida e todo seu corpo como uma extensão natural da espada e nesta batalha Dijon foi derrotado e morreu pela própria espada que lhe foi roubada.\n`)
    } else if (yes == 1 || yes == 2) {
        console.log(`\nDijon saiu em busca de se tornar o melhor Espadachim da história dos Acádianos, treinou por 3 longos anos durante sua jornada e após conhecer
    um verdadeiro guerreiro digno de sua honra, conhecido como Zilong de Serina, acabou travando uma longa batalha, mas saiu vivo porém cego.\n`)
    } else if (yes == 3) {
        console.log(`\nO Mestre Tajima muito decepcionado com seu pupilo ao ver que o mesmo se encontra em conflito interno sobre querer ser o melhor espadachim,
    decide então liberá-lo dos treinamentos e deixá-lo por conta após apresentá-lo para Zilong seu filho "perdido" que sempre treinou só e lhe disse: 
    "Você ainda não esta pronto, jamais conseguirá derrotar meu filho e garantir que será o melhor espadachim de Acácia um dia". Dito e assim se sucedeu.\n`)
    } else if (yes == 4) {
        console.log(`\nO Mestre Tajima sentiu no coração a vontade e o desejo por poder de Dijon, sendo assim, o trancou nas profundezas da montanha e só o permitiu sair 
    para sua jornada após concluir longos 3 anos de treinamento intensivo, quando então conheceu uma princesa que fez com que ele desistisse de seus sonhos 
    e abandonar o cargo espadachim e assim assumiram todas as responsabilidades do reino, sendo muito reconhecidos Rei e Rainha de Acádia.\n`)
    } else if (yes == 5) {
        console.log(`\nCom o intuíto de ser o mais forte, porém não a todo custo, Dijon seguiu todas as orientações do Mestre Tajima e conseguiu controlar suas obsessões
    pelo poder da espada. Logo, ao descer a montanha em busca de ser o mais invencível, ficou reconhecido pelos 4 quantos da Terra como o Deus das espadas de Tiashuia e 
    com todo seu talento e esforço, viveu toda sua vida fazendo tudo o que ama e com sua família: Anastásya sua mulher, Yássera e Milan suas filhas.\n`)
    }
    console.log('Fim...');
}
