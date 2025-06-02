window.addEventListener("load", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
            return;
        }

        link.addEventListener("click", function (e) {
            e.preventDefault();

            const loader = document.getElementById("page-loader");
            if (loader) {
                loader.classList.add("active");
            }

            setTimeout(() => {
                window.location.href = href;
            }, 700);
        });
    });
});

window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150; 
        
        if (elementTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
});

