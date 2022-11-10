const toggleBtn = document.querySelectorAll(".buttons button");
const description = document.querySelector(".description");
const mainContainer = document.querySelectorAll(".cycle");

description.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    mainContainer.forEach((cycle) => {
      cycle.classList.remove("show-cycle");
    });
    const element = document.getElementById(id);
    element.classList.add("show-cycle");
  }
});

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".buttons .show-btn").classList.remove("show-btn");
    btn.classList.add("show-btn");
  });
});

const contentInfo = document.querySelector(".content_info");
const displayBtns = document.querySelectorAll(".content_header span");
const displayContent = document.querySelectorAll(".sub_text");

// displays pay-per-rate services
const toggleContent = () => {
  contentInfo.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      displayContent.forEach((text) => {
        text.classList.remove("show-text");
      });
      const element = document.getElementById(id);
      element.classList.add("show-text");
    }
  });

  displayBtns.forEach((content) => {
    content.addEventListener("click", () => {
      document
        .querySelector(".content_header .active")
        .classList.remove("active");
      content.classList.add("active");
    });
  });
};

toggleContent();
