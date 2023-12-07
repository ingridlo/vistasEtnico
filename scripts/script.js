$(document).ready(function(){    

    $.getJSON('../etnias.json', function(data) {
        
        $('#menu-lateral a').on('click', function(e) {
            e.preventDefault();
            const etniaSeleccionada = $(this).data('key');           
            const etniaData = data.find(etnia => etnia.Etnia === etniaSeleccionada);
            if (etniaData) {                               
                $('.text').html(`<b>${etniaData.Texto}</b>`);
                $('.banner').attr('src', `${etniaData.Imagen}`);
                
            }
        });
    });
});


