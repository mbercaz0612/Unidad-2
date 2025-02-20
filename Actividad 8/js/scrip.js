function funcionif() {
let hora;
    hora =parseFloat(document.getElementById("resultado").value, 10);
    if (hora > 6 && < 11 ){
        document.getElementById("resultado").innerHTML = "Buenos dias";
    }
    if (hora > 12 && < 21){
        document.getElementById("resultado").innerHTML = "Buenas tardes";
    }
    if ((hora > 21 && hora < 25 ) || (hora > 0 && hora < 7) ){
    document.getElementById("resultado").innerHTML = "buenas noches";
}
    if(hora > 24 && < 0){
    document.getElementById("resultado").innerHTML = "No hace";
}
}
function funcionswitch() {

    function saludar(){
    	let hora;
        hora = parseInt(document.getElementById("resultado").value, 10);
        
        switch (hora) {
        	case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            	alert("Buenos días");
            break;
            	
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            	alert("Buenas tardes");
            break;
            
            case 22:
            case 23:
            case 24:
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            	alert("Buenas noches");
            break;
        
            default:
                alert("No es")
        }
        
    }
}
