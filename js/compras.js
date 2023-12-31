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
    if(paqueteId === "city-tour") {
      mensaje = "Acabo de ver el paquete CITY TOUR de cusco tradicional, me gustaria tener mas informacion";
    } else if(paqueteId === "machu-picchu") {
      mensaje = "Acabo de ver el paquete de MACHU PICCHU de Destinos Turisticos , me gustaria tener mas informacion";
    } else if(paqueteId === "cuatrimoto") {
      mensaje = "Acabo de ver el paquete de CUATRIMOTOS de tours de aventuras, me gustaria tener mas informacion";
    } else if(paqueteId === "valle-sur") {
      mensaje = "Acabo de ver el paquete VALLE SUR de cusco tradicional, me gustaria tener mas informacion";
    }else if(paqueteId === "valle-sagrado") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO de cusco tradicional, me gustaria tener mas informacion";
    }else if(paqueteId === "valle-vip") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO VIP de cusco tradicional, me gustaria tener mas informacion";
    }else if(paqueteId === "valle-vip") {
      mensaje = "Acabo de ver el paquete VALLE SAGRADO VIP de cusco tradicional, me gustaria tener mas informacion";
    }else if(paqueteId === "camino-inka") {
      mensaje = "Acabo de ver el paquete CAMINO INKA de caminatas, me gustaria tener mas informacion";
    }else if(paqueteId === "camino-inka-VIP") {
      mensaje = "Acabo de ver el paquete CAMINO INKA VIP de caminatas, me gustaria tener mas informacion";
    }else if(paqueteId === "cañon-colca") {
      mensaje = "Acabo de ver el paquete CAÑON DE COLCA de tours Arequipa, me gustaria tener mas informacion";
    }else if(paqueteId === "vinicunca") {
      mensaje = "Acabo de ver el paquete VINICUNCA de caminatas, me gustaria tener mas informacion";
    }else if(paqueteId === "huamantay") {
      mensaje = "Acabo de ver el paquete LAGUNA HUAMANTAY de caminatas, me gustaria tener mas informacion";
    }else if(paqueteId === "uros") {
      mensaje = "Acabo de ver el paquete UROS y TAQUILLE de puno, me gustaria tener mas informacion";
    }else if(paqueteId === "uros-vip") {
      mensaje = "Acabo de ver el paquete UROS y TAQUILLE, AMANTANI de puno, me gustaria tener mas informacion";
    }else if(paqueteId === "city-tours-arequipa") {
      mensaje = "Acabo de ver el paquete CITY TOURS de Arequipa, me gustaria tener mas informacion";
    }else if(paqueteId === "tambopata") {
      mensaje = "Acabo de ver el paquete TAMBOPATA de puerto maldonado, me gustaria tener mas informacion";
    }else if(paqueteId === "puerto-maldonado") {
      mensaje = "Acabo de ver el paquete PUERTO MALDONADO CITY TOUR de puerto maldonado, me gustaria tener mas informacion";
    }

    // Enviar a WhatsApp
    mensaje = encodeURIComponent(mensaje);
    window.open("https://wa.me/+51938696984?text=" + mensaje);

  });

});

const botonesEmail = document.querySelectorAll("#boton-email");

botonesEmail.forEach(function(boton) {

  const paqueteId = boton.dataset.paquete;

  boton.addEventListener("click", function() {
    
      let mensaje;
        if(paqueteId === "city-tour") {
          mensaje = "Acabo de ver el paquete CITY TOUR de cusco tradicional, me gustaria tener mas informacion";
        }else if(paqueteId === "machu-picchu") {
          mensaje = "Acabo de ver el paquete de MACHU PICCHU de Destinos Turisticos , me gustaria tener mas informacion";
        }else if(paqueteId === "cuatrimoto") {
          mensaje = "Acabo de ver el paquete de CUATRIMOTOS de tours de aventuras, me gustaria tener mas informacion";
        } else if(paqueteId === "valle-sur") {
          mensaje = "Acabo de ver el paquete VALLE SUR de cusco tradicional, me gustaria tener mas informacion";
        }else if(paqueteId === "valle-sagrado") {
          mensaje = "Acabo de ver el paquete VALLE SAGRADO de cusco tradicional, me gustaria tener mas informacion";
        }else if(paqueteId === "valle-vip") {
          mensaje = "Acabo de ver el paquete VALLE SAGRADO VIP de cusco tradicional, me gustaria tener mas informacion";
        }else if(paqueteId === "camino-inka") {
          mensaje = "Acabo de ver el paquete CAMINO INKA de caminatas, me gustaria tener mas informacion";
        }else if(paqueteId === "camino-inka-VIP") {
          mensaje = "Acabo de ver el paquete CAMINO INKA VIP de caminatas, me gustaria tener mas informacion";
        }else if(paqueteId === "cañon-colca") {
          mensaje = "Acabo de ver el paquete CAÑON DE COLCA de tours Arequipa, me gustaria tener mas informacion";
        }else if(paqueteId === "vinicunca") {
          mensaje = "Acabo de ver el paquete VINICUNCA de caminatas, me gustaria tener mas informacion";
        }else if(paqueteId === "huamantay") {
          mensaje = "Acabo de ver el paquete LAGUNA HUAMANTAY de caminatas, me gustaria tener mas informacion";
        }else if(paqueteId === "uros") {
          mensaje = "Acabo de ver el paquete UROS y TAQUILLE de puno, me gustaria tener mas informacion";
        }else if(paqueteId === "uros-vip") {
          mensaje = "Acabo de ver el paquete UROS y TAQUILLE, AMANTANI de puno, me gustaria tener mas informacion";
        }else if(paqueteId === "city-tour-arequipa") {
          mensaje = "Acabo de ver el paquete CITY TOURS de Arequipa, me gustaria tener mas informacion";
        }else if(paqueteId === "tambopata") {
          mensaje = "Acabo de ver el paquete TAMBOPATA de puerto maldonado, me gustaria tener mas informacion";
        }else if(paqueteId === "puerto-maldonado") {
          mensaje = "Acabo de ver el paquete PUERTO MALDONADO CITY TOUR de puerto maldonado, me gustaria tener mas informacion";
        }else {
          mensaje = "Paquete no encontrado"; 
        }

      mensaje = encodeURIComponent(mensaje); 
      window.open("mailto:jeremyn.monares@gmail.com?subject=Asunto&body=" + mensaje); 
    }); 
  });



  // Seleccionar por ID
const button = document.getElementById("callButton");

// Agregar listener de click
button.addEventListener("click", () => {

  // Redireccionar a la URL 
  window.location.href = "tel:+51967574733";

});