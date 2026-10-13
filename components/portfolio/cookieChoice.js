export const COOKIE_CHOICE_KEY = "sglabs-cookie-info";
export const COOKIE_CHOICE_EVENT = "sglabs-cookie-choice";

const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 180;

export function hasCookieDecision() {
  try {
    const raw = window.localStorage.getItem(COOKIE_CHOICE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    return typeof saved.expires === "number" && saved.expires > Date.now();
  } catch {
    return false;
  }
}

export function saveCookieDecision(choice) {
  window.localStorage.setItem(
    COOKIE_CHOICE_KEY,
    JSON.stringify({ choice, expires: Date.now() + SIX_MONTHS_MS }),
  );
  window.dispatchEvent(new Event(COOKIE_CHOICE_EVENT));
}
