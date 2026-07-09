
function openBlogModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeBlogModal(modalId) {
  document.getElementById(modalId).style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target.classList.contains('blog-modal')) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
}
