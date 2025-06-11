# 7주차: React의 Hooks 기초

## Hook 개념
- **정의**: Hook은 React 함수형 컴포넌트에서 상태 관리나 생명주기 관련 기능을 사용할 수 있도록 도와주는 함수입니다.
- **역할**: 클래스형 컴포넌트의 한계를 극복하고, 함수형 컴포넌트로도 동적인 기능을 구현할 수 있게 해줍니다.

---

## useState
- **목적**: 상태를 선언하고, 그 상태를 관리할 수 있도록 해줍니다.

### 사용법
```javascript
const [state, setState] = useState(초기값);
```

### 간단한 예시
```javascript
const [count, setCount] = useState(0);
setCount(count + 1);
```

- **특징**: 상태가 바뀌면 자동으로 컴포넌트가 다시 렌더링됩니다.

---

## useEffect
- **목적**: 컴포넌트의 생명주기와 관련된 작업을 수행할 수 있게 합니다. 예를 들어, 데이터 가져오기나 구독 처리 등을 담당합니다.

### 사용법
```javascript
useEffect(() => {
  // 실행할 작업
  return () => {
    // 컴포넌트가 언마운트되기 직전에 실행할 작업
  };
}, [의존성]);
```

### 간단한 예시
```javascript
useEffect(() => {
  console.log("컴포넌트가 마운트되었습니다.");
  return () => console.log("컴포넌트가 언마운트됩니다.");
}, []);
```

---

## useMemo
- **목적**: 복잡하거나 계산 비용이 큰 연산의 결과를 기억해두고, 의존성 값이 바뀌지 않는 한 다시 계산하지 않도록 최적화합니다.

### 사용법
```javascript
const memoizedValue = useMemo(() => 계산함수, [의존성]);
```

### 예시
```javascript
const result = useMemo(() => heavyCalculation(a, b), [a, b]);
```

- **주의**: 의존성이 바뀌지 않으면 이전 값을 그대로 사용합니다.

---

## useCallback
- **목적**: 함수를 메모이제이션하여, 불필요하게 매번 새로운 함수가 만들어지는 것을 방지합니다.

### 사용법
```javascript
const memoizedFunction = useCallback(() => {
  // 함수 내용
}, [의존성]);
```

### 예시
```javascript
const handleClick = useCallback(() => {
  console.log("버튼이 클릭되었습니다.");
}, []);
```

- **활용**: 특히 자식 컴포넌트에 콜백 함수를 props로 전달할 때 유용합니다.

---

## useRef
- **목적**: DOM 요소를 직접 다룰 수 있는 참조를 만들거나, 렌더링과 상관없이 값을 저장하는 데 사용됩니다.

### 사용법
```javascript
const ref = useRef(초기값);
```

### 예시
```javascript
const inputRef = useRef(null);

<input ref={inputRef} />;
inputRef.current.focus();
```

- **특징**: ref의 값이 바뀌어도 컴포넌트는 다시 렌더링되지 않습니다.

---

## 사용자 정의(Custom) Hook
- **정의**: 여러 Hook을 조합해, 공통으로 반복되는 로직을 재사용할 수 있도록 만든 함수입니다.

### 사용 예시
```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increase = () => setCount((prev) => prev + 1);
  return { count, increase };
}

const { count, increase } = useCounter();
```

- **특징**: 컴포넌트 구조를 바꾸지 않고도, 중복된 로직을 여러 곳에서 손쉽게 쓸 수 있습니다.

---

## 주요 라이브러리 예시

- **UI 프레임워크**: Material-UI, Ant Design, Chakra UI, React Bootstrap  
- **상태 관리**: Redux, MobX, Recoil, Zustand  
- **라우팅**: React Router  
- **폼 처리**: Formik, React Hook Form  
- **스타일링**: Styled Components, Emotion  
- **데이터 요청**: Axios, Fetch API, React Query  
- **애니메이션**: Framer Motion, React Spring  
- **테스트**: Jest, React Testing Library  

---

7주차 수업에서는 함수형 컴포넌트의 다양한 Hook을 통해 상태 관리, 최적화, DOM 참조 등 여러 기술을 실제 예시와 함께 학습했습니다.
