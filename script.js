const usuariosRegistrados = [{
	nombre: "Pepe",
	email: "pepe@email.com",
	password: "pepe123",
	telefono: 3464555555,
	direccion: "Calle Falsa 123",
	ciudad: "Casilda"

	},{

	nombre: "Pocha",
	email: "pocha@email.com",
	password: "pocha123",
	telefono: "1166666666",
	direccion: "Otra calle falsa 123",
	ciudad: "Bs As"
}];

const mailLogin = document.getElementById("emailLogin");
const passLogin = document.getElementById("passwordLogin");
const recordar = document.getElementById("recordarme");
const btnLogin = document.getElementById("login");
const modalEl = document.getElementById("modalLogin");
const modal = new bootstrap.Modal(modalEl);
const contenedorProductos = document.getElementById("contenedorProductos");
const contTarjetas = document.getElementById("tarjetas");
const toggles = document.querySelectorAll(".toggles");

function validarUsuario(usuariosRegistrados, mailLogin, passLogin) {
	let encontrado = usuariosRegistrados.find(usuario => usuario.email == mailLogin);

	if(typeof encontrado == "undefined"){
		return false;
	}else{
		if(encontrado.password != passLogin){
			return false;
		}else{
			return encontrado;
		}
	}
}

function guardarDatos(arrayUsuarios, storage){
	const usuario = {
		"name": arrayUsuarios.nombre,
		"user": arrayUsuarios.email,
		"pass": arrayUsuarios.password,
		"tel": arrayUsuarios.telefono,
		"direc": arrayUsuarios.direccion,
		"ciudad": arrayUsuarios.ciudad,

	}
	storage.setItem("usuario", JSON.stringify(usuario));
}

function saludar(usuario){
	nombreUsuario.innerHTML = `<h3>Bienvenid@, ${usuario.name}</h3>`
}

function borrarDatos(){
	localStorage.clear();
	sessionStorage.clear();
}

function recuperarUsuario(storage){
	let usuarioEnStorage = JSON.parse(storage.getItem("usuario"));
	return usuarioEnStorage;
}

function estaLogueado(usuario){
	if(usuario){
		saludar(usuario);
		presentarInfo(toggles,"d-none");
	}
}

function presentarInfo(array, clase){
	array.forEach(element=>{
		element.classList.toggle(clase)
	})
}


function mostrarDescuento(){
	contTarjetas.innerHTML = "";
		let html = `<p class="text-center" id=descuento> Descuento del 5% para Usuarios Registrados </p>`

		contTarjetas.innerHTML += html;

}

btnLogin.addEventListener("click", (e) =>{
	e.preventDefault();
	if(!mailLogin.value||!passLogin.value){
		alert("Login incorrecto")
	}else{
		let data = validarUsuario(usuariosRegistrados, mailLogin.value, passLogin.value)
		if(!data){
			alert("Usuario y/o contraseña incorrectos.");
		}else{
			if(recordar.checked){
				guardarDatos(data, localStorage);
				saludar(recuperarUsuario(localStorage));
			}else{
				guardarDatos(data, sessionStorage);
				saludar(recuperarUsuario(sessionStorage));
			}

			modal.hide();

			mostrarDescuento();

			presentarInfo(toggles, "d-none")
		}
		
	}
})

btnLogout.addEventListener("click", ()=>{
	borrarDatos();
	presentarInfo(toggles, "d-none");
})

window.onload = () =>{
	estaLogueado(recuperarUsuario(localStorage));
}


class Producto {
	 constructor (id, nombre, precio, img, descripcion, cantidad) {
		this.id = id;
		this.nombre = nombre;
		this.precio = parseInt(precio);
		this.img = img;
		this.descripcion = descripcion;
		this.cantidad = 1;
	 }
}


const aros1 = new Producto(1,"Aros 'Alas'", 7500, "./imagenes/aros_alas.jpg", "Aros articulados de bronce, esmaltados.",);
const aros2 = new Producto(2, "Aros 'Drop'", 6900, "./imagenes/aros_drop.jpg", "Modernos pendientes móviles de plata 925 y cobre.",);
const collar1 = new Producto(3, "Collar 'Espirales'", 22000, "./imagenes/collar_espirales.jpg", "Collar hecho en plata 925. 32 cms de largo. Único.",);
const collar2 = new Producto(4, "Collar 'Maggie'", 27000, "./imagenes/collar_maggie.jpg", "Elegante collar de plata 925 y cobre. Piedra de Sodalita.",);
const anillo1 = new Producto(5, "Anillo 'Paisaje'", 12000, "./imagenes/anillo_paisaje.jpg", "Anillo de plata esterlina. Para ocasiones especiales.",);
const anillo2 = new Producto(6, "Anillo 'Meridolas'", 74000, "./imagenes/anillo_medirolas.jpg", "Anillo de plata 925 y oro 18k. Imponente. Una pieza única.",);
const dije1 = new Producto(7, "Dije 'Planetas'", 18000, "./imagenes/dije_planetas.jpg", "Trio de dijes en bronce, cobre y plata 925.",);
const dije2 = new Producto(8, "Dije geométrico", 9000, "./imagenes/dije_geometrico.jpg", "Dije de plata con 3 safiros rojizos-anaranjados.",);

const productos = [aros1, aros2, collar1, collar2, anillo1, anillo2, dije1, dije2];

let carrito= [];

if(localStorage.getItem("carrito")){
	carrito= JSON.parse(localStorage.getItem("carrito"));
}

const mostrarProductos = () => {
	productos.forEach((producto) => {
		const card = document.createElement("div");
		card.classList.add("col-xl-3","col-md-6","col-xs-12");
		card.innerHTML= `<div class="card">
							<img src= "${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}"
							<div class="card-body">
								<h3 class="card-title"> ${producto.nombre} </h3>
								<p class="card-text"> $${producto.precio} </p>
								<p class="card-text"> ${producto.descripcion} </p>
								<button class="btn colorBoton" id="boton ${producto.id}"> Agregar al carrito </button>
							</div>
						</div>`

		contenedorProductos.appendChild(card);

		const boton = document.getElementById(`boton ${producto.id}`);

		boton.addEventListener("click", ()=>{
			agregarAlCarrito(producto.id)
			mostrarCarrito();
		})
		
	})
}


const agregarAlCarrito = (id) => {
	const producto = productos.find((producto)=> producto.id === id);
	const productoEnCarrito = carrito.find((producto)=> producto.id === id);
	if(productoEnCarrito) {
		productoEnCarrito.cantidad++;
	}else{
		carrito.push(producto);
		localStorage.setItem("carrito", JSON.stringify(carrito));
	}

	calcularTotal();
	aplicarDescuento();
}

mostrarProductos();

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", ()=> {
	mostrarCarrito();
})

const mostrarCarrito = () => {
	contenedorCarrito.innerHTML = "";
	carrito.forEach((producto)=> {
		const card = document.createElement("div");
		card.classList.add("col-xl-3","col-md-6","col-xs-12");
		card.innerHTML= `<div class="card">
							<img src= "${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}"
							<div class="card-body">
								<h3 class="card-title"> ${producto.nombre} </h3>
								<p class="card-text"> $${producto.precio} </p>
								<p class="card-text"> ${producto.descripcion} </p>
								<div class="d-flex justify-content-evenly">
									<i class="bi bi-dash-lg"></i>
									<p class="card-text"> ${producto.cantidad} </p>
									<i class="bi bi-plus-lg"></i>
								</div>
								<button class="btn colorBoton" id="eliminar ${producto.id}"> Eliminar producto </button>
							</div>
						</div>`

		contenedorCarrito.appendChild(card);

		const boton = document.getElementById(`eliminar ${producto.id}`);
		boton.addEventListener("click", ()=> {
			eliminarDelCarrito(producto.id);
		})
	})

	calcularTotal();
	aplicarDescuento();
}

const eliminarDelCarrito = (id) => {
	const producto = carrito.find((producto) => producto.id === id);
	const indice = carrito.indexOf(producto);
	carrito.splice(indice, 1);

	mostrarCarrito();

	localStorage.setItem("carrito", JSON.stringify(carrito));
}


const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
	eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
	carrito= [];
	mostrarCarrito();
	localStorage.clear();
}


const total = document.getElementById("total");

const calcularTotal = () => {
	let totalCompra = 0;

	carrito.forEach ((producto) => {
		totalCompra += producto.precio * producto.cantidad;
	})

	total.innerHTML = `$${totalCompra}`

	return totalCompra;
}

const totalConDescuento = document.getElementById("totalDescuentoId");

const aplicarDescuento = (totalCompra) => {
	let totalDescuento = 0;
	let precioFinalConDescuento = 0;

	carrito.forEach ((producto) => {
		totalDescuento += (totalCompra * 5)/100;
		precioFinalConDescuento += totalCompra - totalDescuento;
	})

	totalConDescuento.innerHTML = `<h4>Total con descuento: $${precioFinalConDescuento}</h4>`

}