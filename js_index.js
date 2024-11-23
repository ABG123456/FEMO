// Integración del SDK de Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v21.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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
