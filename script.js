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

const deliveredMessages = [
  {
    label: "💖 1",
    text: "Em um universo com bilhões de estrelas, bilhões de pessoas e infinitas possibilidades, ainda acho incrível que o meu caminho tenha encontrado o seu.",
  },
  {
    label: "🌙 2",
    text: "Você não mudou apenas os meus dias. Você mudou a forma como eu enxergo o mundo, porque agora tudo parece mais bonito quando imagino você fazendo parte disso.",
  },
  {
    label: "✨ 3",
    text: "Se eu pudesse escolher novamente entre todas as pessoas do universo, em todas as vidas possíveis, eu continuaria escolhendo você.",
  },
  {
    label: "🌹 4",
    text: "Amar você não é apenas um sentimento. É uma decisão que faço todos os dias e que, curiosamente, se torna mais fácil a cada amanhecer.",
  },
  {
    label: "⭐ 5",
    text: "Meu lugar favorito nunca foi uma cidade, uma praia ou uma paisagem. Meu lugar favorito é qualquer lugar onde você esteja.",
  },
  {
    label: "💫 6",
    text: "Antes de você, eu contava os dias. Depois de você, comecei a colecionar memórias.",
  },
  {
    label: "🌌 7",
    text: "Talvez eu não consiga prometer uma vida perfeita, mas prometo que em cada desafio, em cada vitória e em cada sonho, você terá minha mão segurando a sua.",
  },
  {
    label: "💞 8",
    text: "Você é a calma que encontrei em meio ao caos e a certeza que encontrei em meio às dúvidas.",
  },
  {
    label: "🪐 9",
    text: "Quando penso no futuro, não imagino riquezas ou conquistas. Imagino você ao meu lado, e isso já me parece suficiente.",
  },
  {
    label: "❤️ 10",
    text: "Existem sentimentos que não cabem em palavras. O amor que sinto por você é um deles, mas ainda assim passo todos os dias tentando demonstrá-lo.",
  },
  {
    label: "🌠 11",
    text: "Você se tornou parte das minhas orações, dos meus planos, dos meus pensamentos e dos meus melhores sonhos.",
  },
  {
    label: "💌 12",
    text: "Se um dia eu me perder, sei que encontrarei o caminho de volta apenas seguindo a luz que existe no seu sorriso.",
  },
  {
    label: "🌙 13",
    text: "Obrigado por existir exatamente como você é. Com suas qualidades, seus defeitos, seus medos e seus sonhos. É essa pessoa inteira que eu amo.",
  },
  {
    label: "✨ 14",
    text: "Você é a prova de que algumas pessoas entram em nossas vidas e transformam tudo sem precisar mudar nada.",
  },
  {
    label: "💖 15",
    text: "Não importa quanto tempo passe. Sempre haverá uma parte de mim que ficará admirando você como se fosse a primeira vez.",
  },
];

const songs = [
  {
    title: "Here With Me",
    artist: "D4vd",
    note: "Aquela música com cara de ficar pertinho e esquecer o resto do mundo.",
    dedication: "sentimento que sinto entre nos dois e dedico pra você essa musica",
    query: "Here With Me d4vd",
    cover: "Musicas_imagens/Here_with_me.jpg",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    note: "Para lembrar que tem amor que parece cena bonita de filme.",
    dedication: "escuto e lembro da sua perfeição",
    query: "Perfect Ed Sheeran",
    cover: "Musicas_imagens/Perfect.jpg",
  },
  {
    title: "Lisboa",
    artist: "ANAVITÓRIA",
    note: "Leve, doce e com aquele sentimento de viagem boa a dois.",
    dedication: "primeira música que você me dedicou que eu sempre escuto",
    query: "ANAVITÓRIA Lisboa",
    cover: "Musicas_imagens/Lisboa.jpg",
  },
  {
    title: "Cinnamon Girl",
    artist: "Lana Del Rey",
    note: "Delicada, intensa e cheia de sentimento guardado nas entrelinhas.",
    dedication: "You are perfect for my, my girl!",
    query: "Cinnamon Girl Lana Del Rey",
    cover: "Musicas_imagens/Cinnamon_girl.jpg",
  },
];

const loveTexts = [
  {
    title: "Dia 1",
    tag: "Primeiro dia",
    body: "Dia 1 sem falar com o amor da minha vida, passei o dia inteiro sem ela, sem dúvidas foi um dia ruim, mas eu sei que vão melhorar pq ela vai estar bem e feliz eu sei pq eu confio nela, hoje foi um grande dia de trabalho, trabalhei bastante, fiquei longe do EB e me mantive focado em programar pra ela esse belo site, eu passei o dia pensando em você, se estava bem, foi o primeiro dia que nos falamos tão pouco, mas eu não parei de republicar vídeos que eu via e pensava em vc, passei o dia também me imaginando como vai ser quando eu te ver, estou me esforçando o dobro para ganhar dinheiro e juntar para um dia te ver, ver seus olhos, seu rosto, tudo de perto, e eu vou lutar por isso, assim como luto por nós todos os dias, você é a mulher da minha vida isso não tenho dúvidas, vc disse que eu não dormiria hoje na escola e foi isso mesmo, não consegui nem fechar o olho, nem ficar bem no intervalo, passei todos os momentos do meu dia pensando na pessoa mais importante do mundo pra mim, uma Maria Eduarda Marinho, ela é educada, me entende, é perfeita em todos os aspectos e sabe jogar Roblox, tive a ideia de fazer um site pq é meu primeiro presente de mês de namoro e queria que fosse especial, espero que ela não chore vendo isso, pq eu me esforcei, me esforcei muito pra não escrever todos os textos em um dia, eu acabo percebendo que eu quero ela de uma forma absurda, não tenho inseguranças, não sou triste quando estou com ela, meu dia só melhora quando falo e converso muito com ela, ela disse que eu tinha que escolher como gosto de ser chamado, eu gosto quando ela me chama de amor, mas imagina ela me chamando de príncipe? Eu sou o príncipe dela e ela minha princesa, vou lutar por ela até o último dia da minha vida, até que minha última gota de sangue pingue, até o último ar que eu respire, estarei esperando por isso, estarei lutando e fazendo ela feliz em cada dia da minha vida estarei cuidando dela sempre, eu a amo e disso não tenho dúvidas nenhuma. Sou muito grato por ter conhecido ela, pode ter sido tudo muito rápido, e eu sou feliz, pq foi com ela, eu a amo sem dúvidas, eu te amo com a alma minha Maria!",
  },
  {
    title: "Para quando se sentir desmotivada",
    tag: "Motivação",
    body: "Quando pensar em mim, pense sem medo, pois sou um garoto que te ama como você é, que ama seu cabelo, seus olhos, seu sorriso, seu rosto, sua cintura, sua marquinha, que ama você por completo sem distinção e, claro, amo mais ainda sua personalidade. Uma mulher incrível e maravilhosa que demonstra muita coisa linda e bela todos os dias, mostra que ama, mostra que é incrível.\n\nVocê sem dúvidas é uma mulher esforçada e incrível. Você não tem erros, mas sim é o significado de perfeição. Todos os seus bom dias e boa noites salvam meu dia. Quando você fala comigo, você me salva de mim mesmo. Sou grato por ter conhecido uma mulher tão incrível, maravilhosa e especial como você. Nunca vou me arrepender de ter te pedido em namoro.\n\nVocê é perfeita, e todos os dias demonstra do seu jeito que é perfeita e maravilhosa como é. Sem dúvidas eu quero te ver ganhar o mundo, minha princesa. Você tem total lugar no meu coração, e eu te amo demais. Não sei descrever o quanto.",
  },
  {
    title: "Para lembrar do quanto é importante",
    tag: "Importância",
    body: "Maria Eduarda,\n\neste é um lugar para dizer tudo que às vezes fica pequeno demais em uma mensagem rápida. Troque esse texto por uma declaração sua quando quiser.",
  },
];

const photos = [
  {
    rank: "Top 3",
    title: "Assinatura",
    caption: "o autografo de uma princesa, que sempre esteve guardado e tenho orgulho de ter...",
    src: "Fotos/Assinatura.jpeg",
  },
  {
    rank: "Top 2",
    title: "Perfil",
    caption: "mal sabia ele que o perfil do amor da vida dele era aquele, daquela menina do CLEA e do roblox...",
    src: "Fotos/Perfil.jpeg",
  },
  {
    rank: "Top 1",
    title: "Foto chamada juntos",
    caption: "primeira vez que estive junto com você e tiramos uma foto juntos, você tinha saído e não deu pra tirar foto do STM, eu fiquei triste, mas fiquei muito feliz em tirar essa foto com você, porque era com você, uma mulher que se tornou o amor da minha vida...",
    src: "Fotos/Juntos.jpeg",
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
  messageIcon: document.querySelector("#message-icon"),
  rareStar: document.querySelector("#rare-star"),
  rareStarOverlay: document.querySelector("#rare-star-overlay"),
  rareStarClose: document.querySelector("#rare-star-close"),
  musicList: document.querySelector("#music-list"),
  photoBoard: document.querySelector("#photo-board"),
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

let activePlanet = 4;
let activeMessage = 0;
let activeText = 0;

const pad = (value) => String(value).padStart(2, "0");
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isSmallScreen = () => window.innerWidth < 620;

document.body.dataset.activeTab = "planets";

function handleMissingImage(event) {
  const image = event.target;

  if (!(image instanceof HTMLImageElement)) {
    return;
  }

  const photoCard = image.closest(".photo-card");

  if (photoCard) {
    const placeholder = document.createElement("div");
    const cardNumber = photoCard.className.match(/photo-card-(\d+)/)?.[1] || "";

    placeholder.className = "photo-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.textContent = cardNumber;
    image.replaceWith(placeholder);
    photoCard.classList.add("is-empty");
    return;
  }

  image.remove();
}

document.addEventListener("error", handleMissingImage, true);

function getHeaderOffset() {
  const header = document.querySelector(".site-header");
  return header ? header.getBoundingClientRect().height + 12 : 0;
}

function scrollPanelIntoView(tabName, activeButton) {
  const panel = document.querySelector(`#${tabName}`);

  if (!panel) {
    return;
  }

  const behavior = prefersReducedMotion() ? "auto" : "smooth";

  activeButton?.scrollIntoView({ behavior, block: "nearest", inline: "center" });

  const panelTop = panel.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

  window.scrollTo({
    top: Math.max(0, panelTop),
    behavior,
  });
}

function setActiveTab(tabName, shouldScroll = false) {
  document.body.dataset.activeTab = tabName;
  let activeButton = null;

  document.querySelectorAll(".nav-tab").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");

    if (isActive) {
      activeButton = button;
    }
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === tabName);
  });

  if (!shouldScroll) {
    return;
  }

  window.requestAnimationFrame(() => {
    scrollPanelIntoView(tabName, activeButton);
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
  activeMessage = (activeMessage + 1) % deliveredMessages.length;
  setDeliveredMessage(activeMessage);
}

function setDeliveredMessage(index) {
  const message = deliveredMessages[index];

  elements.cuteMessage.classList.remove("is-changing");
  void elements.cuteMessage.offsetWidth;
  elements.messageIcon.textContent = message.label;
  elements.cuteMessage.textContent = message.text;
  elements.cuteMessage.classList.add("is-changing");
}

function openRareStar() {
  elements.rareStarOverlay.classList.add("is-open");
  elements.rareStarOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("rare-star-open");
}

function closeRareStar() {
  elements.rareStarOverlay.classList.remove("is-open");
  elements.rareStarOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("rare-star-open");
}

function revealRareStar() {
  const delay = prefersReducedMotion() ? 900 : 3200;

  window.setTimeout(() => {
    elements.rareStar.classList.add("is-visible");
  }, delay);
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
          <div class="music-cover-wrap">
            <img class="music-cover" src="${song.cover}" alt="Capa de ${song.title}" loading="lazy">
            <span class="music-number" aria-hidden="true">${index + 1}</span>
          </div>
          <div class="music-content">
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

function renderPhotos() {
  elements.photoBoard.innerHTML = photos
    .map((photo, index) => {
      const hasImage = Boolean(photo.src);

      return `
        <article class="photo-card photo-card-${index + 1} ${hasImage ? "" : "is-empty"}">
          <span class="photo-rank">${photo.rank}</span>
          ${
            hasImage
              ? `<img src="${photo.src}" alt="${photo.title}" loading="lazy">`
              : `<div class="photo-placeholder" aria-hidden="true">${index + 1}</div>`
          }
          <div class="photo-caption">
            <span>${photo.title}</span>
            <p>${photo.caption}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

function setText(index, shouldScroll = false) {
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

  if (shouldScroll && isSmallScreen()) {
    window.requestAnimationFrame(() => {
      const behavior = prefersReducedMotion() ? "auto" : "smooth";
      const readerTop = elements.readerCard.getBoundingClientRect().top + window.scrollY - getHeaderOffset();

      window.scrollTo({
        top: Math.max(0, readerTop),
        behavior,
      });
    });
  }
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
    button.addEventListener("click", () => setText(Number(button.dataset.textIndex), true));
  });

  setText(activeText);
}

document.querySelectorAll(".nav-tab").forEach((button) => {
  button.addEventListener("click", () => setActiveTab(button.dataset.tab, true));
});

elements.nextPlanet.addEventListener("click", showNextPlanet);
elements.nextMessage.addEventListener("click", showNextMessage);
elements.rareStar.addEventListener("click", openRareStar);
elements.rareStarClose.addEventListener("click", closeRareStar);
elements.rareStarOverlay.addEventListener("click", (event) => {
  if (event.target === elements.rareStarOverlay) {
    closeRareStar();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.rareStarOverlay.classList.contains("is-open")) {
    closeRareStar();
  }
});

setPlanet(activePlanet);
setDeliveredMessage(activeMessage);
renderSongs();
renderPhotos();
renderTexts();
updateLoveCounter();
setInterval(updateLoveCounter, 1000);
revealRareStar();

const canvas = document.querySelector("#sky-canvas");
const context = canvas.getContext("2d");
const meteors = [];
let lastMeteorSpawn = 0;
let lastFrameTime = 0;
let skyPaused = false;
let resizeTimer = 0;

function resizeCanvas() {
  const pixelRatio = isSmallScreen() ? 1 : Math.min(window.devicePixelRatio || 1, 1.6);

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
    this.speed = Math.random() * (isSmallScreen() ? 2.4 : 3.6) + (isSmallScreen() ? 2.4 : 3.2);
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.24;
    this.velocityX = Math.cos(this.angle) * this.speed;
    this.velocityY = Math.sin(this.angle) * this.speed;
    this.opacity = Math.random() * 0.54 + 0.28;
    this.life = 0;
    this.maxLife = Math.random() * (isSmallScreen() ? 28 : 44) + (isSmallScreen() ? 28 : 34);
    this.trail = [];
    this.active = !delayStart;
  }

  update() {
    if (!this.active) {
      this.active = true;
      return;
    }

    this.trail.push({ x: this.x, y: this.y });

    const maxTrail = isSmallScreen() ? 6 : 10;

    if (this.trail.length > maxTrail) {
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
    glow.addColorStop(0.34, `rgba(125, 216, 255, ${headOpacity * 0.28})`);
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
  const count = isSmallScreen() ? 2 : 6;

  for (let index = 0; index < count; index += 1) {
    meteors.push(new Meteor(true));
  }
}

function spawnMeteorBurst() {
  const now = Date.now();
  const nextDelay = isSmallScreen() ? 3600 + Math.random() * 5200 : 1700 + Math.random() * 3300;

  if (now - lastMeteorSpawn < nextDelay) {
    return;
  }

  const burstSize = Math.floor(Math.random() * 2) + 1;

  for (let index = 0; index < burstSize; index += 1) {
    meteors.push(new Meteor());
  }

  const maxMeteors = isSmallScreen() ? 5 : 15;

  while (meteors.length > maxMeteors) {
    meteors.shift();
  }

  lastMeteorSpawn = now;
}

function animateSky(timestamp = 0) {
  if (skyPaused) {
    requestAnimationFrame(animateSky);
    return;
  }

  const targetFrame = isSmallScreen() ? 48 : 16;

  if (timestamp - lastFrameTime < targetFrame) {
    requestAnimationFrame(animateSky);
    return;
  }

  lastFrameTime = timestamp;
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
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    resizeCanvas();
    seedMeteors();
  }, 120);
});

window.addEventListener("orientationchange", () => {
  window.setTimeout(() => {
    window.scrollTo({ top: window.scrollY, behavior: "auto" });
    resizeCanvas();
    seedMeteors();
  }, 220);
});

window.addEventListener("pageshow", () => {
  resizeCanvas();
  seedMeteors();
});

document.addEventListener("visibilitychange", () => {
  skyPaused = document.hidden;
});
