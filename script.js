const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal função do sistema aerodinâmico em um carro de Fórmula 1?",
        alternativas: [
            {
                texto: "O sistema aerodinâmico ajuda a reduzir o arrasto, permitindo que o carro atinja maiores velocidades retas.",
                afirmacao: "O design aerodinâmico de um carro de Fórmula 1 é crucial para reduzir a resistência do ar, o que contribui para alcançar velocidades mais altas em retas."
            },
            {
                texto: "O sistema aerodinâmico melhora a aderência ao solo, aumentando a estabilidade em curvas e durante frenagens.",
                afirmacao: "O fluxo de ar controlado pelo design aerodinâmico dos carros de Fórmula 1 gera força descendente, o que melhora a aderência dos pneus ao asfalto e aumenta a estabilidade nas curvas."
            }
           
        ]
    },
    {
        enunciado: "Qual tipo de motor é utilizado na Fórmula 1 atualmente?",
        alternativas: [
            {
                texto: "Os carros de Fórmula 1 usam motores de combustão interna tradicionais, sem componentes híbridos.",
                afirmacao: "A Fórmula 1 não usa apenas motores de combustão interna tradicionais; os carros atualmente são equipados com motores híbridos que combinam unidades de potência a gasolina com sistemas de recuperação de energia."
            },
            {
                texto: "Os carros de Fórmula 1 utilizam motores híbridos que combinam um motor a combustão interna com um sistema elétrico de recuperação de energia.",
                afirmacao: " Os motores híbridos na Fórmula 1 combinam a tecnologia de combustão interna com sistemas elétricos para melhorar a eficiência de combustível e a performance geral dos carros."
            }
           
        ]
    },
    {
        enunciado: "Qual é a importância do sistema de freios em um carro de Fórmula 1?",
        alternativas: [
            {
                texto: "O sistema de freios é menos importante, já que a maioria das frenagens é feita por sistemas de recuperação de energia.",
                afirmacao:"O sistema de freios em um carro de Fórmula 1 é fundamental, pois ele deve ser capaz de suportar forças extremas e temperaturas elevadas durante as frenagens intensas, complementando os sistemas de recuperação de energia."
            },
            {
                texto: "O sistema de freios é crucial e projetado para suportar altas temperaturas e forças extremas durante as corridas.",
                afirmacao:"Devido às altas velocidades e às exigências das pistas, os freios dos carros de Fórmula 1 são projetados para resistir a temperaturas extremamente altas e forças intensas, garantindo uma frenagem eficaz."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>
            respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}
mostraPergunta();