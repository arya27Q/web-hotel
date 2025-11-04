<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profil Pengguna - Luxury Hotel</title>
  <link rel="stylesheet" href="../css/profil.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>
<body>

  <header>
    <img src="../img/logo.png" alt="Luxury Hotel">
    <nav>
       <a href="home.php">Home</a>
      <a href="reservasi_hotel.php">Room</a>
      <a href="meeting_reservasi.php">Meeting</a>
      <a href="facilities.php">Facilities</a>
      <a href="about.php">About us</a>
    </nav>
  <div class="user-menu">
  <a class="a" href="#" id="userIcon">
    <i class="fa-solid fa-user"></i>
    <i class="fa-solid fa-caret-down"></i>
  </a>
  <div class="dropdown" id="dropdownMenu"></div>
  </header>

   <section class="profile-banner">
    <h1> EDIT PROFILE</h1>
  </section>
  
  <section class="bg">
  <section class="profile-section">
    <h2 class="h2">Edit Profile</h2>
    <div class="profile-card">
      <h3>My Profile Account</h3>
     <form id="editForm">
  <div class="form-row">
    <input type="text" id="user-name" placeholder="Username">
    <input type="password" id="user-password" placeholder="Password">
    <input type="text" id="user-address" placeholder="Address">
  </div>
  <div class="form-row">
    <input type="email" id="user-email" placeholder="Email">
    <input type="text" id="user-phone" placeholder="62+ xxx xxx xxx">
    <input type="text" id="user-nik" placeholder="NIK">
  </div>
 <button type="button" class="save-btn" onclick="window.location.href='editprofil.html'">Edit Profil</button>
</form>

    </div>
  </section>
  </section>
  
<footer>
  <div class="footer-container">
    <div class="footer-left">
      <p>&copy; Luxury Hotel 2025</p>
      <p>Surabaya, Indonesia</p>
      <p>Your Comfort, Our Priority</p>
    </div>
    <div class="footer-center">
      <a href="#top" class="btn back-top">
        <i class="fa-solid fa-arrow-up"></i> Back to Top
      </a>
    </div>
    <div class="footer-right">
      <p><i class="fa-brands fa-instagram"></i> @luxuryhotel</p>
      <p><i class="fa-solid fa-phone"></i> 6289566895155</p>
      <p><i class="fa-solid fa-envelope"></i> luxuryhotelsby@gmail.com</p>
    </div>
  </div>
</footer>

  <script src="../js/profil.js"> </script>
  <script src="../js/user-section.js"></script>
 
</body>
</html>
