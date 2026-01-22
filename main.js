document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const closeBtn = document.getElementById("close-modal");

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalVideo.src = "";
  });

  // Open modal for each project button
  document.querySelectorAll(".project-link").forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modalVideo.src = btn.dataset.video;
      document.getElementById("modal-title").textContent = btn.dataset.title;
      document.getElementById("modal-meta").textContent = `${btn.dataset.role} — ${btn.dataset.year}`;
      document.getElementById("modal-description").textContent = btn.dataset.description;
    });
  });

  // Dark/light toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
});
