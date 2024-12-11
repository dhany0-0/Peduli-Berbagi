// navbar //

// Mendapatkan elemen sidebar dan tombol hamburger
const sidebar = document.getElementById("navbarNav");
const navbarToggler = document.querySelector(".navbar-toggler");

// Fungsi untuk menutup sidebar
function closeSidebar() {
  sidebar.classList.remove("show");
}

// Menutup sidebar ketika klik di luar sidebar
document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !navbarToggler.contains(e.target)) {
    closeSidebar();
  }
});

// Menambahkan event listener untuk membuka/tutup sidebar saat tombol hamburger diklik
navbarToggler.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});
// navbar end //
