$(document).ready(function() {    
    
    function cargarContenidoEtnia(etniaSeleccionada) {
        $.getJSON('../etnias.json', function(data) {
            const etniaData = data.find(etnia => etnia.Etnia === etniaSeleccionada);
            if (etniaData) {
                $('.text').html(etniaData.Texto);
                $('.banner').attr('src', etniaData.Imagen);
                $("#contenedor-estadisticas").load("../html/tablaEstadisticas.html");
                $("#contenedor-contador").load("../html/contador.html");        
            }
        });
    }
  
    $('#menu-lateral a').on('click', function(e) {
        e.preventDefault();
        const etniaSeleccionada = $(this).data('key');
        if (etniaSeleccionada !== "Presentacion")
        {window.location.href = `vistaComunidad.html?etnia=${etniaSeleccionada}`;}
        else
        {window.location.href = `vistaHomeComunidades.html`;}
    });   

        // Manejador para el botón de la comunidad indígena
        $('.indigenous-button').on('click', function() {
            window.location.href = 'vistaComunidad.html?etnia=Indigenas';
        });
    
        // Manejador para el botón de la comunidad afrocolombiana
        $('.afro-button').on('click', function() {
            window.location.href = 'vistaComunidad.html?etnia=Afrocolombianos';
        });
    
    const urlParams = new URLSearchParams(window.location.search);
    const etniaSeleccionada = urlParams.get('etnia');
    if (etniaSeleccionada) {
        cargarContenidoEtnia(etniaSeleccionada);
    }
});



