const bookingList = document.getElementById("booking-list");
const totalPriceEl = document.getElementById("total-price");

let bookingData = JSON.parse(localStorage.getItem("bookingData")) || { list: [], total: 0 };
updateBookingList();

function updateBookingList() {
  bookingList.innerHTML = bookingData.list.map(item => `
    <li>${item.roomName} (${item.checkin} → ${item.checkout}) - Rp.${item.price.toLocaleString()}</li>
  `).join("");
  totalPriceEl.textContent = `Rp.${bookingData.total.toLocaleString()}`;
}

function addBooking(roomName, price) {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  
  if(!checkin || !checkout) {
    alert("Silakan pilih tanggal check-in dan check-out terlebih dahulu!");
    return;
  }

 
  bookingData.list.push({ roomName, checkin, checkout, price });
  bookingData.total += price;
  localStorage.setItem("bookingData", JSON.stringify(bookingData));

  updateBookingList();
}


window.showPayment = function(icon){
  const overlay = document.getElementById("overlay");
  const floatingForm = document.getElementById("floatingForm");
  const title = document.getElementById("floatingTitle");
  const formContent = document.getElementById("formContent");
  const confirmBtn = document.getElementById("confirmBtn");

  overlay.style.display = "block";
  floatingForm.style.display = "block";

  confirmBtn.disabled = true; 

  switch(icon.dataset.method){
    case "E-Wallet":
      title.textContent="E-Wallet Payment";
      formContent.innerHTML = `<label>Nomor E-Wallet:</label><input type="text" id="inputField" placeholder="Masukkan nomor e-wallet">`;
      break;
    case "Visa":
      title.textContent="Visa Payment";
      formContent.innerHTML = `
        <label>Nomor Kartu:</label><input type="text" id="inputField" placeholder="Masukkan nomor kartu">
        <label>CVV:</label><input type="text" id="cvvField" placeholder="CVV">
      `;
      break;
    case "MasterCard":
      title.textContent="MasterCard Payment";
      formContent.innerHTML = `
        <label>Nomor Kartu:</label><input type="text" id="inputField" placeholder="Masukkan nomor kartu">
        <label>CVV:</label><input type="text" id="cvvField" placeholder="CVV">
      `;
      break;
   case "QRIS":
  title.textContent = "QRIS Payment";
  formContent.innerHTML = `
    <p style="text-align:center; margin-bottom:5px;">Scan QR ini untuk bayar : </p>
    <img src="/img/qris.webp" alt="QRIS" width="200" 
    style="display:block; margin:5px auto 0 auto; border-radius:10px;">
  `;
  confirmBtn.disabled = false;
  break;
  }

  const inputField = document.getElementById("inputField");
  const cvvField = document.getElementById("cvvField");

  if(inputField){
    inputField.addEventListener("input", checkInput);
  }
  if(cvvField){
    cvvField.addEventListener("input", checkInput);
  }

  function checkInput(){
    if(inputField && cvvField){
      confirmBtn.disabled = !(inputField.value.trim() && cvvField.value.trim());
    } else if(inputField){
      confirmBtn.disabled = !inputField.value.trim();
    }
  }

  confirmBtn.onclick = function(){
    alert(`${icon.dataset.method} berhasil dibayar!`);
    floatingForm.style.display="none";
    overlay.style.display="none";
  };

  document.getElementById("closeForm").onclick = function(){
    floatingForm.style.display="none";
    overlay.style.display="none";
  };
};




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

const payBtn = document.querySelector(".pay-btn");

payBtn.addEventListener("click", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const bookingData = JSON.parse(localStorage.getItem("bookingData") || "{}");

  if (!bookingData.list || bookingData.list.length === 0) {
    alert("Belum ada booking. Silakan pesan kamar terlebih dahulu!");
    return;
  }

  if (!isLoggedIn) {
    sessionStorage.setItem("postLoginRedirect", "payment_reservation_room.html");
    alert("Silakan login terlebih dahulu untuk melanjutkan pembayaran.");
    window.location.href = "login.html";
    return;
  }

  const user = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const userName = user?.name || "Tamu";

  alert(`Halo ${userName}, silakan selesaikan pembayaran terlebih dahulu.`);

  const paymentMenu = document.getElementById("paymentMenu");
  if (paymentMenu) {
    paymentMenu.style.display = "block";
  }
});
