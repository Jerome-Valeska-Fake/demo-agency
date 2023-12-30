// JavaScript

const profileId = "0014a991ec35ec38"; // ID de perfil de Tripadvisor

async function getTripadvisorReviews(id){
  const response = await fetch(`https://api.tripadvisor.com/api/v1/reviews?profile_id=${id}`);
  const data = await response.json();

  return data.reviews.map(review => {
    return {
      name: review.user.username,
      photo: review.user.photo_url,
      text: review.text
    };
  });
}

document.addEventListener('DOMContentLoaded', async () => {

  const reviews = await getTripadvisorReviews(profileId);

  reviews.forEach(review => {
    const html = `
      <div class="slide swiper-slide">
        <img src="${review.photo}" class="image">
        <p>${review.text}</p>  
        <div class="name">${review.name}</div>
      </div>
    `;

    document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', html);
  });

  // inicializar swiper
  new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

});