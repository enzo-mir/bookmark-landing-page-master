const carouselContainer = document.getElementById("carouselContainer");
const featureSection = document.getElementById("featureSection");
const navLiFeatures = featureSection.querySelectorAll("ul > li");
const accordionontainer = document.getElementById("accordion");

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

document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
