let button = document.getElementById("gerar");

button.addEventListener('click', function(e){
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