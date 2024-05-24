document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.getElementById("nav-links");
    const navIcon = document.getElementById("nav-icon");

    // Fungsi untuk menutup menu dan mengubah ikon kembali ke bentuk awal
    function closeMenu() {
        navLinks.classList.remove("active");
        navIcon.classList.remove("change");
    }

    // Event listener untuk setiap item menu
    const menuItems = navLinks.querySelectorAll("a");
    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            closeMenu(); // Panggil fungsi untuk menutup menu
        });
    });

    // Event listener untuk ikon navigasi
    navIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        navIcon.classList.toggle("change");
    });
});



    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement && !this.href.endsWith('.pdf')) {
                e.preventDefault(); // Cegah perilaku default hanya jika bukan tautan menuju file PDF

                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

