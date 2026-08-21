export {};

declare global {
  interface Window {
    overlayAPI: {
      onNowPlaying: (
        callback: (data: { title: string; artist: string } | null) => void,
      ) => void;
    };
  }
}
