function toggle(id) {
  const e = document.getElementById(id);
  e.style.display = e.style.display === 'block' ? 'none' : 'block';
}

const qs = [
  {
    q: "Si A es verdadera y B es falsa, ¿qué resultado da A AND B?",
    a: ["Verdadero", "Falso", "No se puede saber"],
    c: 1,
    why: "AND requiere que las dos proposiciones sean verdaderas."
  },
  {
    q: "¿Cuál es la intersección de A={1,2,3} y B={3,4,5}?",
    a: ["{1,2,3,4,5}", "{3}", "{1,2}"],
    c: 1,
    why: "La intersección contiene los elementos que comparten ambos conjuntos."
  },
  {
    q: "¿Cuánto vale 110 en el sistema decimal?",
    a: ["4", "5", "6"],
    c: 2,
    why: "1×4 + 1×2 + 0×1 = 6."
  },
  {
    q: "¿Cuántos bits equivalen a 3 bytes?",
    a: ["8", "16", "24"],
    c: 2,
    why: "Cada byte contiene 8 bits; 3×8 = 24."
  },
  {
    q: "A=[2,4,6] y B=[1,3,5]. ¿Cuál es A+B?",
    a: ["[3,7,11]", "[2,12,30]", "[1,1,1]"],
    c: 0,
    why: "Se suman los elementos que están en la misma posición."
  },
  {
    q: "En Python, si numero=8 y la condición es numero > 5, ¿qué se imprime?",
    a: ["Menor", "Mayor", "Nada"],
    c: 1,
    why: "La condición es verdadera porque 8 es mayor que 5."
  },
  {
    q: "Si A y B tienen 2 elementos cada uno, ¿cuántos pares tiene A×B?",
    a: ["2", "4", "8"],
    c: 1,
    why: "La cantidad de pares es 2×2 = 4."
  },
  {
    q: "Una matriz con 3 filas y 3 columnas es…",
    a: ["Rectangular", "De orden 2", "Cuadrada de orden 3"],
    c: 2,
    why: "Tiene igual cantidad de filas y columnas: 3."
  }
];

let idx = 0, score = 0, answered = false;

function render() {
  let q = qs[idx];
  document.getElementById('progress').textContent = `Pregunta ${idx + 1} de ${qs.length}`;
  document.getElementById('score').textContent = score;
  document.getElementById('question').textContent = q.q;
  document.getElementById('feedback').textContent = '';
  document.getElementById('next').disabled = true;
  document.getElementById('next').textContent = idx === qs.length - 1 ? 'Ver resultado' : 'Siguiente';
  answered = false;

  let box = document.getElementById('answers');
  box.innerHTML = '';
  q.a.forEach((v, i) => {
    let b = document.createElement('button');
    b.textContent = v;
    b.onclick = () => choose(i);
    box.appendChild(b);
  });
}

function choose(n) {
  if (answered) return;
  answered = true;
  let q = qs[idx], buttons = [...document.querySelectorAll('#answers button')];
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.c) b.style.borderColor = '#70e1c1';
    if (i === n && n !== q.c) b.style.borderColor = '#ff9b9b';
  });

  if (n === q.c) {
    score++;
    document.getElementById('feedback').textContent = '¡Correcto! ' + q.why;
  } else {
    document.getElementById('feedback').textContent = 'No es correcto. ' + q.why;
  }

  document.getElementById('score').textContent = score;
  document.getElementById('next').disabled = false;
}

function nextQuestion() {
  if (!answered) return;
  if (idx < qs.length - 1) {
    idx++;
    render();
  } else {
    document.getElementById('question').textContent = `¡Juego terminado! Tu puntaje fue ${score} de ${qs.length}.`;
    document.getElementById('answers').innerHTML = '';
    document.getElementById('feedback').textContent = score >= 6
      ? '¡Muy bien! Tenés los temas bastante claros.'
      : '¡Buen intento! Repasá los temas y volvé a jugar.';
    document.getElementById('next').disabled = true;
    document.getElementById('progress').textContent = 'Resultado final';
  }
}

function restart() {
  idx = 0;
  score = 0;
  render();
}

render();
