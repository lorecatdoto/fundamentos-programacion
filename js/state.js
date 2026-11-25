const STORAGE_KEY = "fundamentos-progreso-v1";

let completedLessons = loadCompleted();
let selectedLanguage = 0;

function loadCompleted() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCompleted() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
  } catch {}
}

export function isCompleted(index) {
  return completedLessons.includes(index);
}

export function getCompletedCount() {
  return completedLessons.length;
}

export function toggleCompleted(index) {
  completedLessons = isCompleted(index)
    ? completedLessons.filter((item) => item !== index)
    : [...completedLessons, index];
  saveCompleted();
}

export function getLanguage() {
  return selectedLanguage;
}

export function setLanguage(index) {
  selectedLanguage = index;
}