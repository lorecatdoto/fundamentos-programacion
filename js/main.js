import { lessons } from "./data/lessons.js";
import {
  isCompleted,
  getCompletedCount,
  toggleCompleted,
  getLanguage,
  setLanguage,
} from "./state.js";

const root = document.getElementById("content");
const nav = document.getElementById("nav");

function escapeHtml(text) {
  return text.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
}

function getCurrentLessonIndex() {
  const hash = location.hash.slice(1);
  return /^leccion-\d+$/.test(hash) ? Number(hash.slice(8)) : -1;
}

function renderNavigation() {
  const currentIndex = getCurrentLessonIndex();
  nav.innerHTML = lessons
    .map(
      (lesson, n) =>
        `<button data-index="${n}" class="${currentIndex === n ? "active" : ""}" ${currentIndex === n ? 'aria-current="page"' : ""}><span class="num">${String(n + 1).padStart(2, "0")}</span><span>${lesson.title}</span>${isCompleted(n) ? '<span class="check">✓</span>' : ""}</button>`,
    )
    .join("");
  document.getElementById("progressText").textContent =
    `${getCompletedCount()} / ${lessons.length}`;
  document.getElementById("progressBar").style.width =
    `${(getCompletedCount() / lessons.length) * 100}%`;
}

function render() {
  const lessonIndex = getCurrentLessonIndex();

  if (lessonIndex < 0 || lessonIndex >= lessons.length) {
    document.getElementById("breadcrumb").textContent = "Introducción";
    root.innerHTML = `<section class="hero"><div><div class="eyebrow">✳ &nbsp; TU CAMINO EMPIEZA AQUÍ</div><h1>Guía de programación</h1><p>Domina los fundamentos paso a paso y descubre cómo se expresan en Python, Java y Go.</p><button class="btn" id="start">Comenzar a aprender</button></div><div class="hero-art" aria-hidden="true"><div class="paper-card one">✳<br><br>ideas<br>que cobran<br>vida.</div><div class="paper-card two">&lt; aprender &gt;<br><br> &nbsp; lógica + práctica<br> &nbsp; = posibilidades<br><br>&lt; / aprender &gt;</div><span class="spark">✳</span></div></section><div class="section-head"><div><h2>Tu ruta de aprendizaje</h2><p>Una lección a la vez. Empieza por donde quieras.</p></div><span class="pill">${lessons.length} LECCIONES</span></div><div class="cards">${lessons.map((lesson, n) => `<button class="card" data-index="${n}"><div class="card-top"><span class="icon">${lesson.icon}</span><span class="pill">${isCompleted(n) ? "COMPLETADA" : String(n + 1).padStart(2, "0")}</span></div><h3>${lesson.title}</h3><p>${lesson.desc}</p></button>`).join("")}</div>`;
    document.getElementById("start").onclick = () =>
      (location.hash = "leccion-0");
  } else {
    const lesson = lessons[lessonIndex];
    const language = getLanguage();
    document.getElementById("breadcrumb").textContent = lesson.title;
    root.innerHTML = `<div class="lesson-layout"><div><div class="eyebrow">LECCIÓN ${String(lessonIndex + 1).padStart(2, "0")} &nbsp; / &nbsp; FUNDAMENTOS</div><h1 class="lesson-title">${lesson.title}</h1><p class="lead">${lesson.intro}</p><section class="lesson-content"><h2>Entiende el concepto</h2><p>${lesson.body}</p><div class="tip"><strong>✳ &nbsp; Para recordar</strong><br>${lesson.tip}</div><h3>Un ejemplo, tres lenguajes</h3><p>Compara la idea y observa cómo cambia la sintaxis.</p><div class="tabs" role="tablist" aria-label="Lenguaje">${["Python", "Java", "Go"].map((name, n) => `<button class="tab ${language === n ? "active" : ""}" role="tab" aria-selected="${language === n}" data-lang="${n}">${name}</button>`).join("")}</div><pre class="code"><code>${escapeHtml(lesson.code[language])}</code></pre><p>Los fragmentos son ilustrativos; algunos requieren imports o una función principal. La guía PDF incluye instrucciones para ejecutar los primeros programas.</p></section><section class="quiz"><div class="eyebrow">COMPRUEBA LO APRENDIDO</div><h3>${lesson.q}</h3>${lesson.options.map((option, n) => `<button class="choice" data-choice="${n}">${option}</button>`).join("")}<div class="feedback" role="status" aria-live="polite"></div></section><div class="lesson-actions"><button class="btn secondary" id="back">${lessonIndex === 0 ? "Ver inicio" : "Lección anterior"}</button><button class="btn" id="done">${isCompleted(lessonIndex) ? "Completada ✓" : "Marcar como completada"}</button><button class="btn secondary" id="next">${lessonIndex === lessons.length - 1 ? "Ver inicio" : "Siguiente lección"}</button></div></div><aside class="meta-card"><h3>En esta lección</h3><p>Lee la explicación, compara los ejemplos y responde la pregunta.</p><p class="done">${isCompleted(lessonIndex) ? "✓ Lección completada" : "○ Pendiente de completar"}</p><p>Tu progreso se guarda en este navegador y dispositivo.</p></aside></div>`;

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.onclick = () => {
        setLanguage(Number(button.dataset.lang));
        const selected = getLanguage();
        document.querySelectorAll("[data-lang]").forEach((tab) => {
          const active = Number(tab.dataset.lang) === selected;
          tab.classList.toggle("active", active);
          tab.setAttribute("aria-selected", active);
        });
        document.querySelector(".code code").textContent =
          lesson.code[selected];
      };
    });

    document.querySelectorAll("[data-choice]").forEach((button) => {
      button.onclick = () => {
        const isCorrect = Number(button.dataset.choice) === lesson.answer;
        const feedback = document.querySelector(".feedback");
        feedback.textContent =
          (isCorrect ? "¡Correcto! " : "Inténtalo de nuevo. ") +
          (isCorrect
            ? lesson.explain
            : "Revisa la explicación y vuelve a elegir.");
        feedback.style.color = isCorrect ? "#2a62a8" : "#ac6541";
      };
    });

    document.getElementById("done").onclick = () => {
      toggleCompleted(lessonIndex);
      render();
    };
    document.getElementById("back").onclick = () =>
      (location.hash =
        lessonIndex === 0 ? "inicio" : `leccion-${lessonIndex - 1}`);
    document.getElementById("next").onclick = () =>
      (location.hash =
        lessonIndex === lessons.length - 1
          ? "inicio"
          : `leccion-${lessonIndex + 1}`);
  }

  renderNavigation();
  document
    .querySelectorAll("[data-index]")
    .forEach(
      (button) =>
        (button.onclick = () =>
          (location.hash = `leccion-${button.dataset.index}`)),
    );
}

window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
});

render();