// Ambil semua gambar galeri
const galleryImages = document.querySelectorAll('.gallery-img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

// Event klik gambar
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = "block";
        popupImg.src = img.src;
    });
});

// Event klik tombol close
closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});
