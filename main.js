//CELULARES
const productos = [

    //Samsung
    {
        id: "S24 ultra",
        titulo: "Samsung S24 Ultra",
        imagen: "img/S24 ultra.png",
        info: "https://www.samsung.com/mx/smartphones/galaxy-s24-ultra/",
        categoria: {
            nombre: "Samsung",
            id: "samsung"
        },
        precio: 30999
    },
    {
        id: "S24 plus",
        titulo: "Samsung S24 Plus",
        imagen: "img/S24 plus.png",
        info:"https://www.samsung.com/mx/smartphones/galaxy-s24/",
        categoria: {
            nombre: "Samsung",
            id: "samsung"
        },
        precio: 23999
    },
    {
        id: "S24",
        titulo: "Samsung S24",
        imagen: "img/S24.png",
        info:"https://www.samsung.com/mx/smartphones/galaxy-s24/",
        categoria: {
            nombre: "Samsung",
            id: "samsung"
        },
        precio: 20999
    },
    {
        id: "S23 ultra",
        titulo: "Samsung S23 Ultra",
        imagen: "img/S23 ultra.png",
        info:"https://www.samsung.com/mx/smartphones/galaxy-s23-ultra/",
        categoria: {
            nombre: "Samsung",
            id: "samsung"
        },
        precio: 25999
    },
    {
        id: "S23 plus",
        titulo: "Samsung S23 Plus",
        imagen: "img/S23 plus.png",
        info:"https://www.samsung.com/mx/smartphones/galaxy-s23/",
        categoria: {
            nombre: "Samsung",
            id: "samsung"
        },
        precio: 16500
    },
    {
        id: "S23",
        titulo: "Samsung S23",
        imagen: "img/S23.png",
        info:"https://www.samsung.com/mx/smartphones/galaxy-s23/",
        categoria: {
            nombre: "Samsung",
            id: "samsung"
        },
        precio: 13999
    },

    //Apple

    {
        id: "15 pro max",
        titulo: "Iphone 15 Pro Max",
        imagen: "img/15 pro max.png",
        info:"https://www.apple.com/mx/shop/buy-iphone",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 28999
    },
    {
        id: "15 pro",
        titulo: "Iphone 15 Pro",
        imagen: "img/15 pro.png",
        info:"https://www.apple.com/mx/iphone-15-pro/",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 25999
    },
    {
        id: "15 plus",
        titulo: "Iphone 15 Plus",
        imagen: "img/15 plus.png",
        info:"https://www.apple.com/mx/shop/buy-iphone",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 23999
    },
    {
        id: "15",
        titulo: "Iphone 15",
        imagen: "img/15.png",
        info:"https://www.apple.com/mx/iphone-15/",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 21499
    },
    {
        id: "14 pro max",
        titulo: "Iphone 14 Pro Max",
        imagen: "img/14 pro max.png",
        info:"https://support.apple.com/es-lamr/111846",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 25999
    },
    {
        id: "14 pro",
        titulo: "Iphone 14 Pro",
        imagen: "img/14 pro.png",
        info:"https://support.apple.com/es-mx/111849",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 23499
    },
    {
        id: "14 plus",
        titulo: "Iphone 14 Plus",
        imagen: "img/14 plus.png",
        info:"https://www.apple.com/mx/shop/buy-iphone",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 21499
    },
    {
        id: "14",
        titulo: "Iphone 14",
        imagen: "img/14.png",
        info:"https://www.apple.com/mx/shop/buy-iphone",
        categoria: {
            nombre: "Apple",
            id: "apple"
        },
        precio: 18999
    },

    // Xiaomi
    {
        id: "Xiaomi 14 ultra",
        titulo: "Xiaomi 14 ultra",
        imagen: "img/Xiaomi 14 ultra.png",
        info:"https://www.mi.com/es/product/xiaomi-14-ultra/",
        categoria: {
            nombre: "Xiaomi",
            id: "xiaomi"
        },
        precio: 26999
    },
    {
        id: "Xiaomi 14",
        titulo: "Xiaomi 14",
        imagen: "img/Xiaomi 14.png",
        info:"https://www.mi.com/es/product/xiaomi-14/",
        categoria: {
            nombre: "Xiaomi",
            id: "xiaomi"
        },
        precio: 15899
    },
    {
        id: "Xiaomi 14 pro",
        titulo: "Xiaomi 14 pro",
        imagen: "img/Xiaomi 14 pro.png",
        info:"https://www.xatakamovil.com/xiaomi/xiaomi-14-xiaomi-14-pro-caracteristicas-precio-ficha-tecnica",
        categoria: {
            nombre: "Xiaomi",
            id: "xiaomi"
        },
        precio: 21999
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <a class="producto-info" href="${producto.info}" target="_blank">+ Info</a>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>                    
            </div>

        ` ;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();


}

cargarProductos(productos);

botonesCategorias.forEach( boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id !="todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText =productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

        }else{
            tituloPrincipal.innerText ="Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
