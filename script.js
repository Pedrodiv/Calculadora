let calculadora = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
//datos//

let peso
let dato

//Calculo//
function calcFlujo(peso){
    if (peso <= 10){
		return Math.round((100 * peso)/24);}
	else if (peso > 10 && peso <= 20){
		return Math.round(((100 * 10)+ 50 * (peso - 10))/24);}
	else if (peso <= 30){
		return Math.round(((100 * 10)+(50 * 10)+ 20 * (peso - 20))/24);}  
    else{
        return Math.round((( (peso * 4) + 7) / (peso + 90))*1500/24);}
}
//Al hacer click en el botón, se va a ejecutar una función anónima//
calcular.addEventListener("click", () =>{
    dato = document.getElementById("peso"); 
    peso = dato.value * 1;
    if (dato.value === ""){
        ERROR.style.display = "block";
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        return;
    }
    else{
        ERROR.style.display = 'none'
        let flujo = calcFlujo(peso);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
})