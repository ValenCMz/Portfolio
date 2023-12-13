document.querySelector(".section__email-send").addEventListener("click", () => {
    var direccionEmail = 'caminosmartinezvalentin@gmail.com';

    var enlaceMailto = 'mailto:' + encodeURIComponent(direccionEmail);

    window.location.href = enlaceMailto;

});

document.querySelector(".section__email-enviar").addEventListener("click", () => {
    var direccionEmail = 'caminosmartinezvalentin@gmail.com';

    var input = document.createElement('input');
    input.value = direccionEmail;
    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(input);

});