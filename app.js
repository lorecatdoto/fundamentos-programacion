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

window.addEventListener("hashchange", () => {
  render();
  window.scrollTo(0, 0);
});
render();
