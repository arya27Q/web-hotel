document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.php";
    return;
  }

  const form = document.getElementById("editForm");
  form.name.value = currentUser.name || "";
  form.email.value = currentUser.email || "";
  form.phone.value = currentUser.phone || "";
  form.password.value = currentUser.password || "";
  form.address.value = currentUser.address || "";
  form.nik.value = currentUser.nik || "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedUser = {
      ...currentUser,
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      phone: form.phone.value,
      address: form.address.value,
      nik: form.nik.value
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    alert("Profil berhasil diperbarui!");
    window.location.href = "profil.php";
  });
});
