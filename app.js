// Effect preloader
let loader = document.getElementById("preloader");

window.addEventListener("load", ()=>{
  loader.style.display = "none";
})


// Effect Animate on Scroll
AOS.init({
  easing: "zoom-in",
  duration: 1200,
  delay: 300,
  once: false,
  disable: false,
});
// Toggle Accordion
const accordionItems = document.querySelectorAll(".accordion-item");
accordionItems.forEach((item) => {
  const btn = item.querySelector(".accordion-pg");
  btn.addEventListener("click", () => {
    accordionItems.forEach((article) => {
      if (article !== item) {
        article.classList.remove("unlock");
      }
    });

    item.classList.toggle("unlock");
  });
});

// Show hidden div in practice areas section
const showDiv = () => {
  let btnop1 = document.getElementById("op-1");
  let btnop2 = document.getElementById("op-2");
  let op1Text = document.getElementById("op-1-text");
  let op2Text = document.getElementById("op-2-text");

  btnop1.addEventListener("click", () => {
    op1Text.style.display = "block";
    op2Text.style.display = "none";
    btnop1.style.color = "#8fc460";
    btnop1.style.borderBottom = "3px solid #8fc460";
    btnop2.style.color = "grey";
    btnop2.style.borderBottom = "3px solid grey";
  });

  btnop2.addEventListener("click", () => {
    op1Text.style.display = "none";
    op2Text.style.display = "block";
    btnop1.style.color = "grey";
    btnop1.style.borderBottom = "3px solid grey";
    btnop2.style.borderBottom = "3px solid #8fc460";
    btnop2.style.color = "#8fc460";
  });
};

showDiv();

// Activate swipper for carousel
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Review carousel navigation
const reviewBtns = document.querySelectorAll('.nav-btn');
const reviews = document.querySelectorAll('.reviews');

reviewBtns.forEach((btn, i)=>{
  btn.addEventListener('click', ()=>{
    carousel(i)
  })
})

const carousel = (manual)=>{
  reviewBtns.forEach((btn)=>{
    btn.classList.remove('start');
  })
  reviews.forEach((review)=>{
    review.classList.remove('show-review');
  })
  reviewBtns[manual].classList.add('start');
  reviews[manual].classList.add('show-review');
}