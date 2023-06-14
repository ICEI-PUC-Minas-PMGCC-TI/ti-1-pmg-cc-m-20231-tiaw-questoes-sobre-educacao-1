const carousel = document.querySelector(".grid-carousel");
const slides = carousel.querySelectorAll(".grid-carousel__slide");
const leftButton = carousel.querySelector(".left");
const rightButton = carousel.querySelector(".right");

const getOrder = (elem) => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;
  const order = parseInt(orderValue);
  return order;
};

const moveRight = () => {
  slides.forEach(function (slide) {
    let order = getOrder(slide);

    if (order < slides.length) {
      slide.style.order = order + 1;
    } else {
      slide.style.order = 1;
    }
  });
};

const moveLeft = () => {
  slides.forEach(function (slide) {
    let order = getOrder(slide);

    if (order > 1) {
      slide.style.order = order - 1;
    } else {
      slide.style.order = slides.length;
    }
  });
};

rightButton.addEventListener("click", moveRight);

leftButton.addEventListener("click", moveLeft);
