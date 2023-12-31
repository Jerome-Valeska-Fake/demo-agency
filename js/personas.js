const scriptURL = 'https://script.google.com/macros/s/AKfycbx-MI786E6EG221RpoleJEDUzR5pQoUnGToWUAcq3AtFee1NmwXHvXtm6r9ZgYuLa6w/exec';


const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
