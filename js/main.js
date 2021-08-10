
let numero = prompt("ingresar un numero");

while (numero <= 100) {
    numero++;
    document.write(numero + "<br>");
    if(numero <= 10) {
        continue;
    }

    if(numero == 20) {
        break;
    }
}


