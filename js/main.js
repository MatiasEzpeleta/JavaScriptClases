/* let nombre = prompt('Hola,cual es tu nombre?')
alert('Bienvenido ' + nombre) */

let acumulador = ``;
let tienda = [{
        nombre: 'Monitor 27 Pulgadas',
        urlImagen: 'http://placehold.it/300x250',
        marca: 'Samsung',
        precio: 30000
    },
    {
        nombre: 'Monitor 24 Pulgadas',
        urlImagen: 'http://placehold.it/300x250',
        marca: 'Samsung',
        precio: 22000
    },
    {
        nombre: 'Celular G23',
        marca: 'Motorola',
        urlImagen: 'http://placehold.it/300x250',
        precio: 25000
    },
    {
        nombre: 'Tablet A8',
        marca: 'LG',
        urlImagen: 'http://placehold.it/300x250',
        precio: 18000
    },
];


/* Metodo Sort para ordenar los elementos de un array */
const tiendaOrdenada = tienda.sort((a, b) => {
    return (a.precio > b.precio) ? -1 : 1
})
console.log(tiendaOrdenada)


/* Object Constructor */
class Producto{
constructor(nombre, marca, precio, stock) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.stock= stock;
    this.disponible = false;}

    disponibilidad() {
        this.disponible = true;
    }
    
    sumaIva() {
        this.precio = this.precio * 1.21;
    }        

    venta(cantidad) {
        if(cantidad <= stock){
            return(stock -= cantidad)
        }else{
            alert('Stock insuficiente')
        }
    }
    total(cantidad) {
        this.precio = this.precio * cantidad;
    }
}
/* Creamos el objeto con su respectiva cantidad */
const producto2 = new Producto('monitor 40 pulgadas', 'LG', 78500, 5);
console.log(producto2);

const producto3 = new Producto('Celular A51', 'Samsung', 52999, 0)
console.log(producto3)

/* Preguntamos al usuario que cantidad de producto quiere */
let cantidad = prompt('Indique la cantidad de ${producto2.nombre} que desea comprar');

/* Agregamos IVA */
producto2.sumaIva();
producto3.sumaIva();

/* Para el total, llamamos al metodo del objeto, pasandole la cantidad del producto que eligió el usuario  */
producto2.total(cantidad);

/* empujamos el producto al carrito con push */
tienda.push(producto2);


/* para mostrarlo en la consola como una tabla*/
console.table(tienda)

/* para mostrarle al usuario el total con el iva incluido */
alert('El total de su compra con iva incluido es ${producto2.precio}')

for (let i = 0; i < tienda.length; i++) {

    let total = 0;

    function calcularTotal(totalCarrito) {
        // Precio sin IVA
        document.getElementById("verTotal").innerHTML = 'El total es: $ ' + totalCarrito;
    }

    function calcularIva(totalCarrito) {
        // Precio con IVA
        document.getElementById("verTotalConIva").innerHTML = 'El total con IVA es: $ ' + totalCarrito * 1.21;
    }

    function agregarProductos(precio) {
        let totalCarrito = total += precio;

        calcularTotal(totalCarrito);
        calcularIva(totalCarrito);
    }

    acumulador +=
        `<div class="tienda">
        <img src="${tienda[i].urlImagen}" alt="${tienda[i].nombre}"> 
        <h2>${tienda[i].nombre}</h2>        
        <p>${tienda[i].marca}</p>
        <p>$${tienda[i].precio}</p>
        <button onclick="agregarProductos(${tienda[i].precio})">Agregar Producto</button>
    </div>`;

}

document.getElementById("contenedorProductos").innerHTML = acumulador;