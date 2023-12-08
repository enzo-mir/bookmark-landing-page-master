const carouselContainer = document.getElementById("carouselContainer");
const featureSection = document.getElementById("featureSection");
const navLiFeatures = featureSection.querySelectorAll("ul > li");

function activeFeature(target) {
  navLiFeatures.forEach((li) => {
    li.classList.value === "active" ? li.classList.remove("active") : null;
  });
  target.classList.add("active");
}
navLiFeatures.forEach((li) => {
  li.addEventListener("click", () => activeFeature(li));
});
document.querySelector("form").addEventListener("submit", (e) => e.preventDefault());
