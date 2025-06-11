# 웹 프로그래밍 학습 기록

## 1주차 학습 내용 (2024.03.04)

### HTML (HyperText Markup Language)
웹 페이지의 **구조와 내용**을 정의하는 마크업 언어입니다.
- 태그(Tag)를 사용하여 요소들을 구조화
- 웹 브라우저가 해석하여 사용자에게 표시
- 시맨틱 태그를 활용한 의미있는 구조 작성이 중요

### CSS (Cascading Style Sheets)
HTML로 구성된 웹 페이지에 **디자인과 레이아웃**을 적용하는 언어입니다.
- 색상, 글꼴, 간격, 위치 등 시각적 스타일 정의
- 반응형 웹 디자인 구현 가능
- 선택자를 통한 효율적인 스타일링

---

## 웹 애플리케이션 구조: MPA vs SPA

### MPA (Multi-Page Application)
**여러 개의 HTML 페이지로 구성된 전통적인 방식**

**장점**
- SEO에 최적화 (검색엔진 크롤링 용이)
- 초기 로딩 속도가 빠름
- 서버 사이드 렌더링으로 보안성 높음
- 페이지별 독립적인 관리 가능

**단점**
- **페이지 이동 시 전체 새로고침** 발생
- 많은 서버 요청으로 인한 성능 저하
- 사용자 경험(UX)이 상대적으로 부족

### SPA (Single-Page Application)
**하나의 HTML 페이지에서 동적으로 콘텐츠를 변경하는 방식**

**장점**
- **빠른 페이지 전환** (새로고침 없음)
- 부드럽고 자연스러운 사용자 경험
- 서버 부하 감소, REST API 활용 용이
- 앱과 유사한 사용감 제공

**단점**
- SEO 최적화의 어려움 (SSR 필요)
- 초기 로딩 시간이 길 수 있음 (큰 번들 사이즈)
- 클라이언트 측 보안 이슈 고려 필요

---

## 개발 환경 설정

### Node.js
- **JavaScript 런타임 환경**
- 브라우저 외부에서 JS 코드 실행 가능
- React 개발을 위한 필수 도구
- npm(패키지 매니저) 포함

### IDE (통합 개발 환경)
코드 편집, 디버깅, 빌드, 실행 기능을 통합한 개발 도구

**주요 IDE/에디터**
- **Visual Studio Code** (가장 인기)
- WebStorm
- Sublime Text
- Atom

---

## React 개발 환경

### 패키지 관리 도구 비교

| 구분 | npm (Node Package Manager) | npx (Node Package eXecute) |
|------|----------------------------|----------------------------|
| **역할** | 패키지 **설치 및 관리** | 패키지 **실행** |
| **설치 방식** | 글로벌/로컬 설치 후 사용 | 설치 없이 바로 실행 |
| **주요 용도** | 라이브러리 의존성 관리 | 일회성 명령어 실행 |
| **사용 예시** | `npm install react` | `npx create-react-app` |
| **전역 설치** | 필요시 `-g` 옵션 사용 | 불필요 (자동 다운로드) |

### React 프로젝트 생성 방법

#### CRA (Create React App) - 현재 비추천
```bash
npx create-react-app my-app
```
- Meta(Facebook)에서 더 이상 적극 지원하지 않음
- 무겁고 빌드 속도가 느림
- 커스터마이징의 한계

#### Vite - **현재 추천**
```bash
npm create vite@latest my-app
```

**Vite의 장점**
- **매우 빠른 개발 서버 및 빌드 속도**
- 다양한 프레임워크 지원 (React, Vue, Svelte 등)
- TypeScript, ESLint 기본 설정 지원
- 현대적인 번들링 도구 사용

---

## JSX (JavaScript XML)

### JSX란?
**JavaScript와 HTML을 결합한 React의 문법 확장**
- HTML과 유사한 문법으로 컴포넌트 작성
- Babel을 통해 일반 JavaScript로 변환됨

### JSX의 주요 장점

1. **직관적이고 읽기 쉬운 코드**
   - HTML과 유사한 문법으로 학습 용이
   
2. **JavaScript와 자연스러운 결합**
   - 중괄호 `{}` 내에서 JS 표현식 사용 가능
   
3. **효율적인 조건부 렌더링**
   - 삼항 연산자, 논리 연산자 활용
   
4. **컴포넌트 기반 개발**
   - 재사용 가능한 UI 컴포넌트 작성
   
5. **타입 안정성**
   - TypeScript와 함께 사용시 컴파일 타임 오류 검출

### JSX vs 일반 JavaScript 비교

| 특징 | JSX | 일반 JavaScript |
|------|-----|-----------------|
| **문법** | HTML과 유사 | `React.createElement()` |
| **가독성** | 직관적이고 간결 | 복잡하고 장황 |
| **유지보수** | 쉬움 | 어려움 |
| **개발 속도** | 빠름 | 느림 |
| **변환 과정** | Babel 필요 | 변환 불필요 |

---

## 이번 주 핵심 포인트

1. **웹 개발의 기본 구조** (HTML, CSS) 이해
2. **MPA vs SPA**의 차이점과 각각의 장단점 파악  
3. **Node.js와 npm/npx**의 역할과 차이점 학습
4. **React 개발 환경 설정** - Vite 활용법
5. **JSX 문법**의 이해와 장점 인식

---

---

## 2주차 학습 내용 (2024.03.11)

### 복습 및 기본 개념

#### JavaScript (ECMAScript)
- 웹페이지에서 **동적인 부분을 구현**하기 위한 스크립트 언어
- 정식명칭은 ECMAScript
- 웹사이트가 살아 움직이도록 생명을 불어넣는 역할
- 2015년 ES6가 나오면서 새로운 문법들이 많이 추가되었고, JS 표준화의 발판이 마련

#### 프레임워크 vs 라이브러리

| 구분 | 프레임워크 | 라이브러리 |
|------|------------|------------|
| **제어권** | 프레임워크가 흐름을 제어 | 개발자가 흐름을 제어 |
| **사용 방식** | 정해진 구조와 규칙을 따름 | 필요한 부분만 선택적으로 사용 |
| **예시** | React, Angular, Vue | jQuery, Lodash |

---

## React의 특징

### React의 장점
1. **Virtual DOM**을 사용하여 빠른 업데이트와 렌더링 속도
2. **컴포넌트 기반 구조**로 코드 재사용성 높음
3. 컴포넌트를 활용한 **재사용성 및 유지보수** 용이
4. Meta(Facebook)라는 든든한 지원군
5. 활발한 지식 공유 및 커뮤니티
6. React Native를 통한 **모바일 앱 개발** 가능

### React의 단점
1. **방대한 학습량** - 생태계가 크고 복잡함
2. **State 관리의 복잡도** - 상태 관리가 어려울 수 있음
   - State: 리액트 컴포넌트의 상태를 의미

---

## 개발 도구

### Babel
JavaScript 컴파일러로 다음과 같은 역할을 수행합니다:
1. **Transform syntax** (구문 변환) - 최신 JS 문법을 구버전으로 변환
2. **babel-polyfill**을 통해서 폴리필 기능 지원
3. **JSX and React** - JSX 문법을 일반 JavaScript로 변환

### Webpack
JavaScript로 만든 프로그램을 **배포하기 좋은 형태로 묶어주는** 번들링 도구입니다.

---

## JSX 문법 상세

### JSX 기본 구조
JSX는 반드시 **하나의 부모 요소로 감싸야** 합니다.

```jsx
function App() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>React에서 JSX를 사용합니다.</p>
    </div>
  );
}
```

### JSX에서 JavaScript 표현식 사용
중괄호 `{}`를 사용하여 JavaScript 표현식을 삽입할 수 있습니다.

```jsx
const name = "React";
function App() {
  return <h1>Hello, {name}!</h1>;
}
```

### JSX에서 속성(props) 사용
HTML 속성과 유사하지만 일부는 JavaScript 문법을 따릅니다.

```jsx
const imgUrl = "https://via.placeholder.com/150";
function App() {
  return <img src={imgUrl} alt="Sample Image" />;
}
```

### 조건부 렌더링
삼항 연산자나 논리 연산자를 사용하여 조건부 렌더링을 구현합니다.

```jsx
function App({ isAdmin }) {
  return (
    <div>
      <h1>Hello, User!</h1>
      {isAdmin && <p>관리자 권한이 있습니다.</p>}
    </div>
  );
}
```

### 배열과 반복 렌더링
JSX에서는 `for`문을 직접 사용할 수 없고, `map()` 메서드를 이용해 반복 렌더링을 구현합니다.

```jsx
const fruits = ["Apple", "Banana", "Orange"];
function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

### 이벤트 처리
JSX에서는 `onClick`, `onChange` 등의 속성으로 이벤트를 설정합니다.

```jsx
function App() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## 실습 예제

### 기본 컴포넌트 구조
```jsx
function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

### Props를 활용한 컴포넌트
```jsx
const Book = (props) => {
  return (
    <div>
      <h1>이 책의 이름은 {props.name}입니다.</h1>
      <h1>이 책은 총 {props.numOfPage} 페이지로 이뤄져 있습니다.</h1>
    </div>
  );
};

const Library = (props) => {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} />
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
};

export default Library;
```

---

## 이번 주 핵심 포인트

1. **프레임워크와 라이브러리**의 차이점 이해
2. **React의 장단점** 파악
3. **Babel과 Webpack**의 역할 학습
4. **JSX 문법** 상세 학습 - 표현식, 조건부 렌더링, 반복 렌더링
5. **컴포넌트와 Props** 기본 개념 실습

---

## 다음 주 학습 계획
- State와 useState Hook
- 이벤트 핸들링 심화
- 컴포넌트 생명주기
- 조건부 렌더링 실습
