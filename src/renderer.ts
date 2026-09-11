import "./index.css";

function element<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`Missing element: ${selector}`);
  return el;
}

const titleEl = element<HTMLParagraphElement>("#title");
const artistEl = element<HTMLParagraphElement>("#artist");

window.overlayAPI.onNowPlaying((track) => {
  titleEl.textContent = track?.title ?? "재생 중인 곡 없음";
  artistEl.textContent = track?.artist ?? "";
});
