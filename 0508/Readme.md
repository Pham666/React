# 9주차: Event Handling & Conditional Rendering

## 1. 이벤트 처리 (Event Handling in React)

### 기본 개념
- JSX에서 이벤트는 **camelCase**로 작성합니다.
  ```jsx
  <button onClick={handleClick}>클릭</button>
  ```
- 이벤트 핸들러 함수는 일반 JavaScript 함수처럼 정의합니다.
  ```jsx
  function handleClick(e) {
    // 기본 동작 방지
    e.preventDefault();
  }
  ```
- React에서는 브라우저의 기본 이벤트 객체 대신 **SyntheticEvent**를 사용하여 브라우저 간 호환성을 제공합니다.

### 주요 메서드
- `event.preventDefault()`: 기본 동작 방지
- `event.stopPropagation()`: 이벤트 전파 중단
- `useCallback()`: 이벤트 핸들러를 메모이제이션하여 렌더링 최적화 가능

### 함수형 컴포넌트 예시
```jsx
function Button() {
  function handleClick() {
    alert("버튼이 클릭됨!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

### 인자 전달 예시
```jsx
function GreetButton() {
  const greet = (name) => alert(`${name}님 안녕하세요`);
  return <button onClick={() => greet("홍길동")}>인사하기</button>;
}
```

---

## 2. 클래스 컴포넌트에서의 이벤트 바인딩

### 예시: 토글 버튼
```jsx
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.handleClick = this.handleClick.bind(this); // 메서드 바인딩
  }

  handleClick() {
    this.setState((prev) => ({ isOn: !prev.isOn }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isOn ? "ON" : "OFF"}</button>;
  }
}
```

---

## 3. 조건부 렌더링 (Conditional Rendering)

### 삼항 연산자
```jsx
<h1>{isLoggedIn ? "환영합니다!" : "로그인 해주세요."}</h1>
```

### 논리 연산자
```jsx
{hasMessage && <p>새로운 메시지가 도착했습니다!</p>}
```

### if 문
```jsx
if (isLoggedIn) {
  return <Welcome />;
} else {
  return <PleaseLogin />;
}
```

---

## 4. 실습 예제: 상태 + 이벤트 핸들링 결합

```jsx
function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && <p>이 메시지가 보입니다!</p>}
    </div>
  );
}
```

- 버튼 클릭으로 상태를 토글하며 조건부 렌더링을 구현합니다.

---

이번 주차에서는 React에서의 이벤트 처리 방식과 조건부 렌더링의 다양한 표현법을 실습을 통해 익혔습니다. 함수형과 클래스형 컴포넌트 모두에 적용되는 개념을 비교하여 학습하는 것이 핵심입니다.
