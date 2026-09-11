export {};

declare global {
  type NowPlaying = { title: string; artist: string };

  interface Window {
    /** Bridge exposed by `preload.ts`. */
    overlayAPI: {
      /** Subscribes to track updates pushed from the main process; `null` means nothing is playing. */
      onNowPlaying: (callback: (track: NowPlaying | null) => void) => void;
    };
  }
}
