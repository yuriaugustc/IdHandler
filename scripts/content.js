let toggle = document.getElementById("toggle");

//ativando modo escuro
toggle.addEventListener('click', function(e){
    if(document.getElementById("toggle").checked == true){
        document.body.style.backgroundColor = '#696969';
    }else{
        document.body.style.backgroundColor = '#ffffff';
    }
});
