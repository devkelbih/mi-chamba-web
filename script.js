// ================= CAROUSEL SUAVE  =================

const images = [
    "assets/images/calendario.jpg",
    "assets/images/registro.jpg",
    "assets/images/agrega-trabajo.jpg",
    "assets/images/resumen.jpg",
    "assets/images/paga-semana.jpg",
    "assets/images/catalogo.jpg",
    "assets/images/edita-catalogo.jpg",
    "assets/images/oscuro.jpg"
];

let index = 0;
const carousel = document.getElementById("carousel");

function changeImage() {
    const nextIndex = (index + 1) % images.length;

    const img = new Image();
    img.src = images[nextIndex];

    img.onload = () => {
        // fade out
        carousel.style.opacity = 0;

        setTimeout(() => {
            index = nextIndex;
            carousel.src = images[index];

            // fade in
            carousel.style.opacity = 1;
        }, 400); // más corto = más fluido
    };
}

setInterval(changeImage, 5000);


// ================= MAGNET BUTTON =================

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `
            translate(${x * 0.1}px, ${y * 0.1}px)
            scale(1.02)
        `;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});