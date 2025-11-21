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
  "Lana, seu sorriso parece trapacear com o universo inteiro.",
  
  "Eu gosto do jeito que você existe… parece que foi moldada no detalhe.",
  "Tem algo em você que não passa… fica, cresce, ecoa.",
  "Você não é só bonita… você tem presença, é diferente.",
  "Tem pessoas que a gente olha… você é daquelas que a gente sente.",
  "Sua energia puxa, prende, envolve… e nem tenta.",
  "Eu nunca precisei de sorte, só precisei de você cruzando meu caminho.",
  "Você tem um charme silencioso que fala muito alto.",
  "Se eu pudesse escolher um vício… escolheria você.",
  "É louco como você faz falta até quando ainda nem foi embora.",
  "Você tem um jeito de me desorganizar por dentro e eu adoro.",
  "Tem beleza que grita… a sua sussurra e ainda assim domina tudo.",
  "Você é o tipo de caos que eu deixo bagunçar minha alma.",
  "Existe poesia na forma que você olha o mundo.",
  "Você tem um poder estranho… e eu quero ser sua vítima.",
  "Você não me atravessa… você me invade.",
  "Seu sorriso é tipo porta aberta pra perdição.",
  "Tem dias que sua presença pesa… no melhor sentido possível.",
  "Você é a parte do universo que decidiu ser bonita demais.",
  "Se eu tivesse que te descrever… eu não descreveria. Eu te sentiria.",
  "Você tem um charme imprevisível… tipo tempestade bonita.",
  "Você não só entra na cabeça… você faz morada.",
  "Eu olho pra você e o mundo parece mal renderizado.",
  "Se existir reencarnação, quero tropeçar em você de novo.",
  "Seu jeito tem um magnetismo que não respeita lógica.",
  "Você tem cara de calma… e alma de furacão.",
  "Você carrega uma intensidade que queima devagar.",
  "Você tem aquela beleza que não pede atenção — toma.",
  "Se eu te olhar por muito tempo… me apaixono. Fácil.",
  "Você é o tipo de pessoa que muda o clima do lugar.",
  "Quanto mais eu te descubro, mais eu quero me perder.",
  "Você é mistério com perfume de perigo bom.",
  "Tem pessoas que brilham… você ilumina.",
  "Seu nome encaixa bem demais nas minhas vontades.",
  "Você é aquele detalhe que deixou de ser detalhe.",
  "Tem algo em você que conversa com o que há de mais vivo em mim.",
  "Meu peito entende você antes da minha cabeça.",
  "Você tem aquela vibe rara… de quem não sabe o próprio impacto.",
  "Quando você aparece, até o silêncio fica interessante.",
  "Você tem um charme que desfaz qualquer armadura minha.",
  "Se você soubesse o efeito que causa em mim… talvez abusasse mais.",
  "Tem dias que eu só queria te roubar por umas horas.",
  "Você carrega uma beleza que parece proibida.",
  "Seu olhar tem aquela pausa dramática que me desmonta.",
  "Você é calmaria e fogo na mesma frequência.",
  "Eu gosto do que você faz comigo sem nem perceber.",
  "Você é a parte bonita de qualquer cenário.",
  "Quanto mais eu te vejo, mais sentido tudo faz.",
  "Você tem um tipo de presença que deveria ser estudada.",
  "Se eu pudesse escolher um destino… escolheria o seu caminho.",
  "Você não é só alguém… é impacto."
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
