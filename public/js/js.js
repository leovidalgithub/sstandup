$(document).ready(function () {
    
        $('#thisform').submit(function (event) {
            event.preventDefault();
            // const url = 'http://localhost:3000/contact';
            const url = 'http://www.siciliastandup.com/contact';
            const form_data = $(this).serializeArray();
            const mybutton = $('input[type=submit]');
            
            if (form_data[0].value.length > 45 || form_data[0].value.length > 45 || form_data[0].value.length > 550) {
                alert('Por favor, no trates de hacerme trampa entrando en el código. Te excediste en el límite soportable para los campos del formulario');
            return;
        }
        
        mybutton.prop('disabled', true);
        mybutton.addClass('sending');
        mybutton.val('Enviando');

        $.post(url, { data: form_data}, function () {
            alert('¡Mensaje enviado!');
        })
        .done(function () {
        })
        .fail(function () {
            alert('¡Lo siento mucho! Tu mensaje no pudo ser enviado y lo peor es que no tengo ni idea por qué ha sido.');
        })
        .always(function () {
            mybutton.prop('disabled', false);
            mybutton.removeClass('sending');
            mybutton.val('Enviar');
        });
    });

});
