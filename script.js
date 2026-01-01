// ================= NAV TOGGLE =================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================= BUTTON ACTIONS =================
document.getElementById("btnOrderNav").onclick = () => {
  alert("Redirect ke halaman order");
};

document.getElementById("btnExplore").onclick = () => {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("btnCustom").onclick = () => {
  alert("Custom jersey coming soon!");
};

document.getElementById("btnLearnMore").onclick = () => {
  alert("Info lebih lanjut tentang Elite Jersey");
};

document.getElementById("btnContact").onclick = () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

// ================= SCROLL ANIMATION =================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section-title").forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      title.classList.add("show");
    }
  });
});