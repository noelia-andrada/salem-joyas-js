alert("Bienvenido al carrito de compras de Salem Joyas.");

class Usuario {
	constructor (nombre, ciudad, direccion, telefono, password) {
		this.nombre = nombre;
		this.ciudad = ciudad;
		this.direccion = direccion;
		this.telefono = telefono;
		this.password = password;
	}
}

const usuariosRegistrados = [
	new Usuario("Martín González", "Casilda(Santa Fe)", "Calle Falsa 123", 346455555, "password123"),
];

let continuar = true;

while (continuar) {
	let registro = prompt("Ingresá tus datos de usuario: Nombre completo, ciudad (provincia), dirección, teléfono de contacto, constraseña. Separá los datos con una barra ('/'). \n\nPara finalizar, ingresá X.");

	if(registro.toUpperCase() == "X") {
		continuar = false;
		break;
	}

	let puenteRegistro = registro.split("/");
	const otroPuenteRegistro = new Usuario(puenteRegistro[0], puenteRegistro[1], puenteRegistro[2], puenteRegistro[3], puenteRegistro[4]);
	usuariosRegistrados.push(otroPuenteRegistro);
	
	console.log(usuariosRegistrados);
}


function login () {
	let ingresar = false;
	for (let i = 2; i > 0; i--) {
		let ingresoNombre = prompt("Ingrese su nombre completo.");
		let ingresoPassword = prompt("Ingrese su password.");

		if (ingresoNombre.toUpperCase() === Usuario.nombre.toUpperCase() && ingresoPassword === Usuario.password) {
			ingresar = true;
			alert("¡Ingreso exitoso!");
			break;
		}else {
			alert("Alguno de los datos ingresados fueron incorrectos. Le quedan " + i + " intentos.")
		}
	}
	return ingresar;
}

if(login()) {

	class Producto {
 		constructor (nombre, descripcion, precio, disponibilidad) {
 			this.nombre = nombre;
 			this.descripcion = descripcion;
 			this.precio = parseInt(precio);
 			this.disponibilidad = disponibilidad;
 		}
	}

	const producto1 = new Producto("Aros 'Alas'", "Aros articulados de bronce, esmaltados.", 7500, "Disponible");
	const producto2 = new Producto("Aros 'Drop'", "Modernos pendientes móviles de plata 925 y cobre. ", 6900, "No disponible");
	const producto3 = new Producto("Collar 'Espirales'", "Collar hecho en plata 925. 32 cms de largo. Único. ", 22000, "Disponible");
	const producto4 = new Producto("Collar 'Maggie'", "Elegante collar de plata 925 y cobre. Piedra de Sodalita. ", 27000, "Disponible");
	const producto5 = new Producto("Anillo 'Paisaje'", "Anillo de plata esterlina. Para ocasiones especiales. ", 12000, "No disponible");
	const producto6 = new Producto("Anillo 'Meridolas'", "Anillo de plata 925 y oro 18k. Imponente. Una pieza única. ", 74000, "Disponible");

	const arrayAros = [producto1, producto2];
	const arrayCollares = [producto3, producto4];
	const arrayAnillos = [producto5, producto6];

	const aros = "1";
	const collares = "2";
	const anillos = "3";

	let variableOpciones = prompt("Ingrese la opción que desee comprar: \n 1 - Aros \n 2 - Collares \n 3 - Anillos");


}else {
	alert("Hubo un error en su login.\nRecargue la página para volver a intentarlo.")
}



let usuarioNuevo = prompt("Ingrese nombre de usuario: ");

alert("¡Bienvenido " + usuarioNuevo + "!");

const aros = "1";
const collares = "2";
const anillos = "3";
const envioSi = "Si";
const envioNo = "No";

let variableOpciones = prompt("Ingrese la opción que desee comprar: \n 1 - Aros \n 2 - Collares \n 3 - Anillos")


if (variableOpciones == aros || variableOpciones == collares || variableOpciones == anillos)
{
	let variableCantidad = parseInt(prompt("Ingrese cantidad de productos que desea comprar: "));
	let variablePrecios = parseInt(prompt("Ingrese el precio del producto elegido (Sólo en números): \n Aros - $15000 \n Collares - $25000 \n Anillos - $8000" ));
	
	let metodoEnvio = prompt("¿Desea que le enviemos su compra? \n Si \n No");

	while(metodoEnvio != envioNo) {
			let telefonoContacto = prompt(usuarioNuevo + ", ingrese su número de celular, por favor:");
			metodoEnvio = prompt("Ud. ingresó los siguientes datos: \n Número de teléfono: " + telefonoContacto + "\n ¿Sus datos son incorrectos?");
		
	}


	let precioFinal = multiplicacion(variablePrecios, variableCantidad);
	alert("El precio de su compra es de: $" +precioFinal + ".");
	alert("¡Muchas gracias por su compra!");
	

}else {
	alert("La opción ingresada no es válida.")
}

function multiplicacion (variablePrecios, variableCantidad) {
			let precioFinal = variablePrecios * variableCantidad;
			return precioFinal;
		}