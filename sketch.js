let variacaoAzul;

function setup() {
  let canvas = createCanvas(800, 784);
  canvas.position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  );
  frameRate(2);
}

function draw() {

  background(242, 240, 235);

  noStroke();

  // Tom de fundo base (Off-white / Creme envelhecido)
  background(242, 240, 235);

  noStroke();

  // --- 1. BLOCOS DE COR PRINCIPAIS ---
  // COR (X, Y, W, H)
  // Vermelho (Superior Esquerdo)
  fill(218, 35, 20);
  rect(0, 0, 364, 310);

  // zona ligeiramente mais clara
fill(235, 70, 55, 18);
rect(50, 40, 260, 180);

// zona um pouco mais escura junto à linha
fill(120, 30, 25, 10);
rect(0, 240, 364, 70);

  // Amarelo (Inferior Esquerdo)
  fill(245, 205, 10);
  rect(0, 506, 76, 278);

  // Azul (Inferior Central)
  variacaoAzul = random(-4, 4);

  fill(20, 32, 135 + variacaoAzul);
  rect(364, 506, 252, 243);

  // brilho subtil
fill(70, 85, 180, 15);
rect(390, 530, 170, 110);

// parte inferior ligeiramente mais escura
fill(10, 20, 80, 10);
rect(364, 650, 252, 99);

// --- 2. VARIÂNCIA TONAL DOS PLANOS NEUTROS (Brancos) ---
// Topo Direito
fill(245, 244, 239);
rect(360, 0, 440, 310);

// luz no canto superior esquerdo
fill(255, 255, 252, 25);
rect(360, 0, 220, 160);

// brilho secundário
fill(250, 249, 245, 15);
rect(380, 20, 260, 180);

// canto mais escuro
fill(215, 212, 205, 25);
rect(650, 0, 150, 100);

// Centro Esquerdo
fill(242, 241, 237);
rect(0, 300, 364, 206);

// luz
fill(255, 255, 250, 20);
rect(0, 300, 220, 100);

// canto mais escuro
fill(215, 212, 205, 25);
rect(0, 420, 140, 86);

// Centro Direito
fill(243, 242, 238);
rect(360, 300, 440, 206);

// luz discreta
fill(255, 255, 250, 12);
rect(360, 300, 180, 90);

// canto mais escuro
fill(215, 212, 205, 25);
rect(680, 420, 120, 86);

// Inferior Centro-Esquerdo
fill(240, 239, 235);
rect(72, 500, 292, 284);

// brilho
fill(252, 251, 248, 18);
rect(72, 500, 120, 120);

// canto mais escuro
fill(215, 212, 205, 25);
rect(250, 670, 114, 114);

// Inferior Direito
fill(243, 242, 238);
rect(609, 500, 191, 284);

// brilho
fill(255, 255, 252, 20);
rect(609, 500, 120, 140);

// canto mais escuro
fill(215, 212, 205, 25);
rect(710, 670, 90, 114);

// Faixa de rodapé sob o Azul
fill(238, 237, 233);
rect(360, 744, 252, 40);

// ligeira luminosidade na faixa
fill(255, 255, 250, 10);
rect(360, 744, 140, 40);

// --- 3. LINHAS PRETAS (Estrutura com Espessuras Diferenciadas) ---
// fill = código RGB
fill(15, 15, 15);

// Linha Horizontal Superior (MUITO GROSSA — 16px)
rect(0, 300, 800, 16);

// Linha Horizontal Inferior (GROSSA — 16px)
rect(0, 498, 800, 16);

// Linha Vertical Principal (FINA — 11px)
rect(360, 0, 11, 784);

// Linha Vertical Esquerda / Amarelo (FINA — 9px)
rect(72, 506, 9, 278);

// Linha Vertical Direita / Azul (MÉDIA — 13px)
rect(609, 506, 13, 278);

// Linha Horizontal Rodapé sob o Azul (FINA — 10px)
rect(360, 744, 262, 10);

// --- 4. TEMPERATURA DAS CORES ---
// temperatura muito suave
fill(240, 236, 230, 4);
rect(0, 0, width, height);

// luz geral
fill(255, 255, 255, 3);
rect(0, 0, width, height);

}