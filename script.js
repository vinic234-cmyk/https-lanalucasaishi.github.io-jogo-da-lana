const frases = [
  "Lana, você é o tipo de mistério que eu quero decifrar devagarinho… 💜",
  "Tem algo em você que puxa minha atenção sem pedir permissão…",
  "Se eu pudesse escolher um lugar pra estar agora, seria perto de você.",
  "Você tem uma presença que deixa tudo mais bonito sem esforço.",
  "Lana, você é meu ponto fraco e meu canto favorito ao mesmo tempo.",
  "Tem dias que você passa na minha mente… e decide ficar.",
  "Existe poesia no jeito que você existe.",
  "Quanto mais eu conheço você, mais eu quero conhecer.",
  "Você não é só atraente… você é magnética.",
  "Lana, seu sorriso parece trapacear com o universo inteiro."
];

const emojis = ["💜", "💗", "✨", "🌙", "💞", "💖", "💘"];

document.getElementById("btnFrase").addEventListener("click", novaFrase);

function novaFrase() {
  const box = document.getElementById("fraseBox");
  const frase = frases[Math.floor(Math.random() * frases.length)];
  
  digitarTexto(box, frase, 0);

  // gerar vários emojis subindo ao clicar
  for (let i = 0; i < 8; i++) {
    criarEmoji();
  }
}

// Efeito de digitação
function digitarTexto(element, texto, i) {
  if (i === 0) element.innerHTML = "";
  if (i < texto.length) {
    element.innerHTML += texto.charAt(i);
    setTimeout(() => digitarTexto(element, texto, i + 1), 25);
  }
}

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emojiFloat");
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight - 40;

  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;

  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 2200);
}

// Corações infinitos no fundo
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💜";

  const x = Math.random() * window.innerWidth;
  const size = 16 + Math.random() * 24;

  heart.style.left = `${x}px`;
  heart.style.fontSize = `${size}px`;

  document.getElementById("heartContainer").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 350);
