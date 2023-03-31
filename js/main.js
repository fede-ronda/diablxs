const ProductosArray = [
    {
        id: "buzo-01",
        titulo: "Buzo Azul",
        imagen: "./img/indumentaria/buzo-azul.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "indumentaria",
            id: "indumentaria"
        },
        precio: 5999
    },
    {
        id: "buzo-02",
        titulo: "Buzo Blanco",
        imagen: "./img/indumentaria/buzo-blanco.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "indumentaria",
            id: "indumentaria"
        },
        precio: 5999
    },
    {
        id: "buzo-03",
        titulo: "Buzo Negro",
        imagen: "./img/indumentaria/buzo-negro.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "indumentaria",
            id: "indumentaria"
        },
        precio: 5999
    },
    {
        id: "buzo-04",
        titulo: "Buzo Rojo",
        imagen: "./img/indumentaria/buzo-rojo.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "indumentaria",
            id: "indumentaria"
        },
        precio: 5999
    },
    {
        id: "buzo-05",
        titulo: "Buzo Verde",
        imagen: "./img/indumentaria/buzo-verde.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "indumentaria",
            id: "indumentaria"
        },
        precio: 5999
    },
    {
        id: "buzo-06",
        titulo: "Buzo Violeta",
        imagen: "./img/indumentaria/buzo-violeta.png",
        marca: "DIABLXS",
        talle: "M al XL",
        efectivo: "10%",
        categoria: {
            nombre: "indumentaria",
            id: "indumentaria"
        },
        precio: 5999
    },
];

const ContenedorProductos = document.querySelector("#contenedor-productos");
let BotonesAgregar = document.querySelectorAll(".producto-agregar");


function CargarProductos() {

    ProductosArray.forEach(producto => {

        const article = document.createElement("article");
        article.classList.add("tarjeta");
        article.innerHTML = `
                <img class="tarjeta__img" src="${producto.imagen}" alt="${producto.titulo}">
                <h3>${producto.titulo}</h3>
                <span class="tarjeta__descrip">Marca: <strong>${producto.marca}</strong></span>
                <span class="tarjeta__descrip">Talle: <strong>${producto.talle}</strong></span>
                <span class="tarjeta__descrip">Precio: <strong>$${producto.precio}</strong></span>
                <span class="tarjeta__descrip">Efectivo: <strong>${producto.efectivo} OFF</strong> </span>
                <a class="btn-comprar producto-agregar" id="${producto.id}">Agregar</a>
        `;

        ContenedorProductos.append(article);
    })

    ActualizarBotonesAgregar();

}

CargarProductos();

function ActualizarBotonesAgregar() {
    BotonesAgregar = document.querySelectorAll(".producto-agregar");
}

