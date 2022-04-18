let create = document.getElementById("gerar");

create.addEventListener('click', function(e) {
    let qtd = document.getElementById("qtd").value;
    let fid = document.getElementById("fid").value;
    
    e.preventDefault();

    let res = fid.toString(); //eu precisei inserir o primeiro id na variavel para sinalizar ao JS que a variavel eh do tipo string, (ainda nao sei se existe uma maneira mais oportuna)
    
    for(let i = 1; i < qtd; i++){
        fid++;
        res += "," + fid.toString();
    }//for
    let resp = document.createElement("textarea");
    resp.hidden = true;
    resp.value = res;
    // resp.select();
    // resp.setSelectionRange(0, 99999);
    // document.execCommand("copy");
    navigator.clipboard.writeText(resp.value);
    resp.remove();
    let label = document.getElementById("p");
    label.hidden = "false";
    label.className = "p";
});

let toggle = document.getElementById("toggle");

//ativando modo escuro da pagina create
toggle.addEventListener('click', function handler(){
    if(toggle.checked == true){
        localStorage.setItem("darkTheme", "true");
        document.body.style.backgroundColor = '#2d2d2e'; // background
        document.getElementById("slabel").style.color = "white"; // label "modo escuro"
        document.getElementById("label").style.color = "white"; // label "Quantos id's deseja gerar?"
        document.getElementById("label1").style.color = "white"; // label "Qual o primeiro id da sequencia?"
        document.getElementById("qtd").style.backgroundColor = "gray"; // fundo do textarea
        document.getElementById("qtd").style.color = "white"; // letra do textarea
        document.getElementById("fid").style.backgroundColor = "gray"; // fundo do textarea
        document.getElementById("fid").style.color = "white"; // letra do textarea
        document.getElementById("footer").style.color = "white"; // label assinatura
        document.getElementById("img").setAttribute("src", "/img/img-gray.png"); // alterando a img para escrita com cor cinza;
        document.getElementById("p").style.color = "white"; // paragrafo escondido;
    }else{
        localStorage.clear();
        document.body.style.backgroundColor = '#ffffff'; // background
        document.getElementById("slabel").style.color = "black"; // label "modo escuro"
        document.getElementById("label").style.color = "black"; // label "Quantos id's deseja gerar?"
        document.getElementById("label1").style.color = "black"; // label "Qual o primeiro id da sequencia?"
        document.getElementById("qtd").style.backgroundColor = "LightGray";  // fundo do textarea
        document.getElementById("qtd").style.color = "black"; // letra do textarea
        document.getElementById("fid").style.backgroundColor = "LightGray";  // fundo do textarea
        document.getElementById("fid").style.color = "black"; // letra do textarea
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