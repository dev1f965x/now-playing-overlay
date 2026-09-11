# now-playing-overlay

[English](./README.md) | [한국어](./README.ko.md)

Always-on-top transparent overlay that shows the track currently playing.

> No playback source is connected yet, so the overlay always shows no track.
> Implement `getNowPlaying()` in `src/main.ts` to connect one.

## Run

Requires [Node.js](https://nodejs.org).

```bash
npm install
npm start
```

Drag the overlay to move it. Close it with `Alt+F4` while it has focus.

## Build

```bash
npm run make
```

Installers are written to `out/make`.

## License

[MIT](./LICENSE)
