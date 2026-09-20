<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <h3 align="center">now-playing-overlay</h3>

  <p align="center">
    Always-on-top transparent overlay showing the track currently playing.
    <br />
    <a href="https://github.com/dev1f965x/now-playing-overlay/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/dev1f965x/now-playing-overlay/issues/new?labels=feature">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

A frameless, click-through-ish overlay that sits above whatever is on screen and shows the current track.

No playback source is wired up yet, so it always shows no track. Implementing `readNowPlaying()` in `src/main.ts` connects one.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

[Node.js](https://nodejs.org).

### Installation

```sh
git clone https://github.com/dev1f965x/now-playing-overlay.git
cd now-playing-overlay
npm install
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Drag the overlay to move it. `Alt+F4` closes it while it has focus.

```sh
npm run make
```

Installers are written to `out/make`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Transparent always-on-top window
- [ ] Read the playing track from a real source



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/dev1f965x/now-playing-overlay/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

[@dev1f965x](https://github.com/dev1f965x) — https://github.com/dev1f965x/now-playing-overlay

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [Electron Forge](https://www.electronforge.io/)
- [Shields.io](https://shields.io)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/dev1f965x/now-playing-overlay.svg?style=for-the-badge
[contributors-url]: https://github.com/dev1f965x/now-playing-overlay/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dev1f965x/now-playing-overlay.svg?style=for-the-badge
[forks-url]: https://github.com/dev1f965x/now-playing-overlay/network/members
[stars-shield]: https://img.shields.io/github/stars/dev1f965x/now-playing-overlay.svg?style=for-the-badge
[stars-url]: https://github.com/dev1f965x/now-playing-overlay/stargazers
[issues-shield]: https://img.shields.io/github/issues/dev1f965x/now-playing-overlay.svg?style=for-the-badge
[issues-url]: https://github.com/dev1f965x/now-playing-overlay/issues
[license-shield]: https://img.shields.io/github/license/dev1f965x/now-playing-overlay.svg?style=for-the-badge
[license-url]: https://github.com/dev1f965x/now-playing-overlay/blob/main/LICENSE
