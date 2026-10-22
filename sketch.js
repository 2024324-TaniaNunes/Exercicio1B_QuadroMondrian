// --- PARTE B: parâmetros da desestabilização ---
let fase;              // fase aleatória (único uso de random)
const VELOCIDADE = 0.004;   // quão lento é o movimento
const DESLOC_MAX = 6;       // deslocamento máximo do azul (px)
const OSC_COR = 22;         // amplitude da oscilação de cor

function setup() {
  let canvas = createCanvas(800, 784);
  canvas.position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  );

  // random() usado uma só vez: dá a cada execução um "temperamento" próprio
  fase = random(1000);
}

function draw() {
  desenharQuadroBase();
  desenharAzulVivo();
  desenharLinhasPretas();
  desenharTemperatura();
}

// ------------------------------------------------------------
// ELEMENTO GENERATIVO: o bloco azul que respira
// ------------------------------------------------------------
function desenharAzulVivo() {
  let t = frameCount * VELOCIDADE + fase;

  // noise() devolve 0..1 de forma suave -> mapeado para -1..1
  let n1 = noise(t) * 2 - 1;
  let n2 = noise(t + 100) * 2 - 1;
  let n3 = noise(t + 200) * 2 - 1;

  // deslocamento lento do bloco
  let dx = n1 * DESLOC_MAX;
  let dy = n2 * DESLOC_MAX * 0.6;

  // oscilação de cor quase imperceptível
  let r = 20 + n3 * OSC_COR * 0.4;
  let g = 32 + n3 * OSC_COR * 0.7;
  let b = 135 + n3 * OSC_COR;

  noStroke();

  // cobre o azul original (um pouco maior para não deixar rasto)
  fill(242, 240, 235);
  rect(364 - DESLOC_MAX, 506 - DESLOC_MAX, 252 + DESLOC_MAX * 2, 243 + DESLOC_MAX * 2);

  // bloco azul deslocado
  fill(r, g, b);
  rect(364 + dx, 506 + dy, 252, 243);

  // brilho subtil acompanha o bloco
  fill(70, 85, 180, 15);
  rect(390 + dx, 530 + dy, 170, 110);

  // parte inferior mais escura acompanha o bloco
  fill(10, 20, 80, 10);
  rect(364 + dx, 650 + dy, 252, 99);
}

// ------------------------------------------------------------
// QUADRO BASE (sem o azul, que passa a ser dinâmico)
// ------------------------------------------------------------
function desenharQuadroBase() {
  background(242, 240, 235);
  noStroke();

  // --- 1. BLOCOS DE COR PRINCIPAIS ---
  // Vermelho (Superior Esquerdo)
  fill(218, 35, 20);
  rect(0, 0, 364, 310);

  fill(235, 70, 55, 18);
  rect(50, 40, 260, 180);

  fill(120, 30, 25, 10);
  rect(0, 240, 364, 70);

  // Amarelo (Inferior Esquerdo)
  fill(245, 205, 10);
  rect(0, 506, 76, 278);

  // --- 2. VARIÂNCIA TONAL DOS PLANOS NEUTROS ---
  // Topo Direito
  fill(245, 244, 239);
  rect(360, 0, 440, 310);
  fill(255, 255, 252, 25);
  rect(360, 0, 220, 160);
  fill(250, 249, 245, 15);
  rect(380, 20, 260, 180);
  fill(215, 212, 205, 25);
  rect(650, 0, 150, 100);

  // Centro Esquerdo
  fill(242, 241, 237);
  rect(0, 300, 364, 206);
  fill(255, 255, 250, 20);
  rect(0, 300, 220, 100);
  fill(215, 212, 205, 25);
  rect(0, 420, 140, 86);

  // Centro Direito
  fill(243, 242, 238);
  rect(360, 300, 440, 206);
  fill(255, 255, 250, 12);
  rect(360, 300, 180, 90);
  fill(215, 212, 205, 25);
  rect(680, 420, 120, 86);

  // Inferior Centro-Esquerdo
  fill(240, 239, 235);
  rect(72, 500, 292, 284);
  fill(252, 251, 248, 18);
  rect(72, 500, 120, 120);
  fill(215, 212, 205, 25);
  rect(250, 670, 114, 114);

  // Inferior Direito
  fill(243, 242, 238);
  rect(609, 500, 191, 284);
  fill(255, 255, 252, 20);
  rect(609, 500, 120, 140);
  fill(215, 212, 205, 25);
  rect(710, 670, 90, 114);

  // Faixa de rodapé sob o Azul
  fill(238, 237, 233);
  rect(360, 744, 252, 40);
  fill(255, 255, 250, 10);
  rect(360, 744, 140, 40);
}

// ------------------------------------------------------------
// LINHAS PRETAS (rígidas, por cima de tudo)
// ------------------------------------------------------------
function desenharLinhasPretas() {
  noStroke();
  fill(15, 15, 15);

  rect(0, 300, 800, 16);     // Horizontal superior
  rect(0, 498, 800, 16);     // Horizontal inferior
  rect(360, 0, 11, 784);     // Vertical principal
  rect(72, 506, 9, 278);     // Vertical esquerda / amarelo
  rect(609, 506, 13, 278);   // Vertical direita / azul
  rect(360, 744, 262, 10);   // Horizontal rodapé
}

// ------------------------------------------------------------
// TEMPERATURA GERAL
// ------------------------------------------------------------
function desenharTemperatura() {
  noStroke();
  fill(240, 236, 230, 4);
  rect(0, 0, width, height);
  fill(255, 255, 255, 3);
  rect(0, 0, width, height);
}