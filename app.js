const usuario1 = {
    nombre: "Thomas",
    apellido: "Viceconte"
}
console.log(usuario1?.nombre || "No se encuentra ese nombre");
console.log(usuario1?.apellido || "No se encuentra ese apellido"); 

const usuario4 = {...usuario1}
usuario4.apellido = "Ursino"
const usuarios = [usuario1, usuario4]
console.log(usuarios);

const usuario2 = {
    edad2: 20,
    ciudad: "Mar del Plata",
    telefonos: {
        celular: 2235447457,
        trabajo: 2235185158
    }
};
let { edad2, familia, telefonos: {celular} } = usuario2;
    console.log(edad2);
    console.log(celular);

const array = [];
    for(let i=1; i<3; i++){
        array.push(i);
        array.unshift("Hola");
}
console.log(array);

let subtitulo = document.getElementsByClassName("subtitulo");
console.log(subtitulo);

let divs = document.getElementsByTagName("div");
console.log(divs[1].innerText);

let boton = document.getElementById ("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    console.log("Email enviado");
    Swal.fire({
        position: 'top-end',
        icon: 'Enviado',
        title: 'Tu consulta fue enviada',
        showConfirmButton: false,
        timer: 2000
    })
}

//STORAGE 
localStorage.setItem("nombre", "thomas");
localStorage.setItem("apellido", "viceconte");
localStorage.setItem("edad", "20");

let nombre = localStorage.getItem("nombre");
console.log(nombre);
let apellido = localStorage.getItem("apellido");
console.log(apellido);
let edad = localStorage.getItem("edad");
console.log(edad);

localStorage.setItem("objeto", JSON.stringify({nombre: "bruno", apellido: "simone"}));
let objeto = JSON.parse (localStorage.getItem("objeto"));
console.log(objeto); 

/* sessionStorage.setItem("usuario","thomiviceconte"); */
const productos = [
    {destino:"miami", precio: 80000},
    {destino:"losangeles", precio: 50000},
    {destino:"cancun", precio: 60000},
    {destino:"riodejaneiro", precio: 40000},
    ];    

const guardar = (clave, valor) => {localStorage.setItem(clave, valor)};
for(const producto of productos){
    guardar(producto.destino, JSON.stringify(producto));
}

let usuario3;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
    let message = `Bienvenido ${usuarioStorage}`;
    alert(message);
    usuario = usuarioStorage;
}else{
    alert("no iniciaste sesión");
    usuario = prompt("Ingrese su nombre");
    sessionStorage.setItem("usuario", usuario);
}


const listaVuelos = document.querySelector('#vuelosList');
const listaHoteles = document.querySelector('#hotelesList');


//VUELOSS
function cargarVuelos() {
    fetch('data.json')
    .then(respuesta => respuesta.json())

    //VUELOS
    .then(vuelos => {
        let vuelosId = vuelos.filter(vuelo => vuelo.id <= 4); 
        vuelosId.forEach(vuelo => {
            const li = document.createElement('li');
            li.innerHTML += `
            <li class="vuelosListItem miami">
            <h3 class="titulares"> ${vuelo.titulo} </h3>
            <hr>
            <p>${vuelo.parrafo}</p>
            <p>${vuelo.parrafo2}</p>
            <hr>
            <a class="enlace" href="./html/vuelos.html">Ver más</a>
            </li>
            `
            listaVuelos.appendChild(li)
        });
    })

    .catch(function() {
        console.log("error");
    })
};


//HOTELES

function cargarHoteles() {
    fetch('data.json')
    .then(respuesta => respuesta.json())

    .then(hoteles => {
        let hotelesId = hoteles.filter(hotel => hotel.id >= 5); 
        hotelesId.forEach(hotel => {
            const li = document.createElement('li');
            li.innerHTML += `
            <li class="hotelesListItem  miami">
            <h3 class="titulares"> ${hotel.titulo} </h3>
            <hr>
            <p>${hotel.parrafo}</p>
            <p>${hotel.parrafo2}</p>
            <hr>
            <a class="enlace" href="./html/hoteles.html">Ver más</a>
            </li>
            `
            listaHoteles.appendChild(li)
        });
    })

    .catch(function() {
        console.log("error");
    })
};




cargarVuelos();
cargarHoteles();
