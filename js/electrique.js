function scrollToLeft() {
        document.getElementById('carousel').scrollBy({
            left: -320,
            behavior: 'smooth'
        });
    }

    function scrollToRight() {
        document.getElementById('carousel').scrollBy({
            left: 320,
            behavior: 'smooth'
        });
    }

// animation au scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100; // plus bas = plus tard

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

// Lancer à chaque scroll
window.addEventListener("scroll", revealOnScroll);

// Lancer au chargement
window.addEventListener("load", revealOnScroll);
