<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lógica Matemática | 4.º C</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <div class="brand">∑ LÓGICA MATEMÁTICA</div>
      <div>
        <a href="#inicio">Inicio</a>　
        <a href="#contenidos">Contenidos</a>　
        <a href="#juego">Minijuego</a>　
        <a href="#proyecto">Proyecto</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="eyebrow">MATEMÁTICA · INFORMÁTICA · PENSAMIENTO LÓGICO</div>
      <h1>Descubrí el poder de la Lógica Matemática</h1>
      <p>Un recorrido para repasar ideas fundamentales de lógica, conjuntos, sistemas numéricos, información digital y programación, con ejemplos y un desafío interactivo.</p>
      <a class="cta" href="#contenidos">Explorar contenidos ↓</a>
    </section>

    <section id="contenidos">
      <div class="section-title">
        <div class="eyebrow">APRENDIZAJE</div>
        <h2>Contenidos del año</h2>
        <p>Elegí un tema, leé su explicación y revisá el ejemplo.</p>
      </div>

      <div class="cards">
        <article class="card">
          <div class="num">01 · LÓGICA</div>
          <h3>Lógica proposicional</h3>
          <p>Estudia enunciados que pueden tomar uno de dos valores: verdadero o falso.</p>
          <ul>
            <li><b>AND (∧):</b> da verdadero cuando las dos proposiciones son verdaderas.</li>
            <li><b>OR (∨):</b> alcanza con que una sea verdadera.</li>
            <li><b>NOT (¬):</b> cambia verdadero por falso y viceversa.</li>
          </ul>
          <div class="example">Ejemplo: “Está nublado Y hace frío” solo es verdadero si se cumplen ambas partes.</div>
          <div class="challenge">
            <b>Poné a prueba tu lógica</b>
            <p>Si A es verdadera y B es falsa, ¿cuánto vale A AND B?</p>
            <button class="smallbtn" onclick="toggle('a1')">Ver respuesta</button>
            <div class="answer" id="a1">Falso: la operación AND exige que ambas sean verdaderas.</div>
          </div>
        </article>

        <article class="card">
          <div class="num">02 · CONJUNTOS</div>
          <h3>Conjuntos y leyes de De Morgan</h3>
          <p>Un conjunto reúne elementos y suele escribirse entre llaves.</p>
          <div class="example">A = {1, 2, 3}　 B = {3, 4, 5}<br>Unión: A ∪ B = {1, 2, 3, 4, 5}<br>Intersección: A ∩ B = {3}<br>Diferencia A − B = {1, 2}</div>
          <p>Las leyes de De Morgan relacionan el complemento de una unión con la intersección de los complementos, y el complemento de una intersección con la unión de los complementos.</p>
          <div class="challenge">
            <b>Comprobá</b>
            <p>¿Qué elemento comparten A y B?</p>
            <button class="smallbtn" onclick="toggle('a2')">Ver respuesta</button>
            <div class="answer" id="a2">El número 3; por eso A ∩ B = {3}.</div>
          </div>
        </article>

        <article class="card">
          <div class="num">03 · NUMERACIÓN</div>
          <h3>Sistemas decimal y binario</h3>
          <p>El sistema decimal usa diez dígitos (del 0 al 9). El binario trabaja únicamente con 0 y 1.</p>
          <div class="example">El binario 101 equivale a 5 en decimal.<br>En binario: 10 + 01 = 11.</div>
          <p>En una conversión a decimal, cada posición binaria representa una potencia de 2.</p>
          <div class="challenge">
            <b>Desafío binario</b>
            <p>¿A qué número decimal equivale 110?</p>
            <button class="smallbtn" onclick="toggle('a3')">Ver respuesta</button>
            <div class="answer" id="a3">6, porque 1×4 + 1×2 + 0×1 = 6.</div>
          </div>
        </article>

        <article class="card">
          <div class="num">04 · INFORMACIÓN</div>
          <h3>Medición de información</h3>
          <p>Los datos digitales se miden con unidades
