var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const modal = () => {
  const parent = document.querySelector('.modal-auth');
  if (!parent) return false;
  console.log(parent);

  const OpenModal = document.querySelector('.button-auth');
  console.log(OpenModal);

  const open = () => parent.classList.add("active");
  const close = () => parent.classList.remove("active");

  OpenModal.addEventListener("click", open);

  document.addEventListener('keydown', (event) => {

      if (event.keyCode === 27) {
          close();
      }
  })

  parent.addEventListener('click', (event) => {
      if(event.target === parent) {
          close();
      }
  });

}

const modal2 = () => {
  const parent = document.querySelector('.modal-reg');
  if (!parent) return false;

  const OpenModal = document.querySelector('.auth-reg');

  const open = () => parent.classList.add("active");
  const close = () => parent.classList.remove("active");

  OpenModal.addEventListener("click", open);

  document.addEventListener('keydown', (event) => {

      if (event.keyCode === 27) {
          close();
      }
  })

  parent.addEventListener('click', (event) => {
      if(event.target === parent) {
          close();
      }
  });

}

const modal3 = () => {
  const parent = document.querySelector('.modal-question');
  if (!parent) return false;

  const OpenModal = document.querySelector('.button-question');

  const open = () => parent.classList.add("active");
  const close = () => parent.classList.remove("active");

  OpenModal.addEventListener("click", open);

  document.addEventListener('keydown', (event) => {

      if (event.keyCode === 27) {
          close();
      }
  })

  parent.addEventListener('click', (event) => {
      if(event.target === parent) {
          close();
      }
  });

}

const modal4 = () => {
  const parent = document.querySelector('.modal-burger');
  if (!parent) return false;

  const OpenModal = document.querySelector('.button-burger');

  const open = () => parent.classList.add("active");
  const close = () => parent.classList.remove("active");

  OpenModal.addEventListener("click", open);

  document.addEventListener('keydown', (event) => {

      if (event.keyCode === 27) {
          close();
      }
  })

  parent.addEventListener('click', (event) => {
      if(event.target === parent) {
          close();
      }
  });

}

const init = () => {
  modal();
  modal2();
  modal3();
  modal4();
}
document.addEventListener("DOMContentLoaded", init);