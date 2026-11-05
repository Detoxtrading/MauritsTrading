document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll(".telegram-link").forEach(link => {
    link.href = "https://t.me/MauritsTrading1";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});