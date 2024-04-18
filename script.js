// Theme Changer Script #########################################
const smThemeMode = document.getElementById("sm-theme-mode"); //Small device switch
const themeMode = document.getElementById("theme-mode"); // Large device switch
const themeCss = document.getElementById("theme-link"); // Css link

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}


// Small Device Theme
smThemeMode.addEventListener("click", function () {
  let currentTheme = smThemeMode.getAttribute("data-theme");
  if (currentTheme == "light") {
    let mode = "dark";
    setTheme(mode);
  } else {
    let mode = "light";
    setTheme(mode);
  }
});

function setTheme(mode) {
  if (mode == "light") {
    themeMode.setAttribute("data-theme", "light");
    themeMode.removeAttribute("checked");
    smThemeMode.setAttribute("data-theme", "light");
    smThemeMode.removeAttribute("checked");
    themeCss.setAttribute("href", "css/light.css");
  } else {
    themeMode.setAttribute("data-theme", "dark");
    themeMode.setAttribute("checked", true);
    smThemeMode.setAttribute("data-theme", "dark");
    smThemeMode.setAttribute("checked", true);
    themeCss.setAttribute("href", "css/dark.css");
  }
  localStorage.setItem("theme", mode);
}


// script after page load
// window.onload = function () {

// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.min.css">
const icons = document.createElement("link");
icons.rel = "stylesheet";
icons.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.min.css";
document.head.appendChild(icons);

// Large Device Theme
themeMode.addEventListener("click", function () {
  let currentTheme = themeMode.getAttribute("data-theme");
  if (currentTheme == "light") {
    let mode = "dark";
    setTheme(mode);
  } else {
    let mode = "light";
    setTheme(mode);
  }
});


// fetch id my-title and add class my-title
// console.log("page loaded");
// var myTitle = document.getElementById("my-title");
// myTitle.classList.add("my-title");

// Navigation Script #############################################
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let currentSection = "";

  const scrollPos =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollPos >= sectionTop - sectionHeight * 0.25) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("change-color");
    link.children[0].classList.add("hidden");
  });

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href").substring(1) === currentSection &&
      link.children[0].getAttribute("data-link") === currentSection
    ) {
      link.children[0].classList.remove("hidden");
      link.classList.add("change-color");
    }
  });
});

// Small Menu script
const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const menuContainer = document.getElementById("menu-container");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  menuContainer.classList.add("hidden");
});

// Service Script ################################################
// Swiper
var swiper = new Swiper(".swiper", {
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// Testimonials Script ###########################################
// Swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
var swiper = new Swiper(".swipers", {
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
  },
});

// Projects ######################################################

const showMore = document.getElementById("show-more");
const showLess = document.getElementById("show-less");
const hiddenProjects = document.getElementById("auto-hidden-projects");

// Show more
showMore.addEventListener("click", () => {
  showMore.classList.add("hidden");
  hiddenProjects.classList.remove("hidden");
});
// Show less
showLess.addEventListener("click", () => {
  showMore.classList.remove("hidden");
  hiddenProjects.classList.add("hidden");
});

// Project Btns
const allProjects = document.getElementById("all");
const botProjects = document.getElementById("bot");
const backendProjects = document.getElementById("backend");
const automationProjects = document.getElementById("automation");

// Project pages containers
const allPage = document.getElementById("all-container");
const botPage = document.getElementById("bot-container");
const backendPage = document.getElementById("backend-container");
const automationPage = document.getElementById("automation-container");

// All
allProjects.addEventListener("click", () => {
  allPage.classList.remove("hidden");
  botPage.classList.add("hidden");
  backendPage.classList.add("hidden");
  automationPage.classList.add("hidden");
  // Title script
  allProjects.classList.add("active");
  botProjects.classList.remove("active");
  backendProjects.classList.remove("active");
  automationProjects.classList.remove("active");
});
// Bot
botProjects.addEventListener("click", () => {
  botPage.classList.remove("hidden");
  allPage.classList.add("hidden");
  backendPage.classList.add("hidden");
  automationPage.classList.add("hidden");
  // Title script
  botProjects.classList.add("active");
  allProjects.classList.remove("active");
  backendProjects.classList.remove("active");
  automationProjects.classList.remove("active");
});
// backend
backendProjects.addEventListener("click", () => {
  backendPage.classList.remove("hidden");
  allPage.classList.add("hidden");
  botPage.classList.add("hidden");
  automationPage.classList.add("hidden");
  // Title script
  backendProjects.classList.add("active");
  botProjects.classList.remove("active");
  allProjects.classList.remove("active");
  automationProjects.classList.remove("active");
});
// automation
automationProjects.addEventListener("click", () => {
  automationPage.classList.remove("hidden");
  allPage.classList.add("hidden");
  backendPage.classList.add("hidden");
  botPage.classList.add("hidden");
  // Title script
  automationProjects.classList.add("active");
  backendProjects.classList.remove("active");
  botProjects.classList.remove("active");
  allProjects.classList.remove("active");
});

// Lazy Images
const lazyImages = document.querySelectorAll("img.lazy");
lazyImages.forEach((img) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = img.dataset.src;
        img.classList.add("loaded");
        img.classList.remove("blur");
        observer.unobserve(img);
      }
    });
  });
  observer.observe(img);
});

// Modals
const modalContainers = [];

modalContainers.push(document.getElementById("leetcode-profiler"));
modalContainers.push(document.getElementById("buzzoids"));
modalContainers.push(document.getElementById("filter"));
modalContainers.push(document.getElementById("resalesavage"));
modalContainers.push(document.getElementById("telegramMrkt"));
modalContainers.push(document.getElementById("fluentEnglish"));
modalContainers.push(document.getElementById("telegramAutomation"));
modalContainers.push(document.getElementById("autoShay"));
modalContainers.push(document.getElementById("cherryPay"));
modalContainers.push(document.getElementById("investPenny"));
modalContainers.push(document.getElementById("giddyops"));
modalContainers.push(document.getElementById("legion"));
modalContainers.push(document.getElementById("royalRocket"));
modalContainers.push(document.getElementById("chapa-sdk"));

// Modal Showing
function modals(popUp) {
  for (let i = 0; i < modalContainers.length; i++) {
    if (modalContainers[i].id == popUp) {
      modalContainers[i].classList.remove("hidden");
      overlay.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    } else {
      modalContainers[i].classList.add("hidden");
    }
  }
}

// Closing modal
function closeModal(close) {
  for (let i = 0; i < modalContainers.length; i++) {
    if (modalContainers[i].id == close) {
      modalContainers[i].classList.add("hidden");
      overlay.classList.add("hidden");
      document.body.removeAttribute("style");
    }
  }
}

const projectShowMore = document.querySelectorAll(".project-link");
projectShowMore.forEach((showDetail) => {
  showDetail.addEventListener("click", () => {
    const modalPopUp = showDetail.getAttribute("data-for");
    modals(modalPopUp);
  });
});

const closeProjectModal = document.querySelectorAll(".close-modal");
closeProjectModal.forEach((c) => {
  c.addEventListener("click", () => {
    const closeThisModal = c.getAttribute("data-close");
    closeModal(closeThisModal);
  });
});

const overlay = document.getElementById("overlay");
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  document.body.removeAttribute("style");

  // project popup modals
  document.getElementById("buzzoids").classList.add("hidden");
  document.getElementById("filter").classList.add("hidden");
  document.getElementById("resalesavage").classList.add("hidden");
  document.getElementById("telegramMrkt").classList.add("hidden");
  document.getElementById("fluentEnglish").classList.add("hidden");
  document.getElementById("telegramAutomation").classList.add("hidden");
  document.getElementById("autoShay").classList.add("hidden");
  document.getElementById("cherryPay").classList.add("hidden");
  document.getElementById("investPenny").classList.add("hidden");
  document.getElementById("giddyops").classList.add("hidden");
  document.getElementById("legion").classList.add("hidden");
  document.getElementById("royalRocket").classList.add("hidden");
});

// Fun Fact ##########################################################
const funFacts = document.querySelectorAll(".facts");
const countSpeed = 10;

funFacts.forEach((counter) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const countFunFact = () => {
          const value = +counter.getAttribute("data-num");
          const data = +counter.innerText;

          const time = value / countSpeed;
          if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(countFunFact, 80);
          } else {
            counter.innerText = value;
          }
        };
        countFunFact();
        observer.unobserve(counter);
      }
    });
  });
  observer.observe(counter);
});

// Contact script #####################################################

// Form Validation
function validateForm() {
  const nameInput = document.getElementById("form-name");
  const messageInput = document.getElementById("form-message");
  const subjectInput = document.getElementById("form-subject");
  const emailInput = document.getElementById("form-email");

  // Regex
  let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let nameFormat = /^\w+$/;

  if (nameInput.value.length < 3 && !nameInput.value.match(nameFormat)) {
    document.getElementById("form-info-message").classList.remove("hidden");
    nameInput.classList.add("border-error");
    return false;
  }

  if (!emailInput.value.match(mailFormat)) {
    document.getElementById("form-info-message").classList.remove("hidden");
    emailInput.classList.add("border-error");
    nameInput.classList.remove("border-error");
    return false;
  }

  if (subjectInput.value.length < 5) {
    document.getElementById("form-info-message").classList.remove("hidden");
    subjectInput.classList.add("border-error");
    emailInput.classList.remove("border-error");
    return false;
  }

  if (messageInput.value.length <= 15) {
    document.getElementById("form-info-message").classList.remove("hidden");
    messageInput.classList.add("border-error");
    subjectInput.classList.remove("border-error");
    return false;
  }

  document.getElementById("form-info-message").classList.add("hidden");
  emailInput.classList.remove("hidden");
  nameInput.classList.remove("hidden");
  subjectInput.classList.remove("hidden");
  messageInput.classList.remove("hidden");
  sendBtn.removeAttribute("disabled");
  return true;
}

// Contact btn and Container
const sendBtn = document.getElementById("send-btn");
const contactBox = document.getElementById("btn-container");
contactBox.addEventListener("mouseover", function () {
  validateForm();
});

// Form info
const formInfo = document.getElementById("form-info");
formInfo.addEventListener("mouseover", () => {
  document.getElementById("form-info-message").classList.remove("hidden");
});

formInfo.addEventListener("mouseleave", () => {
  document.getElementById("form-info-message").classList.add("hidden");
});

// submit formspree form
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const contactUsForm = document.getElementById("contact-us-form");

loading.style.display = "none";
errorMessage.style.display = "none";
successMessage.style.display = "none";

contactUsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactUsForm.style.display = "none";
  loading.style.display = "block";
  const formData = new FormData(contactUsForm);
  fetch(contactUsForm.getAttribute("action"), {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => {
      loading.style.display = "none";
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
        contactUsForm.style.display = "block";
        contactUsForm.reset();
      }, 5000);
    })
    .catch((error) => {
      loading.style.display = "none";
      errorMessage.style.display = "block";
      setTimeout(() => {
        errorMessage.style.display = "none";
        contactUsForm.style.display = "block";
        contactUsForm.reset();
      }, 5000);
    });
});

// scroll script
const scrollBtn = document.getElementById("scroll-btn");
window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});
scrollBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});



// };

// onscroll laod <script defer src="js/aos.js"></script> and init



