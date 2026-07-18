document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const nav = document.getElementById("nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
});

// Theme Toggle (Light default, Dark on toggle)
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if (!toggleBtn) return;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        toggleBtn.textContent = "☀️ Light";
    } else {
        // Default: light theme (no class)
        toggleBtn.textContent = "🌙 Dark";
    }

    toggleBtn.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark-theme");

        if (isDark) {
            toggleBtn.textContent = "☀️ Light";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙 Dark";
            localStorage.setItem("theme", "light");
        }
    });
});
