document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Telegram universal link: opens the Telegram app when installed,
  // otherwise it falls back to the Telegram channel in the browser.
  document.querySelectorAll(".telegram-link").forEach(link => {
    link.href = "https://t.me/MauritsTrading1";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});