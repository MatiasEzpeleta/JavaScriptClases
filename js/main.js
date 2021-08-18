let acumulador = ``;
let tienda = [
    { 
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
        precio: 18000},   
];

/* Object Constructor */
function Producto(nombre,marca,precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.disponible = true
}

const producto2 = new Producto ('monitor 40 pulgadas','LG', 78500);
console.log(producto2);

const producto3 = new Producto ('Celular A51','Samsung', 52999)
console.log(producto3)

for(let i = 0; i < tienda.length; i++) {    
    
    let total = 0;    
        
    function calcularTotal(totalCarrito) {
        // Precio sin IVA
        document.getElementById("verTotal").innerHTML = 'El total es: $ ' + totalCarrito;
    }

    function calcularIva(totalCarrito){        
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