"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// };

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {
//   testimonialsItem[i].addEventListener("click", function () {
//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector(
//       "[data-testimonials-title]"
//     ).innerHTML;
//     modalText.innerHTML = this.querySelector(
//       "[data-testimonials-text]"
//     ).innerHTML;

//     testimonialsModalFunc();
//   });
// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (
      selectedValue === filterItems[i].dataset.category.toLowerCase()
    ) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}
filterFunc("all");

// NEW FILTER

// NEW FILTER

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// ===== PROJECT MODAL =====

const projectItems = document.querySelectorAll("[data-project-item]");
const projectModalOverlay = document.querySelector("[data-project-modal-overlay]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close]");
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalCategory = document.querySelector("[data-project-modal-category]");
const projectModalDesc = document.querySelector("[data-project-modal-desc]");
const projectModalTech = document.querySelector("[data-project-modal-tech]");

const openProjectModal = function (item) {
  const title = item.dataset.projectTitle || "";
  const category = item.dataset.projectCategory || "";
  const desc = item.dataset.projectDesc || "";
  const tech = item.dataset.projectTech || "";
  const img = item.dataset.projectImg || "";

  projectModalImg.src = img;
  projectModalImg.alt = title;
  projectModalTitle.textContent = title;
  projectModalCategory.textContent = category;
  projectModalDesc.textContent = desc;

  projectModalTech.innerHTML = "";
  tech.split(",").forEach(function (tag) {
    const span = document.createElement("span");
    span.className = "project-modal-tech-tag";
    span.textContent = tag.trim();
    projectModalTech.appendChild(span);
  });

  // Prevent layout shift caused by scrollbar disappearing
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + "px";
  document.body.style.overflow = "hidden";
  projectModalOverlay.classList.add("active");
};

const closeProjectModal = function () {
  projectModalOverlay.classList.remove("active");
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};

// open modal on project item click
for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    openProjectModal(this);
  });
}

// close modal on close button click
projectModalCloseBtn.addEventListener("click", closeProjectModal);

// close modal on overlay click (outside modal card)
projectModalOverlay.addEventListener("click", function (e) {
  if (e.target === projectModalOverlay) {
    closeProjectModal();
  }
});

// close modal on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && projectModalOverlay.classList.contains("active")) {
    closeProjectModal();
  }
});

// ===== END PROJECT MODAL =====

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  console.log(navigationLinks[i]);
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
