# 다이어트를 도와줘 프로젝트

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- EXPRESS + MYsql + React + NodeJS 연동 프로젝트

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

## MYSQL DB 연동하기

- Mysql DB와 연동하기 위해 Dependency 설치

```
npm install mysql2
npm install sequelize
npm install moment
npm install -g sequelize-cli
```

- Sequelize 도구 설치 : 반드시 관리자 권한 cmd에서 global로 설치
  관리자로 설치하지 않으면 자동으로 페이블 스키마가 설정되지 않는다.

```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

-sequelize 도구를 사용하여 mysql DB 연동정보 자동화 : 터미널 창에서

`sequelize init`
`sequelize-auto -o "./models" -d mydb -h localhost -u root -x '!Korea8080' -e mysql -l esm`

- sequelize-auto를 사용할때 끝에 `-l esm` 옵션을 생략하면
  CommonsJS(ES5 이전) 버전으로 모듈이 생성된다 (빼먹지 말것)
- 사용자의 패스워드에 특수문자가 포함된 경우 반드시 ''로 묶어줘야한다.
- 선택사항들

```
-o 폴더명 : model 설정 파일이 출력될 곳
-d DB명 : 사용할 mysql DB
-h HOST : MySQL 서버가 설치된 컴퓨터의 ip, localhost
-u username : MySQL에 접속할 권한이 있는 사용자
-x password : MySQL 접속 사용자 비번
-e mysql : 사용할 데이터베이스 소프트웨어
-l esm : ES6+ 버전으로 생성하기
-l es5 : ES5 버전으로 생성하기
-p PORTNUM : port3306 이외의 곳으로 사용할때
```
