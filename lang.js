const translations = {
  es: {
    "nav.inicio": "Inicio",
    "nav.juegos": "Juegos",
    "nav.redes": "Redes",

    "index.title": "Blastrux – Desarrollador de Videojuegos en Godot",
    "index.description": "Blastrux es un desarrollador independiente apasionado por la creación de mundos interactivos y experiencias inmersivas. Su enfoque principal está en el motor Godot Engine, donde combina programación en GDScript con diseño visual 2D y 3D para dar vida a videojuegos únicos y dinámicos.<br><br>Con un estilo creativo y técnico a la vez, Blastrux busca equilibrar jugabilidad fluida, narrativa envolvente y diseño artístico. Ha trabajado en la construcción de sistemas de menús, físicas personalizadas, inteligencia artificial básica y mecánicas innovadoras, siempre con la meta de brindar experiencias divertidas y accesibles.<br><br>Su filosofía se basa en el aprendizaje constante, la experimentación y la exploración de nuevas ideas que desafíen los límites de los juegos indie. Blastrux no solo desarrolla videojuegos: crea universos en los que cada jugador puede vivir una aventura distinta.",

    "games.title": "Voidline Tactics - Blastrux",
    "games.soon": "Próximamente",
    "games.download_android": "Descargar (Android)",
    "games.download_pc": "Descargar (PC)",

    "social.title": "Redes Sociales de Blastrux",
    "social.description": "Sígueme en mis redes para ver más proyectos."
  },

  en: {
    "nav.inicio": "Home",
    "nav.juegos": "Games",
    "nav.redes": "Social",

    "index.title": "Blastrux – Game Developer in Godot",
    "index.description": "Blastrux is an independent developer passionate about creating interactive worlds and immersive experiences. His main focus is on the Godot Engine, where he combines GDScript programming with 2D and 3D visual design to bring unique and dynamic games to life.<br><br>With a creative and technical style, Blastrux seeks to balance smooth gameplay, engaging storytelling, and artistic design. He has worked on menu systems, custom physics, basic AI, and innovative mechanics, always aiming to provide fun and accessible experiences.<br><br>His philosophy is based on constant learning, experimentation, and exploring new ideas that challenge the limits of indie games. Blastrux not only develops games: he creates universes where each player can live a different adventure.",

    "games.title": "Voidline Tactics - Blastrux",
    "games.soon": "Coming Soon",
    "games.download_android": "Download (Android)",
    "games.download_pc": "Download (PC)",

    "social.title": "Blastrux's Social Media",
    "social.description": "Follow me on my networks to see more projects."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      if (element.querySelector("img")) {
        const img = element.querySelector("img");
        element.innerHTML = translations[lang][key] + " " + img.outerHTML;
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
    }
