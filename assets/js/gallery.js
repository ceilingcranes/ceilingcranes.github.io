// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');

  // Add click handlers to all gallery images
  document.querySelectorAll('.gallery-item img').forEach(function(img) {
    img.addEventListener('click', function() {
      lightbox.style.display = 'block';
      lightboxImg.src = this.getAttribute('data-full');

      const caption = this.nextElementSibling;
      if (caption && caption.classList.contains('image-caption')) {
        lightboxCaption.textContent = caption.textContent;
      } else {
        lightboxCaption.textContent = this.alt;
      }
    });
  });

  // Close lightbox when clicking the close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  }

  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Close lightbox with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });
});
