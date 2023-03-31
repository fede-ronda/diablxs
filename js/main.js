const ProductosArray = [
    {
        id: "buzo-06",
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
        id: "buzo-06",
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
        id: "buzo-06",
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
        id: "buzo-06",
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
        id: "buzo-06",
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
        id: "buzo-06",
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
];

const ContenedorProductos = document.querySelector("#contenedor-productos");

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
                <a class="btn-comprar" href="" id="${producto.id}">Comprar</a>
        `;

        ContenedorProductos.append(article);
    })

}

CargarProductos();

