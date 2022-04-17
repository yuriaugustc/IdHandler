let toggle = document.getElementById("toggle");

//ativando modo escuro
toggle.addEventListener('click', function(e){
    if(document.getElementById("toggle").checked == true){
        localStorage.setItem("dark_theme", "true");
        document.body.style.backgroundColor = '#2d2d2e'; // background
        document.getElementById("slabel").style.color = "white"; // label "modo escuro"
        document.getElementById("label").style.color = "white"; // label "o que deseja fazer?"
        document.getElementById("footer").style.color = "white"; // label assinatura
        document.getElementById("criar").style.backgroundColor = "gray"; // fundo do botao de criacao de id's
        document.getElementById("criar").style.color = "white"; // escrita do botao de criacao de id's
        document.getElementById("format").style.backgroundColor = "gray"; // fundo do botao de formatacao de id's
        document.getElementById("format").style.color = "white"; // escrita do botao de formatacao de id's
    }else{
        //localStorage.removeItem("dark_theme", "true");
        document.body.style.backgroundColor = '#ffffff'; // background
        document.getElementById("slabel").style.color = "black"; // label "modo escuro"
        document.getElementById("label").style.color = "black"; // label "o que deseja fazer?"
        document.getElementById("footer").style.color = "black"; // label assinatura
        document.getElementById("criar").style.backgroundColor = "white"; // fundo do botao de criacao de id's
        document.getElementById("criar").style.color = "black"; // escrita do botao de criacao de id's
        document.getElementById("format").style.backgroundColor = "white"; // fundo do botao de formatacao de id's
        document.getElementById("format").style.color = "black"; // escrita do botao de formatacao de id's
    }
});

if(localStorage.getItem("dark_theme")){
    toggle.dispatchEvent(new Event("click"));
}