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

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active link handler
function updateActiveLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset untuk navbar fixed
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Panggil fungsi saat scroll dan saat halaman dimuat
window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const body = document.body;

  // Toggle menu
  navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
    body.style.overflow = navbarCollapse.classList.contains('show') ? 'hidden' : '';
  });

  // Tutup menu saat klik di luar
  document.addEventListener('click', function(e) {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
      navbarCollapse.classList.remove('show');
      body.style.overflow = '';
    }
  });

  // Tutup menu saat klik link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarCollapse.classList.remove('show');
      body.style.overflow = '';
    });
  });
});

// Dropdown handler
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdownMenu = this.nextElementSibling;
      
      // Tutup dropdown lain yang mungkin terbuka
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== dropdownMenu) {
          menu.classList.remove('show');
        }
      });

      // Toggle dropdown yang diklik
      dropdownMenu.classList.toggle('show');
    });
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-toggle')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
    }
  });
});

// Dropdown handler untuk mobile view
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  const isMobile = window.innerWidth < 992;

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (isMobile) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Tutup dropdown lain yang mungkin terbuka
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.querySelector('.dropdown-menu').classList.remove('show');
          }
        });

        menu.classList.toggle('show');
        
        // Tambahkan/hapus class active pada toggle
        toggle.classList.toggle('active');
      });
    }
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
      });
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.classList.remove('active');
      });
    }
  });
});

// Card scroll indicator handler
document.addEventListener('DOMContentLoaded', function() {
  const cardContainer = document.querySelector('.card-container');
  
  function updateScrollIndicator() {
    if (cardContainer) {
      const isAtEnd = cardContainer.scrollLeft + cardContainer.clientWidth >= cardContainer.scrollWidth - 50;
      cardContainer.style.setProperty('--after-display', isAtEnd ? 'none' : 'flex');
    }
  }

  if (cardContainer) {
    cardContainer.addEventListener('scroll', updateScrollIndicator);
    // Cek juga saat halaman dimuat
    updateScrollIndicator();
  }
});
