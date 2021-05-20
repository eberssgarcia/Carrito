const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Crear eventos
cargarEventos();
function cargarEventos() {
	listaCursos.addEventListener('click', cargarEvento);
}

// Agregar curso
function cargarEvento(e) {
	e.preventDefault();
	if (e.target.classList.contains('agregar-carrito')) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerCurso(cursoSeleccionado);
	}
}

// Leer curso seleccionado
function leerCurso(curso) {
	const infoCurso = {
		img: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	};
	console.log(infoCurso);

	articulosCarrito = [ ...articulosCarrito, infoCurso ];

	carritoHTML();
}

// Mostrar en conetenedor HTML
function carritoHTML() {
	// Limpiar HTML
	limpiarHTML();

	// Recorrer array
	articulosCarrito.forEach((curso) => {
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${curso.img}" width="100">
		</td>
		<td> ${curso.titulo} </td>
		<td> ${curso.precio} </td>
		<td> ${curso.cantidad} </td>
		<td>
			<a href="#" class="borrar-curso">X</a>
		</td>
		`;

		// Mostrar en HTML
		contenedorCarrito.appendChild(row);
	});
}

// Limpiar HTML
function limpiarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}
