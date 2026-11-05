document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add("visible"));
  }

  // Telegram HTTPS universal links open the Telegram app when installed,
  // or fall back to the Telegram channel page.
  document.querySelectorAll(".telegram-link").forEach(link => {
    link.href = "https://t.me/MauritsTrading1";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});