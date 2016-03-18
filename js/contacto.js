$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
       var nombre=$('input[name=nombre]').val();
        var email      = $('input[name=email]').val();
        var mensaje    = $('input[name=mensaje]').val();
        

        
        $.ajax({
            type        : 'POST', 
            contentType: "application/json",
            url         : 'http://www.cervezaferia.com/contacto.wmx', 
            data        : JSON.stringify({nombre:nombre,email:email,mensaje:mensaje}),                                    
        })
            
            .done(function(data) {

                if(data.length < 1)//no errors, bruh
                {
                	$('form').trigger('reset');
                	flashJs('<b>¡Gracias!</b> nos pondremos en contacto contigo muy pronto.','default');
                }
            });

        event.preventDefault();
    });

});
