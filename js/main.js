let free = false;

const validarCliente = (time) =>{
    let edad = Number( prompt("¿Cual es tu edad?"));
    if (edad > 18) {
       if (time >= 2 && time < 7 && free==false) {
           alert("Despues de las 2 entrada gratis");
           free = true;

       } else {
           alert(`Son las ${time}:00hs y podes pasar, pero tenes que pagar la entrada`);
       }
    } else {
        alert("Solo para mayores de 18 años")
    }
}

validarCliente(23)
validarCliente(00)
validarCliente(1)
validarCliente(2)
validarCliente(3)
validarCliente(4)
validarCliente(5)
validarCliente(6)





