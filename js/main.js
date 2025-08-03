// Bu kod, tüm HTML sayfası yüklendikten sonra çalışmaya başlar.
// Bu kod, bizim yaptığımız İLK yatay menüdeki dropdown içindir.
// Bootstrap'in kenar çubuğu kendi JS'i ile çalıştığı için bu koda ihtiyaç duymaz.
document.addEventListener('DOMContentLoaded', function() {
    
    // Açılır menü elemanını seçiyoruz.
    const dropdown = document.querySelector('.dropdown');

    // Eğer menü elemanı varsa... (kodun hata vermemesi için kontrol)
    if (dropdown) {
        // Üzerine tıklandığında bir fonksiyon çalıştır.
        dropdown.addEventListener('click', function(event) {
            // Tıkladığımız elemanın içindeki '.dropdown-menu' class'lı menüyü seç.
            const dropdownMenu = this.querySelector('.dropdown-menu');
            
            // toggle metodu: Eğer class yoksa ekler, varsa kaldırır.
            dropdownMenu.classList.toggle('show');
        });
    }

    // Menü dışına tıklandığında menüyü kapatmak için
    window.addEventListener('click', function(event) {
        if (!event.target.closest('.dropdown')) {
            const openMenus = document.querySelectorAll('.dropdown-menu.show');
            openMenus.forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
});