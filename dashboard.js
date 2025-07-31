function logout() {
  alert("Logged out successfully.");
  localStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}

function goToCourse(course) {
  window.location.href = course + ".html";
}

document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const adminPanel = document.getElementById("adminPanel");
  if (isAdmin && adminPanel) {
    adminPanel.classList.remove("hidden");
  }
});
