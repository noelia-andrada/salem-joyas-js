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
	new Usuario("Ema", "Casilda(Santa Fe)", "Calle Falsa 123", 346455555, "password123"),
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
		let ingresoNombre = prompt("Para realizar una compra: \nIngrese su nombre completo.");
		let ingresoPassword = prompt("Ingrese su password.");

		const usuarioRegistrado = usuariosRegistrados.find((usuario) => usuario.nombre === ingresoNombre,);

		if (usuarioRegistrado) {

			if (usuarioRegistrado.nombre === ingresoNombre && usuarioRegistrado.password === ingresoPassword) {
				ingresar = true;
				alert("¡Ingreso exitoso!");
				break;
			}else {
				alert("Alguno de los datos ingresados fueron incorrectos. Le quedan " + i + " intentos.")
			}
		}
	}
	return ingresar;
}

if(login()) {


	class Producto {
	 	constructor (nombre, descripcion, precio, id) {
	 		this.nombre = nombre;
	 		this.descripcion = descripcion;
	 		this.precio = parseInt(precio);
	 		this.id = parseInt(id);

	 	}
	}

	const producto1 = [
		new Producto("Aros 'Alas'", "Aros articulados de bronce, esmaltados.", 7500, 1),
		new Producto("Aros 'Drop'", "Modernos pendientes móviles de plata 925 y cobre.", 6900, 2),
		new Producto("Collar 'Espirales'", "Collar hecho en plata 925. 32 cms de largo. Único.", 22000, 3),
		new Producto("Collar 'Maggie'", "Elegante collar de plata 925 y cobre. Piedra de Sodalita.", 27000, 4),
		new Producto("Anillo 'Paisaje'", "Anillo de plata esterlina. Para ocasiones especiales.", 12000, 5),
		new Producto("Anillo 'Meridolas'", "Anillo de plata 925 y oro 18k. Imponente. Una pieza única.", 74000, 6),
	];

	const siComprar = "si";
	const noComprar = "no";
	const atras = "atras";
	const salir = "salir";

	function repetir (Producto){
		continuar = true;

		while(continuar) {

			let variableOpciones = prompt("Dentro de las siguientes opciones, escribí el producto que estas buscando: \n1 - Aros \n2 - Collar \n3 - Anillo");
			const filtrado = producto1.filter((producto) => producto.nombre.toLowerCase().includes(variableOpciones.toLowerCase()));

			if (filtrado.length == 0) {
				alert("No se encontraron productos.");

			}else {
				const busquedaProductos = filtrado.map ((producto) => producto.nombre);
				let resultadoBusqueda = prompt("Los productos que coinciden con esta búsqueda son: \n-" + busquedaProductos.join("\n-") + "\n\n¿Desea agregar algún producto al carrito? \n- Si \n- No \n- Atrás");

				if (resultadoBusqueda.toLowerCase() == "si"){
					let productoElegido = prompt("Ingrese el nombre de su producto:\n-" + busquedaProductos.join("\n-"));
					let variableCantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar: "));	

				}else if(resultadoBusqueda.toLowerCase() == "no"){
					alert("¡Lo esperamos nuevamente!")
					continuar = false;
					break;
				}else if (resultadoBusqueda.toLowerCase() == "atras"){
					continuar = true;
				}

			}

		}
			//FIN WHILE
	}
	//FIN Function Repetir

	repetir();


	if (ingresoAFuncion == true){ 
		function comprar(repetir, Producto){
			let productoElegido = prompt("Ingrese el nombre de su producto:" + busquedaProductos.join("\n-"));
			let variableCantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar: "));
			let precioFinal = Producto.precio * variableCantidad;

			alert("El precio de su compra es de: $" +precioFinal + ".");
			alert("¡Muchas gracias por su compra!");

			return precioFinal;
		}
	}

	comprar ();



//FIN IF LOGIN
}else {
	alert("Hubo un error en su login.\nRecargue la página para volver a intentarlo.")
}

