// Suponiendo que has importado SweetAlert2 en tu proyecto

const scriptURL = 'https://script.google.com/macros/s/AKfycbx-MI786E6EG221RpoleJEDUzR5pQoUnGToWUAcq3AtFee1NmwXHvXtm6r9ZgYuLa6w/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        return response.json(); // Si necesitas trabajar con la respuesta JSON del servidor
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      // Aquí utilizamos SweetAlert2 para mostrar un mensaje exitoso
      Swal.fire({
        title: '¡Buen trabajo!',
        text: '¡El formulario se envió correctamente, nos comunicaremos contigo pronto!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload();
      });
    })
    .catch(error => {
      // Manejo de errores: muestra un mensaje de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error('Error!', error.message);
    });
});
