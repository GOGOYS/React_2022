# NodeJS, Express, React Full Stack Project
* NodeJS, Express 프로젝트 생성하기 위한 도구 설치

##  express 프레임워크 사용
* 그냥 express를 사용해도 되지만 es6가 뭐시기가 안되서
* 선생님이 만든 express-21c를 사용해서 진행한다. (그냥 express 사용해도 된다.)
* 통합 터미널에서 ```npm -g install express-21c``` 후
* ```express-21c 프로젝트명``` 으로 폴더 생성

## 프로젝트 생성 후
* express로 생성하면 node_modules폴더가 없으니
* 프로젝트의 터미널에서 ```npm install```을 해줘서 node_modules를 생성해줘야한다.
* ```nodemon```은 node.js를 실행시켜주는 역할 demon 자바의 tomcat과 비슷한 역할

## create-react-app client
* node.js 서버와 react를 연동하는 풀스텍 프로젝트 생성
* node.js 서버에 client 폴더를 생성하여 react와 연결

## yarn build
* client의 터미널에서 ```yarn build```를 실행시켜
* 코드를 컴파일 하는 역할을 한다.
* react를 배포할때 yarn build를 통해 배포를 한다

## NodeJS안의 React폴더와 이름 중복시 혼동
* app.js라는 이름이 중복되어 혼동되니 React폴더 안의 app이름을  Recat로 변경하기
* 변경 후 yarn build