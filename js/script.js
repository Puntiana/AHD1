// constantes modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById ("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

// constantes para cada boton
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnTemperatura = document.getElementById("btnTemperatura")
const btnPosNeg = document.getElementById("btnPosNeg")

let funcionEjercicioActual = null;

// Eventos Botones
btnParImpar.addEventListener("click", function(){
    abrirModal("Número Par o Impar","Ingresa un número para verificar si es par o impar", verificarParImpar);

});
btnMayorEdad.addEventListener("click", function(){
    abrirModal("Mayor de Edad","Ingresa tu edad para saber si eres mayor de edad.", verificarEdad);
});

btnTemperatura.addEventListener("click", function(){
    abrirModal("Temperatura","Ingresa la temperatura de hoy en celsius.", verificarTemperatura);
});

btnPosNeg.addEventListener("click", function(){
    abrirModal("Números positivos/negativos","Ingresa un número para validar si es positivo o negativo.", verificarPosNeg);
});



// Evento abrir modal
function abrirModal(titulo, descripcion, funcionEjercicio){
    tituloModal.textContent = titulo;
    ejercicioModal.textContent = descripcion;
    respuesta.value ="";
    mensaje.textContent = "";

    funcionEjercicioActual = funcionEjercicio;

    modal.classList.add("activarModal");

}

btnCerrar.addEventListener("click", function () {
    modal.classList.remove("activarModal");
});

// Par-impar
function verificarParImpar(){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa un número válido.";
    }
    else{
        mensaje.textContent = (numero % 2 === 0) ? "Es número par" : "Es número impar";
    }
}

// Mayor de Edad

function verificarEdad (){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa un número válido.";
    }
    else{
        mensaje.textContent = (numero >= 18) ? "Eres mayor de Edad" : "Eres menor de edad";
    }

}

// Temperatura

function verificarTemperatura (){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa la temperatura.";
    }
    else if (numero <= 15){
        mensaje.textContent= "Hace mucho frío"
    }
    else if (numero >= 25){
        mensaje.textContent= "Hace mucho calor"
    }
    else{
        mensaje.textContent = "El clima es agradable";
    }

}

// Número Posotivo o negativo

function verificarPosNeg (){
    let numero = parseInt(respuesta.value);
    if(isNaN(numero)){
        mensaje.textContent = "Ingresa un número.";
    }
    else{
        mensaje.textContent = (numero <= 0) ? "Es un número negativo" : "Es un número positivo";
    }
    

}

// Boton Verificar
btnVerificar.addEventListener ("click", function (){
    if(funcionEjercicioActual){
        funcionEjercicioActual();
    }
});
// console.log("btnCerrar");
