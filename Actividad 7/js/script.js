function saludar2() {

    if (nota < 5 ){
        document.getElementById("resultado").innerHTML = "¡Suspenso!";
        document.getElementById("resultado").style.color = "red";
    }
    if (nota > 4 ){
        document.getElementById("resultado").innerHTML = "¡Aprobado!";
        document.getElementById("resultado").style.color = "green";

}
    if (nota < 0 && nota > 10){
        document.getElementById("resultado").innerHTML = "no es";
        document.getElementById("resultado").style.color = "blue";
    }
}
