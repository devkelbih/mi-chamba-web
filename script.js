const images = [
    "assets/images/calendario.jpg",
    "assets/images/registro.jpg",
    "assets/images/resumen.jpg",
    "assets/images/catalogo.jpg"
];

let index = 0;
const carousel = document.getElementById("carousel");

function changeImage() {
    index = (index + 1) % images.length;

    carousel.style.opacity = 0;
    carousel.style.transform = "scale(0.97)";

    setTimeout(() => {
        carousel.src = images[index];
        carousel.style.opacity = 1;
        carousel.style.transform = "scale(1)";
    }, 400);
}

setInterval(changeImage, 3500);

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(60px)";
    el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    observer.observe(el);
});