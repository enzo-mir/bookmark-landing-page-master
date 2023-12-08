const carouselContainer = document.getElementById("carouselContainer");
const featureSection = document.getElementById("featureSection");
const navLiFeatures = featureSection.querySelectorAll("ul > li");
const accordionontainer = document.getElementById("accordion");
const nav = document.querySelector("nav");
const burgerMenu = document.getElementById("burgerMenu");

function activeFeature(target) {
  navLiFeatures.forEach((li) => {
    li.classList.value === "active" ? li.classList.remove("active") : null;
  });
  target.classList.add("active");
}
navLiFeatures.forEach((li) => {
  li.addEventListener("click", () => activeFeature(li));
});

accordionontainer.querySelectorAll("article").forEach((article) => {
  article.querySelector("h4").addEventListener("click", (e) => {
    article.dataset.open = article.dataset.open === "false" ? "true" : "false";
  });
  article.querySelector("svg").addEventListener("click", (e) => {
    article.dataset.open = article.dataset.open === "false" ? "true" : "false";
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  const inputForm = e.target.children[1];
  if (new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(inputForm.value)) {
    inputForm.classList.contains("invalid") ? inputForm.classList.remove("invalid") : null;
  } else {
    inputForm.classList.add("invalid");
    inputForm.addEventListener("blur", () => {
      inputForm.classList.contains("invalid") ? inputForm.classList.remove("invalid") : null;
    });
  }
  e.preventDefault();
});

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("open");
});
