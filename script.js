document.querySelectorAll('.iconmusiques').forEach(function(iconmusiques) {
  var audio = new Audio(iconmusiques.dataset.audio);

  iconmusiques.addEventListener('click', function() {
    if (!audio.paused) {
      audio.pause();
      this.classList.remove('rotating');
    } else {
      audio.play();
      this.classList.add('rotating');
    }
  });

  // Arrêter la rotation quand la musique se termine
  audio.addEventListener('ended', function() {
    iconmusiques.classList.remove('rotating');
  });
});

// Image blur hover effect
const image = document.getElementById("img");

if (image) {
  // Appliquer le blur par défaut
  image.style.filter = "blur(10px)";
  
  image.addEventListener("mouseover", function() {
    image.style.filter = "blur(0px)";
  });
  
  image.addEventListener("mouseout", function() {
    image.style.filter = "blur(10px)";
  });
}

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navContainer = document.querySelector('.nav-container');

if (menuToggle && navContainer) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navContainer.classList.toggle('active');
  });
}

// Fonction pour le contenu "Voir plus" améliorée
function toggleMoreContent(button) {
  const content = button.nextElementSibling;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  
  if (content) {
    if (isExpanded) {
      content.classList.remove('active');
      content.setAttribute('aria-hidden', 'true');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'Voir plus';
    } else {
      content.classList.add('active');
      content.setAttribute('aria-hidden', 'false');
      button.setAttribute('aria-expanded', 'true');
      button.textContent = 'Voir moins';
    }
  }
}

// Lazy loading pour les images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });
}