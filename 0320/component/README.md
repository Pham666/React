# 3주차: React의 Element와 Component

## Element란?
- **정의**: React에서 Element는 UI를 구성하는 가장 작은 단위로, JavaScript 객체입니다.  
- **특징**: HTML 요소처럼 보이지만, 실제 DOM이 아니라 *Virtual DOM*에 존재합니다.

## Element 생성 방법

### JSX 사용
```jsx
const element = <div>Hello, world!</div>;
```
- HTML과 유사한 문법으로, React Element를 손쉽게 작성할 수 있습니다.

### React.createElement() 함수
```javascript
const element = React.createElement("div", null, "Hello, world!");
```
- JSX를 사용하지 않고, React API로 직접 Element를 생성할 수 있습니다.

## Element와 Component의 차이
| 구분 | React Element | React Component |
|------|------------------|--------------------|
| 정의 | UI의 가장 작은 단위 | 여러 Element를 포함하는 UI 블록 |
| 형태 | 불변 객체 | 함수 또는 클래스 |
| 재사용 | 불가능 | 가능 |
| 업데이트 | 새 Element 생성 필요 | 상태 변화에 따라 자동 렌더링 |

---

## 렌더링 과정

### 1. 초기 렌더링
- 애플리케이션 실행 시, 컴포넌트가 렌더링되고 Virtual DOM이 만들어집니다.
- Virtual DOM은 실제 DOM 업데이트 전의 가상 트리로, 변경 사항을 미리 계산합니다.

### 2. 상태 변화 감지
- `state`나 `props`가 바뀌면, React는 컴포넌트를 다시 렌더링하여 새로운 Virtual DOM을 생성합니다.

### 3. 비교(Diff)
- React는 이전 Virtual DOM과 새로운 Virtual DOM을 비교(*Diffing*)해 변경된 부분만 찾아냅니다.

### 4. 실제 DOM 업데이트
- 변경된 부분만 실제 DOM에 반영하여, 성능을 최적화합니다.

---

## Component란?
- 화면을 구성하는 **독립적이고 재사용 가능한 UI 조각**입니다.
- 컴포넌트로 코드를 나누면 유지보수가 쉬워지고, 재사용성이 높아집니다.

### 작성 규칙
✅ **이름**: 반드시 대문자로 시작 (예: `UserProfile`)  
✅ **파일명**: 보통 PascalCase로 작성 (예: `MyComponent.jsx`)  
✅ **역할**: 한 컴포넌트는 한 가지 역할만 담당  
✅ **재사용성**: 부모 컴포넌트로부터 필요한 데이터만 받아 사용  

---

## 함수형 vs 클래스형 컴포넌트
| 구분 | 함수형 컴포넌트 | 클래스형 컴포넌트 |
|------|--------------------|--------------------|
| 선언 방식 | JavaScript 함수 | ES6 클래스 |
| 상태 관리 | `useState`, `useReducer` 등의 Hooks 사용 | `this.state` 사용 |
| 라이프사이클 | `useEffect` 등 Hooks로 대체 | `componentDidMount` 등 메서드 사용 |
| 문법 | 간결, 가독성 좋음 | 문법이 비교적 길고 복잡 |
| 현재 추세 | Hooks 등장 이후 함수형 권장 | 레거시 코드 유지에 여전히 사용됨 |

### 예제 코드

**함수형**
```jsx
import React from "react";

export default function App() {
  const name = "React";
  return <div className="react">{name}</div>;
}
```

**클래스형**
```jsx
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "React";
    return <div className="react">{name}</div>;
  }
}
```

---

## Props (Properties)
- **정의**: 부모 컴포넌트에서 자식 컴포넌트로 전달되는 읽기 전용 데이터  
- **특징**: 단방향 데이터 흐름. 자식은 `props`를 변경할 수 없고, 전달받은 값을 그대로 사용합니다.

### 예제
```jsx
// 부모 컴포넌트
function App() {
  return <Greeting name="React" />;
}

// 자식 컴포넌트
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

---

## 보충: Virtual DOM의 이점
- 실제 DOM 조작은 비용이 큰 작업입니다.
- Virtual DOM은 최소한의 DOM 업데이트만 수행해 렌더링 속도를 높입니다.

---

💡 *Tip*: React에서는 가독성과 유지보수를 위해 컴포넌트를 잘게 나누고, 각 컴포넌트는 하나의 역할에 충실하게 설계하는 것이 좋습니다.
