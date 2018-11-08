
$('#thisform').submit(function (event) {
    event.preventDefault();

    let request_method = $(this).attr("method");
    let form_data = $(this).serializeArray();

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

});