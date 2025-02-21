function factorial() {
    let Numero;
    let resultado = 1;

    Numero = parseInt(document.getElementById("a").value, 10);

    for ( let cuenta= 1 ;  cuenta <= Numero ; cuenta = cuenta + 1) {
            resultado = resultado * cuenta;
    }
    
    
    alert("El factorial es " + resultado);
}
