import './index.css';

const titleEl = document.querySelector<HTMLParagraphElement>('#title')!;
const artistEl = document.querySelector<HTMLParagraphElement>('#artist')!;

window.overlayAPI.onNowPlaying((data) => {
  if (!data) {
    titleEl.textContent = '재생 중인 곡 없음';
    artistEl.textContent = '';
    return;
  }
  titleEl.textContent = data.title;
  artistEl.textContent = data.artist;
});
