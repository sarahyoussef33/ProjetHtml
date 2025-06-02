window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.scroll-anim');
    const triggerBottom = window.innerHeight * 0.8;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 100; 
        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

   function scrollTechLeft() {
    document.getElementById('carouselTech').scrollBy({
        left: -320,
        behavior: 'smooth'
    });
}

function scrollTechRight() {
    document.getElementById('carouselTech').scrollBy({
        left: 320,
        behavior: 'smooth'
    });
}


function scrollTaycanLeft() {
    document.getElementById('carouselTaycan').scrollBy({
        left: -320,
        behavior: 'smooth'
    });
}

function scrollTaycanRight() {
    document.getElementById('carouselTaycan').scrollBy({
        left: 320,
        behavior: 'smooth'
    });
}
