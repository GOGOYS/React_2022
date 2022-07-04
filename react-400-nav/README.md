# React Project Navigation

- React Project에서 메뉴 시스템 구현하기

## Dependency 추가하기

- React Navi 구현하기 위하여 `react-router-dom`이 필요하다
  `yarn add react-router-dom`

## React Router 이해하기

- React의 화면구현은 SPA(Single Page Application) 구조이다.
- 일반적인 화면 구현은 Nav(menu) 구현하는 방법에 따라 다수의 페이지가 필요하고
- Menu를 통해서 페이지를 전환하는 방식이다
- React Nav 구조는 전체 모든 페이지가 하나라는 생각을 해야한다.
- Nav에서 메뉴를 클릭하면 잠춰진 페이지가 앞으로 나타나는 구조로 인식을 해야한다.

* react-router-dom을 사용하여 구현하는 nav를 라우터라고 하고
  메뉴를 클릭했을때 페이지가 나타나도록 하는것을 라우팅이라고 한다.
