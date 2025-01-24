// Récupération des éléments du DOM
const burgerMenu = document.getElementById('burger-menu');
const mobileNav = document.getElementById('mobile-nav');

// Fonction pour ouvrir/fermer le menu mobile
function toggleMenu() {
  mobileNav.classList.toggle('show');
}

// Fermer le menu après un clic sur un lien
function closeMenu() {
  mobileNav.classList.remove('show');
}

// Écouteurs d’événements
burgerMenu.addEventListener('click', toggleMenu);


// animation GSAP pour la section Hero
window.addEventListener('load', () => {
  gsap.from(".hero-title", {
    duration: 1,
    y: 50,        // fait monter le titre de 50px
    opacity: 0,   // part d'une opacité 0
    ease: "power2.out"
  });

  gsap.from(".hero-subtitle", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,   // démarre après 0.3s
    ease: "power2.out"
  });

  gsap.from(".btn-primary", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.6, // Début de l'animation après le sous-titre
    ease: "power2.out"
  });
});


// Sélectionne toutes les cartes portant la classe "tilt-card"
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 25,            // inclinaison max en degrés
  speed: 400,         // vitesse de transition
  glare: true,        // active l'effet "lumière" (reflet)
  "max-glare": 0.2,   // intensité max du reflet
});


// Animation GSAP pour les sections Services et Réalisations
window.addEventListener('load', () => {
  // Animation pour les titres des sections Services et Réalisations
  gsap.from(".services-preview h2, .realisations-preview h2", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.2 // Animation en séquence
  });
});



// Enregistrer ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger);

// Animation pour les cartes de services
gsap.from(".services-cards .service-card", {
  scrollTrigger: {
    trigger: ".services-preview",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

// Animation pour les cartes de réalisations
gsap.from(".realisations-gallery .realisation-card", {
  scrollTrigger: {
    trigger: ".realisations-preview",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});



//----------------------------------------------
// Initialisation de Particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#C9A34E"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "##C9A34E"
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },
  "retina_detect": true
});
