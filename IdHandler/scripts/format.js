let format = document.getElementById("formatar");

format.addEventListener('click', function(E){
    let ids = document.getElementById("ids").value;
    let newids = new String();

    for(let i = 0; i < ids.length; i++){
        if(ids.charAt(i) == ' ' || ids.charAt(i) == '\t'){
            newids += ',';
        }else{
            newids += ids.charAt(i);
        }
    }
    navigator.clipboard.writeText(newids);
    let label = document.getElementById("p");
    label.hidden = "false";
    label.className = "p";
});

let toggle = document.getElementById("toggle");

//ativando modo escuro da pagina format
toggle.addEventListener('click', function handler(){
    if(toggle.checked == true){
        localStorage.setItem("darkTheme", "true");
        document.body.style.backgroundColor = '#2d2d2e'; // background
        document.getElementById("slabel").style.color = "white"; // label "modo escuro"
        document.getElementById("label").style.color = "white"; // label "Insira abaixo a sequencia de id's a ser formatada:"
        document.getElementById("ids").style.backgroundColor = "gray"; // fundo do textarea
        document.getElementById("ids").style.color = "white"; // letra do textarea
        document.getElementById("formatar").style.backgroundColor = "gray"; // fundo do botao "Formatar id's"
        document.getElementById("formatar").style.color = "white"; // fundo do botao "Formatar id's"
        document.getElementById("footer").style.color = "white"; // label assinatura
        document.getElementById("img").setAttribute("src", "/img/img-gray.png"); // alterando a img para escrita com cor cinza;
        document.getElementById("p").style.color = "white"; // paragrafo escondido;
    }else{
        localStorage.clear();
        document.body.style.backgroundColor = '#ffffff'; // background
        document.getElementById("slabel").style.color = "black"; // label "modo escuro"
        document.getElementById("label").style.color = "black"; // label "Insira abaixo a sequencia de id's a ser formatada:"
        document.getElementById("ids").style.backgroundColor = "LightGray";  // fundo do textarea
        document.getElementById("ids").style.color = "black"; // letra do textarea
        document.getElementById("formatar").style.backgroundColor = "LightGray"; // fundo do botao "Formatar id's"
        document.getElementById("formatar").style.color = "black"; // fundo do botao "Formatar id's"
        document.getElementById("footer").style.color = "black"; // label assinatura
        document.getElementById("img").setAttribute("src", "/img/img-black.png"); // alterando a img para escrita com cor preto(padrao);
        document.getElementById("p").style.color = "black"; // paragrafo escondido;
    } //else
});

let key = localStorage.getItem("darkTheme"); // obtendo valor guardado no navegador sobre modo escuro, se foi ativado alguma vez ou nao;

if(key === "true"){
    toggle.checked = true;
    toggle.dispatchEvent(new Event("click"));
}