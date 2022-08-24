let darkMode = document.getElementById("darkMode");

darkMode.addEventListener('click', function handler(){
    let buttons = document.querySelectorAll("button");
    let inputs = document.querySelectorAll("input");
    let labels = document.querySelectorAll("label");
    let as = document.querySelectorAll("a");
    
    if(darkMode.checked == true){
        localStorage.setItem("darkTheme", "true");
        document.body.style.transition = "2s"
        document.body.style.backgroundColor = "#2d2d2e"
        document.querySelector("img").src = "../img/img-gray.png"
        for (const but of buttons) {
            but.style.transition = "3s"
            but.style.backgroundColor = "gray"
            but.style.color = "white"
        }
        for(const inpt of inputs){
            inpt.style.transition = "3s"
            inpt.style.backgroundColor = "gray"
            inpt.style.color = "white"
        }
        for(const lbl of labels){
            lbl.style.transition = "3s"
            lbl.style.color = "white"
        }
        for(const a of as){
            a.style.transition = "3s"
            a.style.color = "white"
            a.className = "nightA"
        }
    }else{
        localStorage.removeItem("darkTheme");
        document.body.style.transition = "2s"
        document.body.style.backgroundColor = "white"
        document.querySelector("img").src = "../img/img-black.png"
        for (const but of buttons) {
            but.style.transition = "3s"
            but.style.backgroundColor = "lightGray"
            but.style.color = "black"
        }
        for(const inpt of inputs){
            inpt.style.transition = "3s"
            inpt.style.backgroundColor = "white"
            inpt.style.color = "black"
        }
        for(const lbl of labels){
            lbl.style.transition = "3s"
            lbl.style.color = "black"
        }
        for(const a of as){
            a.style.transition = "3s"
            a.style.color = "black"
            a.className = "lightA"
        }
    }
});

let key = localStorage.getItem("darkTheme"); // obtendo valor guardado no navegador sobre modo escuro, se foi ativado alguma vez ou nao;
if(key === "true"){
    darkMode.checked = true;
    darkMode.dispatchEvent(new Event("click"));
}