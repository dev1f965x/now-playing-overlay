import "./index.css";

const NOTHING_PLAYING = "재생 중인 곡 없음";

function requireElement<T extends HTMLElement>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
}

const title = requireElement<HTMLParagraphElement>("#title");
const artist = requireElement<HTMLParagraphElement>("#artist");

window.overlayAPI.onNowPlaying((track) => {
  title.textContent = track?.title ?? NOTHING_PLAYING;
  artist.textContent = track?.artist ?? "";
});
