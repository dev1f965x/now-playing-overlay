# now-playing-overlay

[English](./README.md) | [한국어](./README.ko.md)

An always-on-top transparent overlay widget that shows what's currently playing (Electron Forge + Vite + TypeScript).

## Before running (on host, not Docker)

Electron needs a display, so it can't run inside a Docker container. The steps below must be done **directly on your host machine**.

1. Install [Node.js](https://nodejs.org) (LTS recommended)
2. In this folder:
   ```
   npm install
   npm start
   ```

## Current state (MVP)

- The always-on-top, frameless, transparent overlay window shell is built.
- The "now playing" data is still a **mock placeholder** — see `getNowPlaying()` in `src/main.ts`.

## Next steps (not started)

Getting real "now playing" data requires wiring up one of the following. Left undecided on purpose since it depends on which playback source you actually want to track:

- **Windows Media Session (SMTC)** — OS-level "now playing" info that works across any app playing media (Spotify, YouTube, browsers, etc.). Requires a native module to access from Node, so it's a bit more involved.
- **Spotify Web API** — Simpler if you only care about Spotify (official API, needs login/auth setup).

Only `getNowPlaying()`'s implementation needs to change — the rest of the overlay display logic can stay as-is.
