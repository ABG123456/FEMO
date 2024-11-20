// Lightbox para ampliar imágenes
function expandImage(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Verificar si los elementos existen
  if (!lightbox || !lightboxImg) {
    console.error("El Lightbox o la imagen no existen en el DOM.");
    return;
  }

  // Configurar la imagen y mostrar el Lightbox
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

// Cerrar Lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');

  // Verificar si el Lightbox existe
  if (!lightbox) {
    console.error("El Lightbox no existe en el DOM.");
    return;
  }

  // Ocultar el Lightbox
  lightbox.style.display = 'none';
}
