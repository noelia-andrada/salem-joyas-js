alert("Bienvenido al carrito de compras de Salem Joyas.");

let usuarioNuevo = prompt("Ingrese nombre de usuario: ");

alert("¡Bienvenido " + usuarioNuevo + "!");

const aros = "1";
const collares = "2";
const anillos = "3";
const seguirSi = "Si";
const seguirNo = "No";

let variableOpciones = prompt("Ingrese la opción que desee comprar: \n 1 - Aros \n 2 - Collares \n 3 - Anillos")


if (variableOpciones == aros || variableOpciones == collares || variableOpciones == anillos)
{
	let variableCantidad = parseInt(prompt("Ingrese cantidad de productos que desea comprar: "));
	let variablePrecios = parseInt(prompt("Ingrese el precio del producto elegido (Sólo en números): \n Aros - $15000 \n Collares - $25000 \n Anillos - $8000" ));
	let seguirOno = prompt("¿Desea agregar algo más a su carrito? \n a - No \n b - Si");

	while (seguirOno != seguirNo) {
		let variableCantidad = parseInt(prompt("Ingrese cantidad de productos que desea comprar: "));
		let variablePrecios = parseInt(prompt("Ingrese el precio del producto elegido (Sólo en números): \n Aros - $15000 \n Collares - $25000 \n Anillos - $8000" ));
		let seguirOno = prompt("¿Desea agregar algo más a su carrito? \n a - No \n b - Si");
	}

	let precioFinal = multiplicacion(variablePrecios, variableCantidad);

}else {
	alert("La opción ingresada no es válida.")
}

function multiplicacion(variablePrecios, variableCantidad) {
			let precioFinal = variablePrecios * variableCantidad;
			return precioFinal;
		}
		alert("El precio final de su compra es: " + precioFinal);