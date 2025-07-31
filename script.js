document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("newUsername").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("newPassword").value;
      const accountType = document.getElementById("accountType").value;

      const user = { username, email, password, accountType };
      localStorage.setItem("userData", JSON.stringify(user));

      alert("Account created successfully!");
      window.location.href = "login.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const savedUser = JSON.parse(localStorage.getItem("userData"));

      if (savedUser && username === savedUser.username && password === savedUser.password) {
        localStorage.setItem("isAdmin", savedUser.accountType === "admin");
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  }
});