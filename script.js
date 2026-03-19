// ================= CAROUSEL SUAVE =================
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

    setTimeout(() => {
        carousel.src = images[index];
        carousel.style.opacity = 1;
    }, 300);
}

setInterval(changeImage, 3500);


// ================= TILT =================
document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;

        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    el.addEventListener("mouseleave", () => {
        el.style.transform = "rotateX(0) rotateY(0)";
    });
});


// ================= MAGNET BUTTON =================
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});