const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalVideo = document.getElementById("modal-video");
const modalDescription = document.getElementById("modal-description");

document.querySelectorAll(".project-link").forEach(button => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalMeta.textContent = `${button.dataset.role} — ${button.dataset.year}`;
    modalVideo.src = button.dataset.video;
    modalDescription.textContent = button.dataset.description;

    modal.classList.remove("hidden");
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  modal.classList.add("hidden");
  modalVideo.src = "";
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalVideo = document.getElementById("modal-video");
  const closeBtn = document.getElementById("close-modal");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalVideo.src = "";
  });

  // Example trigger for testing:
  const testBtn = document.createElement("button");
  testBtn.textContent = "Open Modal";
  testBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalVideo.src = "https://player.vimeo.com/video/XXXXXXXX"; // Replace with your video
  });
  document.body.appendChild(testBtn);
});
