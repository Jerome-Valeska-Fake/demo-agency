// Al hacer clic en el botón
const botonesComprar = document.querySelectorAll(".boton-comprar");

// Recorrerlos  
botonesComprar.forEach(function(boton) {

  // Obtener el ID del paquete
  const paqueteId = boton.dataset.paquete;

  // Agregar listener al botón
  boton.addEventListener("click", function() {

    // Determinar mensaje según paquete
    let mensaje;

    if (paqueteId === "city-tour") {
      mensaje = "Acabo de ver el paquete CITY TOUR de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "machu-picchu") {
      mensaje = "Acabo de ver el paquete MACHU PICCHU de Destinos Turísticos. Me gustaría tener más información.";
    } else if (paqueteId === "cuatrimoto") {
      mensaje = "Acabo de ver el paquete de CUATRIMOTOS de tours de aventuras. Me gustaría tener más información.";
    } else if (paqueteId === "valle-sur") {
      mensaje = "Acabo de ver el paquete VALLE SUR de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "valle-sagrado") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "valle-vip") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO VIP de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "camino-inka") {
      mensaje = "Acabo de ver el paquete CAMINO INKA de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "camino-inka-VIP") {
      mensaje = "Acabo de ver el paquete CAMINO INKA VIP de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "cañon-colca") {
      mensaje = "Acabo de ver el paquete CAÑÓN DE COLCA de tours en Arequipa. Me gustaría tener más información.";
    } else if (paqueteId === "vinicunca") {
      mensaje = "Acabo de ver el paquete VINICUNCA de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "huamantay") {
      mensaje = "Acabo de ver el paquete LAGUNA HUAMANTAY de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "uros") {
      mensaje = "Acabo de ver el paquete UROS y TAQUILE de Puno. Me gustaría tener más información.";
    } else if (paqueteId === "uros-vip") {
      mensaje = "Acabo de ver el paquete UROS y TAQUILE, AMANTANI de Puno. Me gustaría tener más información.";
    } else if (paqueteId === "city-tours-arequipa") {
      mensaje = "Acabo de ver el paquete CITY TOURS de Arequipa. Me gustaría tener más información.";
    } else if (paqueteId === "tambopata") {
      mensaje = "Acabo de ver el paquete TAMBOPATA de Puerto Maldonado. Me gustaría tener más información.";
    } else if (paqueteId === "puerto-maldonado") {
      mensaje = "Acabo de ver el paquete PUERTO MALDONADO CITY TOUR de Puerto Maldonado. Me gustaría tener más información.";
    }else{
      mensaje ="El paquete no  se encontro"
    }


    // Enviar a WhatsApp
    mensaje = encodeURIComponent(mensaje);
    window.open("https://wa.me/+51953000099?text=" + mensaje);

  });

});

const botonesEmail = document.querySelectorAll("#boton-email");

botonesEmail.forEach(function(boton) {

  const paqueteId = boton.dataset.paquete;

  boton.addEventListener("click", function() {
    
    let mensaje;

    if (paqueteId === "city-tour") {
      mensaje = "Acabo de ver el paquete CITY TOUR de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "machu-picchu") {
      mensaje = "Acabo de ver el paquete MACHU PICCHU de Destinos Turísticos. Me gustaría tener más información.";
    } else if (paqueteId === "cuatrimoto") {
      mensaje = "Acabo de ver el paquete de CUATRIMOTOS de tours de aventuras. Me gustaría tener más información.";
    } else if (paqueteId === "valle-sur") {
      mensaje = "Acabo de ver el paquete VALLE SUR de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "valle-sagrado") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "valle-vip") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO VIP de Cusco tradicional. Me gustaría tener más información.";
    } else if (paqueteId === "camino-inka") {
      mensaje = "Acabo de ver el paquete CAMINO INKA de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "camino-inka-VIP") {
      mensaje = "Acabo de ver el paquete CAMINO INKA VIP de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "cañon-colca") {
      mensaje = "Acabo de ver el paquete CAÑÓN DE COLCA de tours en Arequipa. Me gustaría tener más información.";
    } else if (paqueteId === "vinicunca") {
      mensaje = "Acabo de ver el paquete VINICUNCA de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "huamantay") {
      mensaje = "Acabo de ver el paquete LAGUNA HUAMANTAY de caminatas. Me gustaría tener más información.";
    } else if (paqueteId === "uros") {
      mensaje = "Acabo de ver el paquete UROS y TAQUILE de Puno. Me gustaría tener más información.";
    } else if (paqueteId === "uros-vip") {
      mensaje = "Acabo de ver el paquete UROS y TAQUILE, AMANTANI de Puno. Me gustaría tener más información.";
    } else if (paqueteId === "city-tours-arequipa") {
      mensaje = "Acabo de ver el paquete CITY TOURS de Arequipa. Me gustaría tener más información.";
    } else if (paqueteId === "tambopata") {
      mensaje = "Acabo de ver el paquete TAMBOPATA de Puerto Maldonado. Me gustaría tener más información.";
    } else if (paqueteId === "puerto-maldonado") {
      mensaje = "Acabo de ver el paquete PUERTO MALDONADO CITY TOUR de Puerto Maldonado. Me gustaría tener más información.";
    }else{
      mensaje = "paquete no encontrado";
    }
    

      mensaje = encodeURIComponent(mensaje); 
      window.open("mailto:peruvianinkatorustravel@gmail.com?subject=Asunto&body=" + mensaje); 
    }); 
  });



  // Seleccionar por ID
const button = document.getElementById("callButton");

// Agregar listener de click
button.addEventListener("click", () => {

  // Redireccionar a la URL 
  window.location.href = "tel:+51953000099";

});