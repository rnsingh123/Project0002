/* =================================================================
   SCRIPT.JS — VISIONCAFE INTERACTIONS
   -----------------------------------------------------------------
   Three features:
   1. Hamburger menu toggle (mobile nav drawer)
   2. Carousel arrow buttons (desktop drink scroll)
   3. Seat map selection (reserve section)

   REUSE GUIDE:
   - Each feature is wrapped in an if() guard so it won't crash
     if the element doesn't exist on a different page.
   - Copy individual blocks into any new project as needed.
   ================================================================= */


/* =================================================================
   1. HAMBURGER MENU
   -----------------------------------------------------------------
   Toggles .open class on both the hamburger button and the
   mobile nav drawer. CSS handles the visual animation.

   HOW IT WORKS:
   - Click hamburger → adds .open to both elements
   - Click again → removes .open (toggle)
   - Click any nav link → removes .open from both (closes drawer)

   REUSE: Copy this block. Update IDs to match your HTML.
   ================================================================= */
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburger && mobileNav) {
  // Toggle drawer open/closed on hamburger click
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });

  // Close drawer automatically when any nav link is tapped
  // Improves UX — user doesn't have to manually close the menu
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
    });
  });
}


/* =================================================================
   2. CAROUSEL CONTROLS
   -----------------------------------------------------------------
   Left/right arrow buttons scroll the carousel by 280px.
   scroll-behavior: smooth is set in CSS for the animation.

   On mobile, these buttons are hidden via CSS and the user
   swipes natively using scroll-snap (no JS needed for that).

   REUSE: Copy this block. Update IDs/selectors to match your HTML.
   Change the 280 value to scroll more or fewer pixels per click.
   ================================================================= */
const carousel = document.getElementById("drinkCarousel");
const leftBtn  = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");

if (carousel && leftBtn && rightBtn) {
  // Scroll left by 280px on left arrow click
  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -280, behavior: "smooth" });
  });

  // Scroll right by 280px on right arrow click
  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 280, behavior: "smooth" });
  });
}


/* =================================================================
   3. SEAT MAP SELECTION
   -----------------------------------------------------------------
   Uses event delegation on the parent #seatGrid container.
   One listener handles all seat buttons — more efficient than
   attaching a listener to each button individually.

   HOW IT WORKS:
   - Click any .seat button → removes .selected from all seats
   - Adds .selected to the clicked seat
   - Updates the #seatSelected text to show which seat is picked

   REUSE: Copy this block. Update IDs to match your HTML.
   The .selected class styling is in style.css under SEAT MAP.
   ================================================================= */
const seatGrid     = document.getElementById("seatGrid");
const seatSelected = document.getElementById("seatSelected");

if (seatGrid && seatSelected) {
  // Event delegation: one listener on the parent handles all child clicks
  seatGrid.addEventListener("click", (e) => {
    // Ignore clicks that didn't land on a .seat button
    if (!e.target.classList.contains("seat")) return;

    // Deselect all seats first
    document.querySelectorAll(".seat").forEach(seat => {
      seat.classList.remove("selected");
    });

    // Select the clicked seat
    e.target.classList.add("selected");

    // Update the "Selected: ___" label below the grid
    seatSelected.textContent = e.target.textContent;
  });
}
