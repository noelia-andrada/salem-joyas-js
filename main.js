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

		if (ingresoNombre == Usuario.nombre && ingresoPassword == Usuario.password) {
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
 		constructor (nombre, descripcion, precio) {
 			this.nombre = nombre;
 			this.descripcion = descripcion;
 			this.precio = parseInt(precio);

 		}
	}

	const producto1 = new Producto("Aros 'Alas'", "Aros articulados de bronce, esmaltados.", 7500, "Disponible");
	const producto2 = new Producto("Aros 'Drop'", "Modernos pendientes móviles de plata 925 y cobre. ", 6900,);
	const producto3 = new Producto("Collar 'Espirales'", "Collar hecho en plata 925. 32 cms de largo. Único. ", 22000,);
	const producto4 = new Producto("Collar 'Maggie'", "Elegante collar de plata 925 y cobre. Piedra de Sodalita. ", 27000,);
	const producto5 = new Producto("Anillo 'Paisaje'", "Anillo de plata esterlina. Para ocasiones especiales. ", 12000,);
	const producto6 = new Producto("Anillo 'Meridolas'", "Anillo de plata 925 y oro 18k. Imponente. Una pieza única. ", 74000,);

	const arrayAros = [producto1, producto2];
	const arrayCollares = [producto3, producto4];
	const arrayAnillos = [producto5, producto6];

	const aros = "1";
	const collares = "2";
	const anillos = "3";
	const salir = "4";

	function repetir {
		continuar = true;
		while(continuar) {

			let variableOpciones = prompt("Ingrese la opción que desee comprar: \n1 - Aros \n2 - Collares \n3 - Anillos \n4- Salir");

			if(variableOpciones === 4) {
			continuar = false;
			break;
			}

			switch(variableOpciones) {
				case "1":
					let opcionesAros = prompt(arrayAros + "\n\n Coloque el nombre del producto que desea comprar.")
					if (opcionesAros == Producto.nombre) {
						comprar ();
					}
					break;

				case "2":
					let opcionesCollares = prompt(arrayCollares + "\n\n Coloque el nombre del producto que desea comprar.")
					if (opcionesCollares == Producto.nombre) {
						comprar ();
					}
					break;

				case "3":
					let opcionesAnillos = prompt(arrayAnillos + "\n\n Coloque el nombre del producto que desea comprar.")
					if (opcionesAnillos == Producto.nombre) {
						comprar ();
					}
					break;

				case "4":
					continuar = false;
					break;

				default:
					alert("CUMCUMCUM")
			}
		}
	}

	repetir();

	function comprar(Producto){
		let variableCantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar: "));
		let precioFinal = Producto.precio * variableCantidad;

		alert("El precio de su compra es de: $" +precioFinal + ".");
		alert("¡Muchas gracias por su compra!");

		return precioFinal;

	}

	comprar ();




//FIN IF LOGIN
}else {
	alert("Hubo un error en su login.\nRecargue la página para volver a intentarlo.")
}

