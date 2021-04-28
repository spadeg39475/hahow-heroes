# Heroes

hahow 前端徵才 assignment

## 1. Live Demo

[Heroes Demo](https://spadeg39475.github.io/hahow-heroes/public/#/)

## 2. 安裝與執行

```
# install dependencies
npm install

# serve with at localhost:3000
npm run dev

# build for production
npm run build
```

## 3. 專案架構

```
─── src/
  ├─── componnets
  │  ├─── HeroCard/
  │  ├─── HeroList/
  │  ├─── HeroProfile/
  │  ├─── App.js
  │  └─── style.js
  │
  ├─── reducers/
  │
  ├─── store/
  └─── index.js
```

### 資料夾架構

分為三個部分，components、reducers、store:

- components 內以不同 react 元件來命名資料夾，由於這次是使用 `styled-components` 來寫 style，因此資料夾內也放了每個元件用到的樣式檔 `style.js`

- reducers 放置 redux 所用到的 action type、action creator、reducer，為了減少 import，因此相關的 actions 和 reducer 放在同個檔案內

- store 放置 redux 的 store

由於在前公司使用到 redux 多只是維護原本的舊專案，因此這個專案決定從頭建置 redux 架構當作一個練習。

共用的 state 和 hero 資料放在 store 裡，運行方式是 dispatch action 到 reducer 來修改 state。非同步邏輯如 fetch data 部分使用 redux-thunk 處理。有些非共用的狀態則在元件內部使用 useState。

## 4. 使用的第三方 Library

### Dependencies

### React

是一套專門用來實作 UI 介面的前端框架，相較於傳統的開發模式更方便將 UI 介面拆分成各個元件，以宣告式將畫面呈現 (排版) 和 資料 (狀態) 分開，先定義好 UI 如何呈現，再將資料灌進去，每當資料改變就 render 有變動的元件。

### React Router DOM

用來做 Router 的套件，在切換網頁的時候，可以不用重新刷新整個頁面，提升使用者體驗

### redux

集中管理狀態的 library，用來解決 React 樹狀元件複雜的 state 管理問題

### redux-thunk

搭配 redux 的 middleware，可處理非同步的程式邏輯

### styled-components

是一個 CSS-In-JS 的 library，使我們可以在 JSX 中撰寫 CSS code，還可以接收 component 的 props 值來動態改變 css 樣式。

### React-bootstrap

react 元件的 CSS Framework

### Sweetalert2

響應式的 js 彈窗 library，簡易使用來增加一點美觀效果

### DevDependencies

### Babel

JavaScript 的轉譯器，可將 ES6+ 或是瀏覽器未支援的語法轉為等效且瀏覽器支援的版本

### ESLint

一個 JavaScript Linter，可協助統一 coding style，提高程式碼的品質，更能在執行前幫助我們找出可能的錯誤

### webpack

JavaScript 模組打包工具，可以把需要的檔案全部打包成一個 js 檔案，並且可以使用各種 loaders 跟 plugins 來整合各個開發工具
