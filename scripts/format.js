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