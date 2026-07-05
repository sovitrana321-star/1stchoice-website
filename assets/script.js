document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
});
// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light-theme");
        toggleBtn.textContent = "☀️ Light";
    } else {
        toggleBtn.textContent = "🌙 Dark";
    }

    toggleBtn.addEventListener("click", () => {
        const isLight = body.classList.toggle("light-theme");

        if (isLight) {
            toggleBtn.textContent = "☀️ Light";
            localStorage.setItem("theme", "light");
        } else {
            toggleBtn.textContent = "🌙 Dark";
            localStorage.setItem("theme", "dark");
        }
    });
});
