// Función para expandir imágenes (Lightbox)
function expandImage(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (!lightbox || !lightboxImg) {
    console.error("El Lightbox o la imagen no existen en el DOM.");
    return;
  }

  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

// Cerrar el Lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    console.error("El Lightbox no existe en el DOM.");
    return;
  }
  lightbox.style.display = 'none';
}

// Toggle para mostrar/ocultar el menú en dispositivos pequeños
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('active');
});
