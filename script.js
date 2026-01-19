// ===== Carousel Controls =====
const carousel = document.getElementById("drinkCarousel");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

if (carousel && leftBtn && rightBtn) {
  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -280, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 280, behavior: "smooth" });
  });
}

// ===== Seat Map Selection =====
const seatGrid = document.getElementById("seatGrid");
const seatSelected = document.getElementById("seatSelected");

if (seatGrid && seatSelected) {
  seatGrid.addEventListener("click", (e) => {
    if (!e.target.classList.contains("seat")) return;

    document.querySelectorAll(".seat").forEach((seat) => {
      seat.classList.remove("selected");
    });

    e.target.classList.add("selected");
    seatSelected.textContent = e.target.textContent;
  });
}
