/* 
 * Este script intenta mostrar mensajes mediante el modal genérico con clases 
 * '.modal .js-generico'
 * 
 * renderiza el contenido a $('.js-generico').find('.js-contenido-dinamico')
 * 
 * en caso de que dicho elemento no exista, manda un clásico alert
 */

function flashJs(mensaje, tipo) {
    tipo = typeof tipo !== 'undefined' ? tipo : 'success';
    modalGenerico = $('#modalGenerico');

    if (modalGenerico.length) {
        if (modalGenerico.hasClass('modal')) {
            contenido = modalGenerico.find('.js-contenido-dinamico');
            if (contenido.length) {
                contenido.html('<p class="alert alert-' + tipo + '">' + mensaje + '</p>');
                modalGenerico.modal('show');
                return;
            }
        }
    }
    console.log('modal generico no encontrado, fallback bootstrap');
    alert(mensaje);
}


