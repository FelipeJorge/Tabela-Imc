var paciente = document.querySelector ('.primeiroPaciente');


var tdPeso = document.querySelector ('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = document.querySelector ('.info-altura');
var altura = tdAltura.textContent;



var tdImc = paciente.querySelector('.info-imc');


var pesoValido = true;
var alturaValida = true;



if (peso <= 0 || peso >= 1000){
    console.log ("Peso inválido");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
}
if (altura <= 0 || altura >= 3.00){
    console.log ("Altura inválida")
    alturaValida = false;
    tdImc.textContent = "Altura Inválida!";
}
if (pesoValido && alturaValida){
    const imc = peso / (altura*altura);
    tdImc.textContent = imc;

}