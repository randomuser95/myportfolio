$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  $('#botonMeet').on('click', function(){
    $('.page-desc').toggleClass('d-none');
    if($('#meet').css('display') == 'block'){
        $("#botonMeet").html('Ocultar descripción');
    } else {
        $("#botonMeet").html('Ver descripción');
    }
    
})