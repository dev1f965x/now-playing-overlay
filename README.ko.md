# now-playing-overlay

[English](./README.md) | [한국어](./README.ko.md)

지금 재생 중인 곡을 화면 위에 띄워주는 투명 오버레이입니다.

> 아직 재생 정보를 가져오는 부분이 연결되지 않아 항상 "재생 중인 곡 없음"으로 표시됩니다.
> `src/main.ts`의 `getNowPlaying()`을 구현하면 연결됩니다.

## 실행

[Node.js](https://nodejs.org)가 필요합니다.

```bash
npm install
npm start
```

오버레이는 드래그해서 옮길 수 있고, 선택된 상태에서 `Alt+F4`로 닫습니다.

## 빌드

```bash
npm run make
```

설치 파일은 `out/make`에 만들어집니다.

## 라이선스

[MIT](./LICENSE)
