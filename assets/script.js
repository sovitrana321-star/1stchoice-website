// MOBILE NAVIGATION TOGGLE
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
 // COOKIE BANNER
    const cookieBanner = document.getElementById("cookieBanner");
    const cookieAccept = document.getElementById("cookieAccept");
    const cookieReject = document.getElementById("cookieReject");

    if (cookieBanner && cookieAccept && cookieReject) {
        const consent = localStorage.getItem("cookieConsent");

        // show banner only if no choice yet
        if (consent !== "accepted" && consent !== "rejected") {
            cookieBanner.style.display = "flex";
        }

        cookieAccept.addEventListener("click", () => {
            localStorage.setItem("cookieConsent", "accepted");
            cookieBanner.style.display = "none";
        });

        cookieReject.addEventListener("click", () => {
            localStorage.setItem("cookieConsent", "rejected");
            cookieBanner.style.display = "none";
        });
    }
});
// WHATSAPP ENQUIRY FORM
function sendToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const baseUrl = "https://wa.me/447305692969?text=";

    const text =
        "New enquiry from website%0A%0A" +
        "*Name:* " + encodeURIComponent(name) + "%0A" +
        "*Email:* " + encodeURIComponent(email) + "%0A" +
        "*Service:* " + encodeURIComponent(service) + "%0A" +
        "*Message:* " + encodeURIComponent(message);

    const url = baseUrl + text;

    window.open(url, "_blank");
}
