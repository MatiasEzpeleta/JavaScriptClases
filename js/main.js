let pesos = prompt("Ingrese cantidad de Pesos $ a convertir");

let respuesta = confirm("Tienes pensada alguna inversion");

alert(pesos + " Pesos son " + Number(pesos) / 96.69 + " Dolares");
alert(pesos + " Pesos son " + Number(pesos) / 114.97 + " Euros");
alert(pesos + " Pesos son " + Number(pesos) * 14.96 + " Yen");
alert(pesos + " Pesos son " + Number(pesos) / 134.46 + " Libras");
alert(pesos + " Pesos son " + Number(pesos) / 3, 813, 873.98 + " Bitcoins");

document.write("El usuario piensa invertir " + respuesta);
if (pesos > 1000) {
    alert("El usuario tiene los requisitos minimos para invertir")

}
else if (pesos < 1000) {
    alert("El monto minimo a invertir es de mil pesos")
}
else if (pesos >= 10000) {
    alert("invertir en criptomonedas")
}