
if (!localStorage.getItem("users")) {
  const dummyUsers = [
    { 
      email: "arya@gmail.com", 
      password: "yudhis123", 
      name: "Arya Yudhis", 
      phone: "081234567890" 
    },
    { 
      email: "andika@gmail.com", 
      password: "guest123", 
      name: "Andika", 
      phone: "082345678901" 
    },
    { 
      email: "owen@gmail.com", 
      password: "guest123", 
      name: "Owen", 
      phone: "083456789012" 
    }
  ];
  localStorage.setItem("users", JSON.stringify(dummyUsers));
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailOrUsername = form.querySelector('input[type="text"]').value.trim();
  const password = form.querySelector('input[type="password"]').value.trim();

  const foundUser = users.find(
    u =>
      (u.email.toLowerCase() === emailOrUsername.toLowerCase() ||
       u.name.toLowerCase() === emailOrUsername.toLowerCase()) &&
      u.password === password
  );

  if (foundUser) {

    const currentUser = {
      name: foundUser.name,
      email: foundUser.email,
      password: foundUser.password,
      phone: foundUser.phone
    };

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    const redirect = sessionStorage.getItem("postLoginRedirect") || "home.html";
    sessionStorage.removeItem("postLoginRedirect");

    alert(`Selamat datang, ${currentUser.name}!`);
    window.location.href = redirect;
  } else {
    alert("Email/Nama atau Password salah! Silakan coba lagi.");
  }
});
