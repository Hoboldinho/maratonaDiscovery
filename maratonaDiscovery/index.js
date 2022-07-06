// let = variável (posso reatribuir valor) - não pode inicar com númeto
// const = constante (não posso reatribuir valor)

// dica: nome das variáveis em minúsculo e separadas com a proxima palavra iniciando com maíscula

// O JS executa de linha a linha

// = é igual a "atribuição de valor"

// concatenar com "+"
// == é igual a igual

const inputPergunta = document.querySelector("#inputPergunta")
const buttonPergunta = document.querySelector("#buttonPergunta")

const elementoResposta = document.querySelector("#resposta")

const respostas = [
    "sim",
    "não",
    "talvez",
    "quem sabe",
    "posto ipiranga",
    "ahh cara, foda isso!",
    "tenso",
    "meu ovo!"
]

//clicar para fazer uma pergunta

function fazerPergunta(){

    buttonPergunta.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    //Gerar número aleatorio
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

    elementoResposta.style.opacity = 1;

    //sumir a resposta depois de 3 segundos
    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        buttonPergunta.removeAttribute("disabled")
    }, 3000)
}