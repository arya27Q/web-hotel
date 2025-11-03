document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("userIcon");
  const dropdown = document.getElementById("dropdownMenu");

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  if (!userIcon || !dropdown) return;
  if (dropdown) {
   
    if (currentUser && currentUser.email) {
      dropdown.innerHTML = `
        <a href="profil.html">Profile</a>
        <a href="#" id="logoutBtn">Logout</a>
      `;
    } 
    
    else {
      dropdown.innerHTML = `
        <a href="login.html">Login</a>
        <a href="create_account.html">Create Account</a>
      `;
    }
  }

  userIcon.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".user-menu")) {
      dropdown.classList.remove("show");
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.id === "logoutBtn") {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      alert("You have been logged out!");
      window.location.href = "home.html";
    }
  });
});
