function funcionif() {

    if (hora > 6 && < 11 ){
        document.getElementById("a").innerHTML = "Buenos dias";
    }
    if (hora > 12 && < 21){
        document.getElementById("a").innerHTML = "Buenas tardes";
    }
    if ((hora > 21 && hora < 25 ) || (hora > 0 && hora < 7) ){
    document.getElementById("a").innerHTML = "buenas noches";
}
    if(hora > 24 ){
    document.getElementById("a").innerHTML = "No hace";
}
}
function funcionswitch() {

    function saludar(){
    	let hora;
        hora = parseInt(document.getElementById("a").value);
        
        switch (num) {
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