document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Merci ! Votre demande de réservation a bien été enregistrée. Un conseiller vous contactera sous peu.");
        window.location.href = "./accueil.html";
    });
});
