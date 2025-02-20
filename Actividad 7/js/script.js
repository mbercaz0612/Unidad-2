function Comprobar() {
    let nota = parseFloat(document.getElementById("a").value);
if (nota >= 0 && nota <= 10) {
    if (nota >= 5) {
        document.getElementById("resultado").innerHTML = "¡Aprobado!";
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").innerHTML = "¡Suspenso!";
        document.getElementById("resultado").style.color = "red";
    }
}
else {
    document.getElementById("resultado").innerHTML = "no es";
    document.getElementById("resultado").style.color = "blue";
}
}
