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


//trabalhos animações

const trabalhos = document.getElementById("apresentacao-trabalhos");
const visualizar = document.getElementById("pagina-trabalhos")

trabalhos.addEventListener("click",(e)=>{
    if(visualizar.style.visibility === "visible"){
        visualizar.style.visibility = "hidden"
    }
    else{
        visualizar.style.visibility = "visible";
    }

   
})

const trabalhos1 = document.getElementById("apresentacao-trabalhos1");
const visualizar1 = document.getElementById("pagina-trabalhos1")

trabalhos1.addEventListener("click",(e)=>{
    if(visualizar1.style.visibility === "visible"){
        visualizar1.style.visibility = "hidden"
    }
    else{
        visualizar1.style.visibility = "visible";
    }

   
})

const trabalhos2 = document.getElementById("apresentacao-trabalhos2");
const visualizar2 = document.getElementById("pagina-trabalhos2")

trabalhos2.addEventListener("click",(e)=>{
    if(visualizar2.style.visibility === "visible"){
        visualizar2.style.visibility = "hidden"
    }
    else{
        visualizar2.style.visibility = "visible";
    }

   
})