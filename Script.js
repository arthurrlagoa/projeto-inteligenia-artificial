
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{

enunciado:"Quando fica em casa se depara com uma IA diferente, uma 
tecnologia que não é igual a qualquer outra um chat que consegue ter todas as respostas possiveis e mais dificies
, ele também gera formas e formatos diferenciados de respostas. O que faria primeiro?",
alternativas: [
{
texto: "Felicidade por ter essa tecnologia",
afirmacao: "Fica contente e feliz por ter essa IA"

},
{
texto: "Isso é pertubador!",
afirmacao: "Quis saber nada sobre essa IA diferente."
}
]
},
{  
{
enunciado: "Qual é o nível de saber sobre a globalização?",
alternativas: [
{
texto: "Alto",
afirmacao:["Você sabe muito sobre o tema globalizaçao. "
]
},
{
texto: "Zero",
afirmacao: ["Você tem conhecimento nenhum sobre a globalização.",

"Com dedicação e esforço ,voce consegue."

]
},
{
texto: "Médio",
afirmacao: ["Você tem um conhecimento mediano sobre o denominado 
   tema abordado. ",

"Use esse saber para libertar a mente , mesmo que seja razoável."

]
}
]
},


}
]
},
{
enunciado: "Com a descoberta desta tecnologia diferenciada e estranha, fica surpreso e 
tenta desta la e controla la para que so voce possa controla la e fazendo isso como ficaria a IA?",
alternativas: [
{
texto: "Utiliza uma ferramenta pra tentar possuia la somente para
voce, tenta rackeala e modifica la ao seu favor próprio. Sem que ninguem possa usa
la.",

afirmacao: "Conseguiu usar a IA pra obter informações que possibilitam o rackeamento."
},
{
texto: "Chegou em casa, mas não conseguiu o que queria e então tentou de uma outra forma, mas mesmo
assim não deu certo.",

afirmacao: "Sentiu mais dificultade e então não tentou mais."

}
]
},
{
enunciado: "Após longos periodos tentando compreender e modificar
realizou um codigo pirata para tentar obter a IA , demorou 
alguns periodos para construir e formatar o codigo, mas finalmente conseguiu
a questão é como usar o codigo?",
alternativas: [
{
texto: "Usa o site mas não consegue, tem dificultade e falta
de atenção .",

afirmacao: "Não consegue compreeder e fica dificil entender."

},
{

texto: "Gosta do site e consegue compreender bem , o que está
escrito , so não sabe como usar na IA.",

afirmacao: "Sabe usar o site mas não sabe como usar na IA, e fica dificil para compreender."

}
]
},
{
enunciado: "Ao final do problema voce precisa criar outro
codigo mais facil e para compreender?",
alternativas: [
{
texto: "Cria o codigo só não consegue finalizar.",

afirmacao: "tenta criar o codigo mas nao e´permido 
finalizar, terminar, fica sem o que fazer então."
},
{
texto: "Cria o codigo mas ela não funcina como voce quer.",

afirmacao: "depois de ficar varia horas tentando, não consegue o que voce
queria de fato e não resolveu em nada!"

}
]
},
{
enunciado: "Você então desisti de tentar roubar o chat somente para voce
e tenta agora colocar peguntas no chat para compreende lo melhor ? ",
alternativas: [
{
texto: "Escreve diversas perguntas ao chat, tipo como ele funciona.",

afirmacao: "escreve para a IA , para tenter saber mais sobre ela ,e sobre como ela ajuda
nós seres humanos."

},
{
texto: "O chat pode ate ajudar, mas temos que 
fazer as coisas sem o chat para podermos aprender e 
saber, e termos algum futuro, não sabemos o destino do 
amanha. "

}
]

},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () =>
respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();