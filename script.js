// ================= CAROUSEL SUAVE PRO =================

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
    // fade out
    carousel.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        carousel.src = images[index];

        // fade in
        carousel.style.opacity = 1;
    }, 800); // más lento y elegante
}

// 🔥 más tiempo visible (se siente premium)
setInterval(changeImage, 5000);


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