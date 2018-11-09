$(document).ready(function () {
    
        $('#thisform').submit(function (event) {
            event.preventDefault();
            // const url = 'http://localhost:3000/contact';
            const url = 'http://www.siciliastandup.com/contact';
            const form_data = $(this).serializeArray();
            const mybutton = $('input[type=submit]');
            
            if (form_data[0].value.length > 45 || form_data[0].value.length > 45 || form_data[0].value.length > 650) {
                alert('¡No trates de hacerme trampa cambiando el código!\nTe excediste en el límite de lo permisible y punto.');
            return;
            }
            if (form_data[0].value.length === 0) {
                alert('¿No me vas a mandar ni tu nombre?');
                $('#thisfname').focus();
            return;
            }
        
            mybutton.prop('disabled', true);
            mybutton.addClass('sending');
            mybutton.val('Enviando');

            $.post(url, { data: form_data}, function () {
                $("#thisform")[0].reset();
                alert('¡Mensaje enviado!');
            })
            .done(function () {
            })
            .fail(function () {
                alert('¡Lo siento mucho!\nTu mensaje no pudo ser enviado y lo peor es que no tengo ni idea por qué ha sido.');
            })
            .always(function () {
                mybutton.prop('disabled', false);
                mybutton.removeClass('sending');
                mybutton.val('Enviar');
            });
        });

});
