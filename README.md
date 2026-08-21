# now-playing-overlay

항상 위에 떠있는 투명 오버레이 창에 "지금 재생 중인 곡"을 보여주는 데스크톱 위젯 (Electron Forge + Vite + TypeScript).

## 실행 전 준비 (호스트에 직접, Docker 아님)

Electron은 화면(GUI)이 필요해서 Docker 컨테이너 안에서 실행할 수 없습니다. 아래는 **호스트 PC에 직접** 해야 합니다.

1. [Node.js](https://nodejs.org) 설치 (LTS 버전 권장)
2. 이 폴더에서:
   ```
   npm install
   npm start
   ```

## 지금 상태 (MVP)

- 항상 위에 떠있는(always-on-top), 테두리 없는(frameless), 투명한 오버레이 창까지만 만들어져 있습니다.
- "지금 재생 중인 곡" 데이터는 아직 **가짜(mock) 값**입니다 — `src/main.ts`의 `getNowPlaying()` 함수를 보세요.

## 다음에 할 일 (미착수)

실제로 재생 중인 곡을 가져오려면 아래 중 하나를 붙여야 합니다 — 어떤 걸 재생 소스로 쓸지에 따라 방법이 달라져서, 미리 정하지 않고 남겨뒀습니다:

- **Windows 미디어 세션(SMTC)** — OS 레벨에서 "지금 재생 중" 정보를 가져오는 방식(스포티파이/유튜브/브라우저 등 미디어 재생하는 모든 앱에서 공통으로 동작). Node에서 직접 접근하려면 네이티브 모듈이 필요해서 구현이 좀 까다로움
- **Spotify Web API** — 스포티파이만 쓴다면 이쪽이 더 간단함(공식 API, 로그인 연동 필요)

`getNowPlaying()` 함수 안의 구현만 바꾸면 나머지(오버레이 표시 로직)는 그대로 재사용됩니다.
