
$('#thisform').submit(function (event) {
    event.preventDefault();

    let request_method = $(this).attr("method");
    // let form_data = $(this).serialize();
    let form_data = $(this).serializeArray();
    // let form_data = $('#thisform').serialize();
    
    console.log($(this).serialize());

    // console.log(request_method);
    // console.log(this);

    // let request = $.ajax({
    //     url: 'http://localhost:3000/contact',
    //     method: "POST",
    //     data: { data: form_data },
    //     dataType: "json"
    // });
    // request.done(function (msg) {
    //     console.log('hecho');
    // });
    // request.fail(function (jqXHR, textStatus) {
    //     alert("Request failed: " + textStatus);
    // });

    $.post('http://localhost:3000/contact', { data: form_data}, function () {
        alert("success");
    })
        .done(function () {
            alert("second success");
        })
        .fail(function () {
            alert("error");
        })
        .always(function () {
            alert("finished");
        });

    // $.ajax({
    //     url: 'http://localhost:3000/contact',
    //     type: request_method,
    //     data: form_data
    // }).done(function (response) {
    //     console.log('done');
    //     }).fail(function () {
    //         alert("error");
    //     })
    //     .always(function () {
    //         alert("complete");
    //     });


});