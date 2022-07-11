# 다이어트를 도와줘 프로젝트

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- EXPRESS +MONGODB +React +NodeJS 연동 프로젝트

## NodeJS bcakend Project를 생성하기 위하여

- `exprss-21c node-310-Food`
- 프로젝트 폴더에서 `npm install`

## React Frontend Project 생성하기 위하여

- node-310-Food 폴더에서 react Client 생성
- client 폴더에서 터미널 열기
- yarn 실행하여 update
- `yarn build` 실행하여 build 폴더 생성

## nodeJS에서 client 인식시키기

- node-310-Food/app.js 파일 열기
- `app.use(express.static(path.join("./client/build")));` 변경하기
- `app.use("/", indexRouter);` 삭제또는 주석처리
- node-310-Food 폴더에서 서버 시작하기 : `nodemon` 실행
- 웹 브라우저에서 localhost:3000 주소 입력하여 react화면 출력 확인

## React프로젝트의 파일이름 변경

- client 폴더의 src폴더에서 `App.*` 으로 시작하는 파일을을 모두 `React.*`으로 변경

## MongoDB 연동하기

- node-310-Food 폴더에서
- mongoose dependency 설치 : `npm install mongoose`
- 날짜와 시간 도구 설치 : `npm install moment`
- UUID Key 생성 도구 설치 : `npm install react-uuid`

- client 폴더에서
- 날짜와 시간 도구 사용 지정 : `yarn add mement`
- UUID Key 생성 도구 사용 지정 : `yarn add react-uuid`
