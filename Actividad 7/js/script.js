function saludar2() {

    if (temp > 5 ){
        document.getElementById("resultado").innerHTML = "Hace Bueno";
        document.getElementById("resultado").style.color = "green";
    }
    else{
        document.getElementById("resultado").innerHTML = "Hace mal día";
        document.getElementById("resultado").style.color = "red";
}
}
function saludar() {

    function saludar(){
    	let num;
        num = parseInt(document.getElementById("a").value);
        
        switch (num) {
        	case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            	alert("Feliz navidad");
            break;
            	
            case 3:
            	alert("Feliz año");
            break;
            
            default:
            	alert("Eres un bestia");
            break;
        
        }
        
    }
}