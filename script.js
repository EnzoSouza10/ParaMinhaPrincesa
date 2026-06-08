const relationshipStart = new Date(2026, 5, 6, 0, 0, 0);

const planets = [
  {
    name: "Mercúrio",
    kicker: "Planeta mais próximo do Sol",
    description: "Pequeno, intenso e rápido, como aqueles segundos em que só um olhar seu muda meu dia.",
    colors: ["#b8a58f", "#72675f", "#ede0c8"],
    ring: "rgba(255, 213, 138, 0.55)",
    hasRing: false,
  },
  {
    name: "Vênus",
    kicker: "Planeta mais brilhante",
    description: "Quente e luminoso, como a forma que Maria Eduarda ilumina tudo ao redor.",
    colors: ["#f4c778", "#d98a4e", "#fff0c7"],
    ring: "rgba(255, 213, 138, 0.58)",
    hasRing: false,
  },
  {
    name: "Terra",
    kicker: "Nosso lar",
    description: "Azul, viva e bonita, porque qualquer lugar parece casa quando eu penso em você.",
    colors: ["#65d6ff", "#2f7dd8", "#65e6a6"],
    ring: "rgba(125, 216, 255, 0.58)",
    hasRing: false,
  },
  {
    name: "Marte",
    kicker: "Planeta vermelho",
    description: "Forte e corajoso, lembrando que amar você é uma aventura que eu escolheria sempre.",
    colors: ["#ff855f", "#a23d2f", "#ffd0a8"],
    ring: "rgba(255, 138, 95, 0.62)",
    hasRing: false,
  },
  {
    name: "Júpiter",
    kicker: "O gigante",
    description: "Enorme e cheio de faixas, como tudo que eu sinto por você: grande demais para caber em poucas palavras.",
    colors: ["#d7a36f", "#8d5b3d", "#fff2cf"],
    ring: "rgba(255, 213, 138, 0.62)",
    hasRing: false,
  },
  {
    name: "Saturno",
    kicker: "Planeta dos anéis",
    description: "Elegante e inesquecível, feito um detalhe seu que fica girando bonito na minha memória.",
    colors: ["#ffe0a3", "#b98f5d", "#fff5d6"],
    ring: "rgba(255, 226, 166, 0.86)",
    hasRing: true,
  },
  {
    name: "Urano",
    kicker: "Planeta azul-esverdeado",
    description: "Diferente e sereno, como a calma que você trouxe quando meu mundo estava bagunçado.",
    colors: ["#9df5ff", "#4bb3c7", "#effcff"],
    ring: "rgba(157, 245, 255, 0.62)",
    hasRing: true,
  },
  {
    name: "Netuno",
    kicker: "Planeta dos ventos",
    description: "Profundo e azul, como um céu inteiro guardando a certeza de que você é importante pra mim.",
    colors: ["#4b7dff", "#152f9b", "#9fc6ff"],
    ring: "rgba(111, 145, 255, 0.58)",
    hasRing: false,
  },
];

const cuteMessages = [
  "Você melhora meus dias.",
  "Eu quero me casar com você.",
  "Você ilumina meus dias.",
  "Quando eu pareci perdido você foi a luz na minha escuridão.",
  "Você é importante pra mim.",
];

const songs = [
  {
    title: "Here With Me",
    artist: "D4vd",
    note: "Aquela música com cara de ficar pertinho e esquecer o resto do mundo.",
    dedication: "sentimento que sinto entre nos dois e dedico pra você essa musica",
    query: "Here With Me d4vd",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    note: "Para lembrar que tem amor que parece cena bonita de filme.",
    dedication: "escuto e lembro da sua perfeição",
    query: "Perfect Ed Sheeran",
  },
  {
    title: "Lisboa",
    artist: "ANAVITÓRIA",
    note: "Leve, doce e com aquele sentimento de viagem boa a dois.",
    dedication: "primeira música que você me dedicou que eu sempre escuto",
    query: "ANAVITÓRIA Lisboa",
  },
  {
    title: "Cinnamon Girl",
    artist: "Lana Del Rey",
    note: "Delicada, intensa e cheia de sentimento guardado nas entrelinhas.",
    dedication: "You are perfect for my, my girl!",
    query: "Cinnamon Girl Lana Del Rey",
  },
];

const loveTexts = [
  {
    title: "Para quando sentir saudade",
    tag: "Saudade",
    body: "Maria Eduarda,\n\nesse espaço é para um texto seu. Quando quiser trocar, edite este conteúdo no array loveTexts dentro do script.js.\n\nAqui pode ficar uma carta sobre saudade, sobre um dia especial ou sobre qualquer coisa que você queira que ela leia no celular.",
  },
  {
    title: "Para quando precisar sorrir",
    tag: "Sorriso",
    body: "Meu amor,\n\ncoloque aqui um texto leve, daqueles que fazem ela abrir um sorriso sem perceber. Você pode escrever com calma e deixar salvo nessa aba.",
  },
  {
    title: "Para lembrar do quanto é importante",
    tag: "Importância",
    body: "Maria Eduarda,\n\neste é um lugar para dizer tudo que às vezes fica pequeno demais em uma mensagem rápida. Troque esse texto por uma declaração sua quando quiser.",
  },
];

const elements = {
  planet: document.querySelector("#planet"),
  planetRing: document.querySelector("#planet-ring"),
  planetName: document.querySelector("#planet-name"),
  planetKicker: document.querySelector("#planet-kicker"),
  planetDescription: document.querySelector("#planet-description"),
  nextPlanet: document.querySelector("#next-planet"),
  nextMessage: document.querySelector("#next-message"),
  cuteMessage: document.querySelector("#cute-message"),
  musicList: document.querySelector("#music-list"),
  textList: document.querySelector("#text-list"),
  readerCard: document.querySelector(".reader-card"),
  readerKicker: document.querySelector("#reader-kicker"),
  readerTitle: document.querySelector("#reader-title"),
  readerBody: document.querySelector("#reader-body"),
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

let activePlanet = 0;
let activeMessage = 0;
let activeText = 0;

const pad = (value) => String(value).padStart(2, "0");

function setActiveTab(tabName) {
  document.querySelectorAll(".nav-tab").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === tabName);
  });
}

function setPlanet(index) {
  const planet = planets[index];
  const [firstColor, secondColor, thirdColor] = planet.colors;

  elements.planet.classList.add("is-changing");
  document.documentElement.style.setProperty("--planet-a", firstColor);
  document.documentElement.style.setProperty("--planet-b", secondColor);
  document.documentElement.style.setProperty("--planet-c", thirdColor);
  document.documentElement.style.setProperty("--ring", planet.ring);

  elements.planetName.textContent = planet.name;
  elements.planetKicker.textContent = planet.kicker;
  elements.planetDescription.textContent = planet.description;
  elements.planetRing.classList.toggle("is-hidden", !planet.hasRing);

  window.setTimeout(() => {
    elements.planet.classList.remove("is-changing");
  }, 340);
}

function showNextPlanet() {
  activePlanet = (activePlanet + 1) % planets.length;
  setPlanet(activePlanet);
}

function showNextMessage() {
  activeMessage = (activeMessage + 1) % cuteMessages.length;
  elements.cuteMessage.classList.remove("is-changing");
  void elements.cuteMessage.offsetWidth;
  elements.cuteMessage.textContent = cuteMessages[activeMessage];
  elements.cuteMessage.classList.add("is-changing");
}

function updateLoveCounter() {
  const elapsed = Date.now() - relationshipStart.getTime();

  if (elapsed < 0) {
    elements.days.textContent = "0";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    return;
  }

  const totalSeconds = Math.floor(elapsed / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elements.days.textContent = days;
  elements.hours.textContent = pad(hours);
  elements.minutes.textContent = pad(minutes);
  elements.seconds.textContent = pad(seconds);
}

function renderSongs() {
  elements.musicList.innerHTML = songs
    .map((song, index) => {
      const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song.query)}`;

      return `
        <article class="music-card">
          <div>
            <div class="music-art" aria-hidden="true">${index + 1}</div>
            <h2>${song.title}</h2>
            <p><strong>${song.artist}</strong></p>
            <p>${song.note}</p>
            <p class="music-dedication">${song.dedication}</p>
          </div>
          <a class="music-button" href="${searchUrl}" target="_blank" rel="noopener noreferrer">
            Ouvir música
          </a>
        </article>
      `;
    })
    .join("");
}

function setText(index) {
  const text = loveTexts[index];
  activeText = index;

  elements.readerCard.classList.remove("is-changing");
  void elements.readerCard.offsetWidth;
  elements.readerKicker.textContent = text.tag;
  elements.readerTitle.textContent = text.title;
  elements.readerBody.textContent = text.body;
  elements.readerCard.classList.add("is-changing");

  document.querySelectorAll(".text-option").forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderTexts() {
  elements.textList.innerHTML = loveTexts
    .map(
      (text, index) => `
        <button class="text-option" type="button" data-text-index="${index}" aria-pressed="false">
          ${text.title}
          <span>${text.tag}</span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".text-option").forEach((button) => {
    button.addEventListener("click", () => setText(Number(button.dataset.textIndex)));
  });

  setText(activeText);
}

document.querySelectorAll(".nav-tab").forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab));
});

elements.nextPlanet.addEventListener("click", showNextPlanet);
elements.nextMessage.addEventListener("click", showNextMessage);

setPlanet(activePlanet);
renderSongs();
renderTexts();
updateLoveCounter();
setInterval(updateLoveCounter, 1000);

const canvas = document.querySelector("#sky-canvas");
const context = canvas.getContext("2d");
const meteors = [];
let lastMeteorSpawn = 0;

function resizeCanvas() {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(window.innerWidth * pixelRatio);
  canvas.height = Math.floor(window.innerHeight * pixelRatio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

class Meteor {
  constructor(delayStart = false) {
    this.reset(delayStart);
  }

  reset(delayStart = false) {
    this.x = Math.random() * window.innerWidth * 1.35 - window.innerWidth * 0.25;
    this.y = Math.random() * window.innerHeight * 0.34;
    this.speed = Math.random() * 3.6 + 3.2;
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.24;
    this.velocityX = Math.cos(this.angle) * this.speed;
    this.velocityY = Math.sin(this.angle) * this.speed;
    this.opacity = Math.random() * 0.54 + 0.28;
    this.life = 0;
    this.maxLife = Math.random() * 44 + 34;
    this.trail = [];
    this.active = !delayStart;
  }

  update() {
    if (!this.active) {
      this.active = true;
      return;
    }

    this.trail.push({ x: this.x, y: this.y });

    if (this.trail.length > 10) {
      this.trail.shift();
    }

    this.x += this.velocityX;
    this.y += this.velocityY;
    this.velocityY += 0.025;
    this.life += 1;

    if (this.life > this.maxLife || this.y > window.innerHeight || this.x > window.innerWidth) {
      this.reset();
    }
  }

  draw() {
    if (!this.active || this.trail.length < 2) {
      return;
    }

    const fade = Math.min(1, (this.maxLife - this.life) / 18);
    const headOpacity = this.opacity * fade;

    if (headOpacity <= 0) {
      return;
    }

    context.save();

    for (let index = 0; index < this.trail.length - 1; index += 1) {
      const progress = index / (this.trail.length - 1);
      const alpha = headOpacity * progress * 0.78;

      context.beginPath();
      context.moveTo(this.trail[index].x, this.trail[index].y);
      context.lineTo(this.trail[index + 1].x, this.trail[index + 1].y);
      context.strokeStyle = `rgba(255, 248, 235, ${alpha})`;
      context.lineWidth = (1 - progress) * 2.2 + 0.7;
      context.stroke();
    }

    const head = this.trail[this.trail.length - 1];
    const glow = context.createRadialGradient(head.x, head.y, 0, head.x, head.y, 11);
    glow.addColorStop(0, `rgba(255, 255, 255, ${headOpacity})`);
    glow.addColorStop(0.34, `rgba(125, 216, 255, ${headOpacity * 0.32})`);
    glow.addColorStop(1, "rgba(125, 216, 255, 0)");

    context.fillStyle = glow;
    context.beginPath();
    context.arc(head.x, head.y, 11, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }
}

function seedMeteors() {
  meteors.length = 0;
  const count = window.innerWidth < 520 ? 4 : 6;

  for (let index = 0; index < count; index += 1) {
    meteors.push(new Meteor(true));
  }
}

function spawnMeteorBurst() {
  const now = Date.now();
  const nextDelay = window.innerWidth < 520 ? 2500 + Math.random() * 4200 : 1700 + Math.random() * 3300;

  if (now - lastMeteorSpawn < nextDelay) {
    return;
  }

  const burstSize = Math.floor(Math.random() * 2) + 1;

  for (let index = 0; index < burstSize; index += 1) {
    meteors.push(new Meteor());
  }

  while (meteors.length > 15) {
    meteors.shift();
  }

  lastMeteorSpawn = now;
}

function animateSky() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  spawnMeteorBurst();

  meteors.forEach((meteor) => {
    meteor.update();
    meteor.draw();
  });

  requestAnimationFrame(animateSky);
}

resizeCanvas();
seedMeteors();
animateSky();

window.addEventListener("resize", () => {
  resizeCanvas();
  seedMeteors();
});
