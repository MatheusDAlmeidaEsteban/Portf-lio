//Animicação pagina home
const elementoH1 = document.getElementById("hAnima1");
const elementoH2 = document.getElementById("hAnima2");
const text1 = " Olá, Eu sou Matheus Esteban.";
const text2 = "Este é o meu Portfólio!";
const velo = 100;


function animacaoTexto1(elementoH1, text1, velo) {
    const char1 = text1.split("").reverse();

    const tipo = setInterval(() => {

        if (!char1.length) {
            return clearInterval(tipo);
        }

        const proximo = char1.pop();
        elementoH1.innerHTML += proximo;


    }, velo)
}

function animacaoTexto2(elementoH2, text2, velo) {
    const char2 = text2.split("").reverse();

    const tipo2 = setInterval(() => {

        if (!char2.length) {
            return clearInterval(tipo2);
        }

        const proximo2 = char2.pop();
        elementoH2.innerHTML += proximo2;


    }, velo)
}


animacaoTexto1(elementoH1, text1, velo);

setTimeout(function() {
    animacaoTexto2(elementoH2, text2, velo);
}, 3000);