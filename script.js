/* Seleccionando todos los elementos con la clase de caja. */
const boxes = document.querySelectorAll('.box');

/* Escuchando el evento de desplazamiento y luego llamando a la función checkBoxes. */
window.addEventListener('scroll', checkBoxes);

/* Llamando a la función. */
checkBoxes();

/* Una función que se llama cuando se desplaza la página. */
function checkBoxes() {
    /* Está calculando la parte inferior de la ventana gráfica. */
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach( box => {
        /* Cálculo de la parte superior de la caja. */
        const boxTop = box.getBoundingClientRect().top

        /* Comprobando si la parte superior de la caja es menor que la parte inferior de la ventana. */
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}