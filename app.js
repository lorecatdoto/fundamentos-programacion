const lessons = [
  {
    title: "Lógica de programación",
    icon: "✳",
    desc: "Piensa como programador y divide un problema.",
    intro:
      "Antes de escribir código, aprende a organizar una solución en pasos claros.",
    body: "La lógica de programación consiste en ordenar instrucciones y decisiones para resolver un problema. Una forma útil de comenzar es identificar las entradas, el proceso y la salida. Para calcular un promedio, las entradas son las notas; el proceso es sumarlas y dividir entre su cantidad; la salida es el promedio.",
    tip: "Descompón un problema grande en partes pequeñas. Prueba también los casos límite: ¿qué sucede si no hay notas?",
    code: [
      "notas = [8, 6, 10]\npromedio = sum(notas) / len(notas)\nprint(promedio)",
      "int suma = 8 + 6 + 10;\ndouble promedio = suma / 3.0;\nSystem.out.println(promedio);",
      "suma := 8.0 + 6.0 + 10.0\npromedio := suma / 3\nfmt.Println(promedio)",
    ],
    q: "¿Qué representa la salida de un algoritmo de promedio?",
    options: [
      "Las notas originales",
      "El resultado calculado",
      "La cantidad de instrucciones",
    ],
    answer: 1,
    explain: "La salida es el resultado que produce el proceso: el promedio.",
  },
  {
    title: "Programas y áreas",
    icon: "▧",
    desc: "Qué es programar y dónde se aplica.",
    intro: "Un programa convierte instrucciones y datos en un resultado útil.",
    body: "Programar es expresar una solución en un lenguaje formal, probarla y corregirla. Un error de sintaxis impide entender el código; uno de ejecución aparece mientras corre; uno lógico produce un resultado incorrecto. Frontend, backend, móvil, datos, videojuegos y sistemas comparten estos fundamentos.",
    tip: "No necesitas elegir una especialidad ahora. Explora problemas distintos y observa qué disfrutas construir.",
    code: [
      'print("Hola, mundo")',
      'System.out.println("Hola, mundo");',
      'fmt.Println("Hola, mundo")',
    ],
    q: "¿Cuál es un error lógico?",
    options: [
      "Falta un paréntesis",
      "El programa calcula un promedio equivocado",
      "No se puede abrir un archivo",
    ],
    answer: 1,
    explain:
      "El programa puede ejecutarse, pero el resultado no cumple la intención.",
  },
  {
    title: "Lenguajes y compilación",
    icon: "⌘",
    desc: "Del código a instrucciones ejecutables.",
    intro:
      "Los lenguajes de programación ofrecen distintas formas de expresar instrucciones.",
    body: "Los lenguajes de alto nivel están más cerca de las ideas del programador; los de bajo nivel están más cerca de la máquina. Habitualmente Python ejecuta bytecode mediante un intérprete, Java compila a bytecode para una máquina virtual y Go compila a un ejecutable nativo. Existen otras implementaciones.",
    tip: "Compilar y ejecutar son etapas relacionadas, pero un lenguaje puede tener diferentes implementaciones.",
    code: [
      "# Ejecutar un archivo Python\npython3 hola.py",
      "// Compilar y ejecutar Java\njavac Main.java\njava Main",
      "// Compilar y ejecutar Go\ngo run main.go",
    ],
    q: "¿Qué suele ejecutar la máquina virtual de Java?",
    options: [
      "Bytecode",
      "Un archivo de texto sin traducir",
      "Únicamente código Python",
    ],
    answer: 0,
    explain: "El compilador de Java suele generar bytecode que ejecuta la JVM.",
  },
  {
    title: "Algoritmos y PSeInt",
    icon: "◇",
    desc: "Pseudocódigo y diagramas de flujo.",
    intro:
      "Un algoritmo es una secuencia finita de pasos para resolver un problema.",
    body: "El pseudocódigo describe la solución sin depender completamente de la sintaxis de un lenguaje. Un diagrama de flujo usa flechas, procesos y decisiones para representar el recorrido. PSeInt es una herramienta educativa para escribir algoritmos en español y visualizar sus pasos.",
    tip: "Antes de programar, realiza una prueba de escritorio: anota cómo cambia cada valor después de cada instrucción.",
    code: [
      "# Pseudocódigo\nLeer a, b\nsuma <- a + b\nEscribir suma",
      "// PSeInt\nAlgoritmo Sumar\n  Leer a, b\n  Escribir a + b\nFinAlgoritmo",
      "// Diagrama textual\nInicio → Leer a y b\n→ Sumar → Mostrar → Fin",
    ],
    q: "¿Para qué sirve un diagrama de flujo?",
    options: [
      "Para representar pasos y decisiones",
      "Para reemplazar siempre las pruebas",
      "Para convertir un monitor en memoria",
    ],
    answer: 0,
    explain: "El diagrama ayuda a visualizar el orden y los posibles caminos.",
  },
  {
    title: "Datos y variables",
    icon: "◫",
    desc: "Tipos, constantes y asignación.",
    intro:
      "Una variable da nombre a un valor para que puedas utilizarlo y modificarlo.",
    body: "Los tipos comunes incluyen enteros, decimales, texto y booleanos. Declarar introduce una variable e inicializar le asigna un valor. En Java y Go el tipo se comprueba estáticamente; Python determina los tipos de los valores durante la ejecución. La inferencia de Go no significa tipado dinámico.",
    tip: "Para dinero usa unidades mínimas enteras o un tipo decimal adecuado: los números flotantes pueden ser aproximados.",
    code: [
      'edad = 20\nnombre = "Ana"\nactivo = True\nIVA = 0.19  # Convención',
      'int edad = 20;\nString nombre = "Ana";\nboolean activo = true;\nfinal double IVA = 0.19;',
      'edad := 20\nnombre := "Ana"\nactivo := true\nconst IVA = 0.19',
    ],
    q: "¿Qué valor es booleano?",
    options: ['"20"', "true", "3.5"],
    answer: 1,
    explain: "Un booleano expresa uno de dos valores: verdadero o falso.",
  },
  {
    title: "Operadores",
    icon: "＋",
    desc: "Aritmética, comparaciones y lógica.",
    intro: "Los operadores permiten calcular, comparar y combinar condiciones.",
    body: "Multiplicación y división tienen prioridad sobre suma y resta; usa paréntesis para expresar el orden deseado. == compara igualdad y >= compara un límite. AND requiere ambas condiciones y OR al menos una. En Java compara contenido de cadenas con equals. En Python, / produce división real y // división de piso; la división entre enteros en Java y Go trunca hacia cero.",
    tip: "Python no tiene operador de incremento ++: usa x += 1. En Go, x++ es una instrucción, no una expresión.",
    code: [
      "x = 2 + 3 * 4\nvalido = edad >= 18 and tiene_documento\nx += 1",
      "int x = 2 + 3 * 4;\nboolean valido = edad >= 18 && tieneDocumento;\nx++;",
      "x := 2 + 3 * 4\nvalido := edad >= 18 && tieneDocumento\nx++",
    ],
    q: "¿Cuánto vale 2 + 3 * 4?",
    options: ["20", "14", "24"],
    answer: 1,
    explain: "Primero se multiplica 3 por 4 y después se suma 2.",
  },
  {
    title: "Texto y entrada",
    icon: "Aa",
    desc: "Cadenas, lectura y salida.",
    intro:
      "Los programas pueden leer información del usuario y mostrar resultados.",
    body: "Una cadena contiene texto. Concatenar une cadenas; formatear permite combinar texto con valores. La entrada suele recibirse como texto y convertirla a número puede fallar, por lo que hay que validar formato y rango. La longitud de una cadena puede medirse de manera distinta según el lenguaje y Unicode.",
    tip: "Los fragmentos de Java y Go necesitan sus imports y estructura de programa; la guía PDF incluye programas completos.",
    code: [
      'nombre = input("Tu nombre: ")\nprint("Hola, " + nombre)',
      'Scanner entrada = new Scanner(System.in);\nString nombre = entrada.nextLine();\nSystem.out.println("Hola, " + nombre);',
      "lector := bufio.NewReader(os.Stdin)\nnombre, err := lector.ReadString('\\n')\nif err == nil { fmt.Println(\"Hola, \" + nombre) }",
    ],
    q: "¿Qué devuelve input() en Python?",
    options: ["Texto", "Siempre un entero", "Una lista"],
    answer: 0,
    explain:
      "input() devuelve texto; conviértelo explícitamente cuando necesites un número.",
  },
  {
    title: "Condicionales",
    icon: "⑂",
    desc: "Decisiones con if, else y switch.",
    intro:
      "Una condición elige qué instrucciones ejecutar según un valor verdadero o falso.",
    body: "if evalúa una condición, y else representa la alternativa. Las condiciones anidadas permiten reglas más detalladas. Para comparar una opción con varias alternativas, Java y Go ofrecen switch; Python 3.10 o posterior ofrece match. Piensa primero en casos inválidos y en los límites.",
    tip: "Prueba ambos lados de cada frontera: para mayoría de edad, comprueba 17 y 18.",
    code: [
      'if edad >= 18:\n    print("Mayor")\nelse:\n    print("Menor")',
      'if (edad >= 18) {\n    System.out.println("Mayor");\n} else {\n    System.out.println("Menor");\n}',
      'if edad >= 18 {\n    fmt.Println("Mayor")\n} else {\n    fmt.Println("Menor")\n}',
    ],
    q: "Si edad es 18, ¿qué rama se ejecuta?",
    options: ["Mayor", "Menor", "Ninguna"],
    answer: 0,
    explain: "El operador >= incluye el valor 18.",
  },
  {
    title: "Bucles",
    icon: "↻",
    desc: "Repite instrucciones con while y for.",
    intro:
      "Un bucle repite instrucciones mientras se cumple una condición o recorre una colección.",
    body: "Identifica inicialización, condición, cuerpo y actualización. while comprueba antes de ejecutar; Java tiene do-while, que ejecuta el cuerpo al menos una vez. Python y Go pueden expresar ese comportamiento con un bucle y una salida explícita. break termina el bucle y continue pasa a la siguiente iteración.",
    tip: "Si la condición nunca cambia, puedes crear un bucle infinito. Comprueba siempre cómo termina.",
    code: [
      "for i in range(1, 4):\n    print(i)",
      "for (int i = 1; i <= 3; i++) {\n    System.out.println(i);\n}",
      "for i := 1; i <= 3; i++ {\n    fmt.Println(i)\n}",
    ],
    q: "¿Qué números produce range(1, 4)?",
    options: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3"],
    answer: 0,
    explain: "El límite superior de range es exclusivo.",
  },
  {
    title: "Arrays y colecciones",
    icon: "▦",
    desc: "Listas, mapas y matrices.",
    intro:
      "Las colecciones organizan varios valores para recorrerlos y consultarlos.",
    body: "Un array tiene tamaño fijo; listas y slices ofrecen formas flexibles de trabajar con datos. Los índices comienzan en 0. Un diccionario o mapa asocia claves con valores. Una matriz se representa como filas de valores; matriz[1][0] apunta a la segunda fila y primera columna.",
    tip: "En Go los slices pueden compartir almacenamiento. En Java, ArrayList<Integer> usa objetos Integer.",
    code: [
      "notas = [8, 6, 9]\nprint(notas[0])\nnotas.append(7)",
      "int[] notas = {8, 6, 9};\nSystem.out.println(notas[0]);",
      "notas := []int{8, 6, 9}\nfmt.Println(notas[0])\nnotas = append(notas, 7)",
    ],
    q: "¿Qué valor tiene notas[0] en los ejemplos?",
    options: ["6", "8", "9"],
    answer: 1,
    explain: "El primer elemento tiene índice 0.",
  },
  {
    title: "Funciones",
    icon: "ƒ",
    desc: "Parámetros, resultados y reutilización.",
    intro:
      "Una función reúne una operación con nombre y puede devolver un resultado.",
    body: "Los parámetros son los nombres que define la función; los argumentos son los valores que recibe al llamarla. return devuelve un valor al llamador, mientras imprimir lo muestra. Una función clara tiene una responsabilidad coherente y un contrato comprensible.",
    tip: "Prueba funciones con valores habituales, límites y entradas inválidas.",
    code: [
      "def sumar(a, b):\n    return a + b\n\nprint(sumar(2, 3))",
      "static int sumar(int a, int b) {\n    return a + b;\n}\n// Dentro de main: sumar(2, 3)",
      "func sumar(a, b int) int {\n    return a + b\n}\n// Dentro de main: sumar(2, 3)",
    ],
    q: "¿Qué hace return?",
    options: [
      "Devuelve un resultado al llamador",
      "Repite la función",
      "Siempre muestra texto",
    ],
    answer: 0,
    explain:
      "return entrega el resultado; mostrarlo es una operación distinta.",
  },
  {
    title: "Práctica: acceso",
    icon: "⌑",
    desc: "Combina condiciones y bucles.",
    intro:
      "Practica un máximo de tres intentos sin construir un sistema de autenticación real.",
    body: "Diseña un ciclo que consulte un verificador simulado y termine si el resultado es verdadero o si se agotan tres intentos. Traza los valores falso, falso, verdadero. En sistemas reales usa una solución de identidad confiable, no guardes contraseñas en el código y aplica controles en el servidor.",
    tip: "Este ejercicio enseña control de flujo. No uses datos reales ni trates la simulación como autenticación segura.",
    code: [
      'resultados = [False, False, True]\nfor resultado in resultados[:3]:\n    if resultado:\n        print("Acceso simulado")\n        break',
      'boolean[] resultados = {false, false, true};\nfor (boolean resultado : resultados) {\n    if (resultado) {\n        System.out.println("Acceso simulado");\n        break;\n    }\n}',
      'resultados := []bool{false, false, true}\nfor _, resultado := range resultados {\n    if resultado {\n        fmt.Println("Acceso simulado")\n        break\n    }\n}',
    ],
    q: "Para falso, falso, verdadero, ¿cuántos intentos se evalúan?",
    options: ["Uno", "Dos", "Tres"],
    answer: 2,
    explain: "El tercer resultado es verdadero y entonces se termina el ciclo.",
  },
  {
    title: "Desarrollo y buenas prácticas",
    icon: "✓",
    desc: "Pruebas, errores y código legible.",
    intro:
      "Desarrollar software incluye comprender, implementar, probar y mantener.",
    body: "Escoge nombres claros, mantén funciones enfocadas y usa comentarios para explicar decisiones. Distingue errores de sintaxis, ejecución y lógica. Prueba casos normales, límites y entradas inválidas. Un cambio pequeño y comprobable es más fácil de revisar y corregir.",
    tip: "Cuando algo falla, reproduce el problema, formula una hipótesis y cambia una cosa a la vez.",
    code: [
      "# Explica por qué, no lo obvio\ndef es_par(n):\n    return n % 2 == 0",
      "static boolean esPar(int n) {\n    return n % 2 == 0;\n}",
      "func esPar(n int) bool {\n    return n%2 == 0\n}",
    ],
    q: "¿Qué casos conviene probar?",
    options: [
      "Solo el caso normal",
      "Casos normales, límites e inválidos",
      "Solo el caso más grande",
    ],
    answer: 1,
    explain:
      "Las fronteras y entradas inválidas ayudan a encontrar fallos que el caso normal no revela.",
  },
  {
    title: "Proyecto final",
    icon: "✦",
    desc: "Pon en práctica lo aprendido.",
    intro: "Construye un pequeño gestor de tareas desde cero.",
    body: "Crea un menú que permita agregar, listar y completar tareas. Separa la entrada y salida de las reglas de negocio. Define qué ocurre si la lista está vacía o la tarea no existe. Comienza con datos en memoria y recuerda que se pierden al cerrar el programa.",
    tip: "Avanza por partes: primero agrega una tarea, luego muestra la lista y por último incorpora cambios de estado y validaciones.",
    code: [
      'tareas = []\ntareas.append({"titulo": "Estudiar", "hecha": False})\nprint(tareas)',
      "// Idea: define una clase Tarea\n// y guarda objetos en una ArrayList.",
      'type Tarea struct {\n    Titulo string\n    Hecha bool\n}\ntareas := []Tarea{{Titulo: "Estudiar"}}',
    ],
    q: "¿Qué sucede con datos solo en memoria al cerrar el programa?",
    options: [
      "Se conservan automáticamente",
      "Se pierden",
      "Se envían a una base de datos",
    ],
    answer: 1,
    explain: "Para conservarlos necesitas un mecanismo de persistencia.",
  },
];
const root = document.getElementById("content"),
  nav = document.getElementById("nav");
let completed = [];
try {
  completed = JSON.parse(
    localStorage.getItem("fundamentos-progreso-v1") || "[]",
  );
  if (!Array.isArray(completed)) completed = [];
} catch {
  completed = [];
}
let language = 0;
function save() {
  try {
    localStorage.setItem("fundamentos-progreso-v1", JSON.stringify(completed));
  } catch {}
}
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function current() {
  let v = location.hash.slice(1);
  return /^leccion-\d+$/.test(v) ? Number(v.slice(8)) : -1;
}
function navigation() {
  const i = current();
  nav.innerHTML = lessons
    .map(
      (l, n) =>
        `<button data-index="${n}" class="${i === n ? "active" : ""}" ${i === n ? 'aria-current="page"' : ""}><span class="num">${String(n + 1).padStart(2, "0")}</span><span>${l.title}</span>${completed.includes(n) ? '<span class="check">✓</span>' : ""}</button>`,
    )
    .join("");
  document.getElementById("progressText").textContent =
    `${completed.length} / ${lessons.length}`;
  document.getElementById("progressBar").style.width =
    `${(completed.length / lessons.length) * 100}%`;
}
function render() {
  let i = current();
  if (i < 0 || i >= lessons.length) {
    document.getElementById("breadcrumb").textContent = "Introducción";
    root.innerHTML = `<section class="hero"><div><div class="eyebrow">✳ &nbsp; TU CAMINO EMPIEZA AQUÍ</div><h1>Aprende a pensar<br>como programador.</h1><p>Domina los fundamentos paso a paso y descubre cómo se expresan en Python, Java y Go.</p><button class="btn" id="start">Comenzar a aprender</button></div><div class="hero-art" aria-hidden="true"><div class="paper-card one">✳<br><br>ideas<br>que cobran<br>vida.</div><div class="paper-card two">&lt; aprender &gt;<br><br> &nbsp; lógica + práctica<br> &nbsp; = posibilidades<br><br>&lt; / aprender &gt;</div><span class="spark">✳</span></div></section><div class="section-head"><div><h2>Tu ruta de aprendizaje</h2><p>Una lección a la vez. Empieza por donde quieras.</p></div><span class="pill">${lessons.length} LECCIONES</span></div><div class="cards">${lessons.map((l, n) => `<button class="card" data-index="${n}"><div class="card-top"><span class="icon">${l.icon}</span><span class="pill">${completed.includes(n) ? "COMPLETADA" : String(n + 1).padStart(2, "0")}</span></div><h3>${l.title}</h3><p>${l.desc}</p></button>`).join("")}</div>`;
    document.getElementById("start").onclick = () =>
      (location.hash = "leccion-0");
  } else {
    let l = lessons[i];
    document.getElementById("breadcrumb").textContent = l.title;
    root.innerHTML = `<div class="lesson-layout"><div><div class="eyebrow">LECCIÓN ${String(i + 1).padStart(2, "0")} &nbsp; / &nbsp; FUNDAMENTOS</div><h1 class="lesson-title">${l.title}</h1><p class="lead">${l.intro}</p><section class="lesson-content"><h2>Entiende el concepto</h2><p>${l.body}</p><div class="tip"><strong>✳ &nbsp; Para recordar</strong><br>${l.tip}</div><h3>Un ejemplo, tres lenguajes</h3><p>Compara la idea y observa cómo cambia la sintaxis.</p><div class="tabs" role="tablist" aria-label="Lenguaje">${["Python", "Java", "Go"].map((x, n) => `<button class="tab ${language === n ? "active" : ""}" role="tab" aria-selected="${language === n}" data-lang="${n}">${x}</button>`).join("")}</div><pre class="code"><code>${escapeHtml(l.code[language])}</code></pre><p>Los fragmentos son ilustrativos; algunos requieren imports o una función principal. La guía PDF incluye instrucciones para ejecutar los primeros programas.</p></section><section class="quiz"><div class="eyebrow">COMPRUEBA LO APRENDIDO</div><h3>${l.q}</h3>${l.options.map((o, n) => `<button class="choice" data-choice="${n}">${o}</button>`).join("")}<div class="feedback" role="status" aria-live="polite"></div></section><div class="lesson-actions"><button class="btn secondary" id="back">${i === 0 ? "Ver inicio" : "Lección anterior"}</button><button class="btn" id="done">${completed.includes(i) ? "Completada ✓" : "Marcar como completada"}</button><button class="btn secondary" id="next">${i === lessons.length - 1 ? "Ver inicio" : "Siguiente lección"}</button></div></div><aside class="meta-card"><h3>En esta lección</h3><p>Lee la explicación, compara los ejemplos y responde la pregunta.</p><p class="done">${completed.includes(i) ? "✓ Lección completada" : "○ Pendiente de completar"}</p><p>Tu progreso se guarda en este navegador y dispositivo.</p></aside></div>`;
    document.querySelectorAll("[data-lang]").forEach(
      (b) =>
        (b.onclick = () => {
          language = Number(b.dataset.lang);
          document.querySelectorAll("[data-lang]").forEach((t) => {
            const active = Number(t.dataset.lang) === language;
            t.classList.toggle("active", active);
            t.setAttribute("aria-selected", active);
          });
          document.querySelector(".code code").textContent = l.code[language];
        }),
    );
    document.querySelectorAll("[data-choice]").forEach(
      (b) =>
        (b.onclick = () => {
          let ok = Number(b.dataset.choice) === l.answer;
          let f = document.querySelector(".feedback");
          f.textContent =
            (ok ? "¡Correcto! " : "Inténtalo de nuevo. ") +
            (ok ? l.explain : "Revisa la explicación y vuelve a elegir.");
          f.style.color = ok ? "#287352" : "#ac6541";
        }),
    );
    document.getElementById("done").onclick = () => {
      completed = completed.includes(i)
        ? completed.filter((x) => x !== i)
        : [...completed, i];
      save();
      render();
    };
    document.getElementById("back").onclick = () =>
      (location.hash = i === 0 ? "inicio" : `leccion-${i - 1}`);
    document.getElementById("next").onclick = () =>
      (location.hash =
        i === lessons.length - 1 ? "inicio" : `leccion-${i + 1}`);
  }
  navigation();
  document
    .querySelectorAll("[data-index]")
    .forEach(
      (b) => (b.onclick = () => (location.hash = `leccion-${b.dataset.index}`)),
    );
}
window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
});
render();
