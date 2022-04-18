let toggle = document.getElementById("toggle");

//ativando modo escuro da pagina inicial
toggle.addEventListener('click', function handler(){
    if(toggle.checked == true){
        localStorage.setItem("darkTheme", "true");
        document.body.style.backgroundColor = '#2d2d2e'; // background
        document.getElementById("slabel").style.color = "white"; // label "modo escuro"
        document.getElementById("label").style.color = "white"; // label "o que deseja fazer?"
        document.getElementById("footer").style.color = "white"; // label assinatura
        document.getElementById("criar").style.backgroundColor = "gray"; // fundo do botao de criacao de id's
        document.getElementById("criar").style.color = "white"; // escrita do botao de criacao de id's
        document.getElementById("format").style.backgroundColor = "gray"; // fundo do botao de formatacao de id's
        document.getElementById("format").style.color = "white"; // escrita do botao de formatacao de id's
        document.getElementById("img").setAttribute("src", "/img/img-gray.png"); // alterando a img para escrita com cor cinza;
    }else{
        localStorage.clear();
        document.body.style.backgroundColor = '#ffffff'; // background
        document.getElementById("slabel").style.color = "black"; // label "modo escuro"
        document.getElementById("label").style.color = "black"; // label "o que deseja fazer?"
        document.getElementById("footer").style.color = "black"; // label assinatura
        document.getElementById("criar").style.backgroundColor = "LightGray"; // fundo do botao de criacao de id's
        document.getElementById("criar").style.color = "black"; // escrita do botao de criacao de id's
        document.getElementById("format").style.backgroundColor = "LightGray"; // fundo do botao de formatacao de id's
        document.getElementById("format").style.color = "black"; // escrita do botao de formatacao de id's
        document.getElementById("img").setAttribute("src", "/img/img-black.png"); // alterando a img para escrita com cor preto(padrao);
    } //else
 });

let key = localStorage.getItem("darkTheme"); // obtendo valor guardado no navegador sobre modo escuro, se foi ativado alguma vez ou nao;

if(key === "true"){
    toggle.checked = true;
    toggle.dispatchEvent(new Event("click"));
}