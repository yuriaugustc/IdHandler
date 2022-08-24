// START dinamica de mostrar os recursos

let gerar = document.getElementById("gerar");

gerar.addEventListener("click", () => {
    document.getElementById("index").setAttribute("hidden", true);
    document.getElementById("create").removeAttribute("hidden");
});

let ordenar = document.getElementById("ordenar");

ordenar.addEventListener("click", () => {
    document.getElementById("index").setAttribute("hidden", true);
    document.getElementById("ordenate").removeAttribute("hidden");
});

let formatar = document.getElementById("formatar");

formatar.addEventListener("click", () => {
    document.getElementById("index").setAttribute("hidden", true);
    document.getElementById("format").removeAttribute("hidden");
});

let botoesVoltar = document.querySelectorAll(".voltar");

for (let button of botoesVoltar) {
    button.addEventListener("click", () =>{
        document.getElementById("index").removeAttribute("hidden");
        document.getElementById("create").setAttribute("hidden", true);
        document.getElementById("ordenate").setAttribute("hidden", true);
        document.getElementById("format").setAttribute("hidden", true);
    });
}
// END dinamica de mostrar os recursos

// START vincular enter com disparo de listeners nos inputs
let input1 = document.getElementById('firstId');
let input2 = document.getElementById('sequencia');
let input3 = document.getElementById('seq');
input1.addEventListener('keypress', function(ev){
    if(ev.code == "Enter" || ev.code == "NumpadEnter"){
        createBegin.dispatchEvent(new Event("click"));
    }
});
input2.addEventListener('keypress', function(ev){
    if(ev.code == "Enter" || ev.code == "NumpadEnter"){
        ordenateBegin.dispatchEvent(new Event("click"));
    }
});
input3.addEventListener('keypress', function(ev){
    if(ev.code == "Enter" || ev.code == "NumpadEnter"){
        formatBegin.dispatchEvent(new Event("click"));
    }
});

// START vincular enter com disparo de listeners

// START funcoes Gerar Ids
let createBegin = document.getElementById("createBegin");
createBegin.addEventListener("click", () => {
    let qtdIds = document.getElementById("qtdIds").value;
    let firstId = document.getElementById("firstId").value;

    let string = "";
    let i = 0;
    for(i = firstId; i < qtdIds; i++){
        string += i.toString() + ", ";
    }
    string += i.toString();
    navigator.clipboard.writeText(string);
    document.getElementById("answer1").removeAttribute("hidden");
});
// END funcoes Gerar Ids

// START funcoes Ordenar Ids
let ordenateBegin = document.getElementById("ordenateBegin");
ordenateBegin.addEventListener("click", () => {
    let sequencia = [];
    if(!document.getElementById("formatadas").checked){
        sequencia = formatarSequencia(document.getElementById("sequencia").value);
    }
    else{
        let ids = document.getElementById("sequencia").value;
        let char = ''
        let i = 0, numbr = "";
        while(i < ids.length){
            if(!((ids.charAt(i) > 'a' && ids.charAt(i) < 'z')||(ids.charAt(i) > 'A' && ids.charAt(i) < 'Z')||(ids.charAt(i) == " "))){
                char = ids.charAt(i);
                if(ids.charAt(i) === ','){
                    sequencia.push(parseInt(numbr));
                    numbr = "";
                }else{
                    numbr += ids.charAt(i);
                }
            }
            i++;
        }
        sequencia.push(parseInt(numbr));
    }
    
    for (let i = 1; i < sequencia.length; i++) {
        let current = sequencia[i];
        let j = i-1; 
        while ((j > -1) && (current < sequencia[j])) {
            sequencia[j+1] = sequencia[j];
            j--;
        }
        sequencia[j+1] = current;
    }
    
    let i = 0, string = "";
    for(i = 0; i < sequencia.length-1; i++){
        string += sequencia[i].toString() + ", ";
    }
    string += sequencia[i].toString();

    navigator.clipboard.writeText(string);
    document.getElementById("answer2").removeAttribute("hidden");
});
// END funcoes Ordenar Ids

// START funcoes Formats Ids
let formatBegin = document.getElementById("formatBegin");
formatBegin.addEventListener("click", () =>{
    let seq = formatarSequencia(document.getElementById("seq").value);
    
    let i = 0, string = "";
    for(i = 0; i < seq.length-1; i++){
        string += seq[i].toString() + ", ";
    }
    string += seq[i].toString();

    navigator.clipboard.writeText(string);
    document.getElementById("answer3").removeAttribute("hidden");
});
// END funcoes Formats Ids

function formatarSequencia(str){
    let ids = str.trim(), numbr = "";
    let vet = [];
    for(let i = 0; i < str.length; i++){
        if(!((ids.charAt(i) > 'a' && ids.charAt(i) < 'z')||(ids.charAt(i) > 'A' && ids.charAt(i) < 'Z'))){
            if(ids.charAt(i) === ' ' || ids.charAt(i) === '\t' || ids.charAt(i) === '\n'){
                vet.push(parseInt(numbr));
                numbr = "";
            }else{
                numbr += ids.charAt(i);
            }
        }
    }
    vet.push(parseInt(numbr));
    return vet;
}