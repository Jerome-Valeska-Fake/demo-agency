// Al hacer clic en el botón
document.getElementById("boton").addEventListener("click", function() {

    // Codificar el mensaje  
    var mensaje = encodeURIComponent("Acabo de ver este paquete en tu página, quiero más información");
  
    // Redireccionar a WhatsApp con el número y mensaje
    window.open("https://wa.me/+51938696984?text=" + mensaje); 
  
  });

  document.getElementById("boton-email").addEventListener("click", function(){

    // Obtener datos
    var cuerpoMensaje = "Información sobre el paquete ";
    
    // Redireccionar a email  
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=jeremyn.monares@gmail.com&su=INfo&body="+cuerpoMensaje);
  
  });

  // Seleccionar por ID
const button = document.getElementById("callButton");

// Agregar listener de click
button.addEventListener("click", () => {

  // Redireccionar a la URL 
  window.location.href = "tel:+51967574733";

});