# 11주차: Lists & Keys, Lifting State Up

## 1. Lists & Keys

### 핵심 개념
- 배열을 기반으로 컴포넌트를 렌더링할 때는 `map()` 함수와 `key` 속성이 필수적으로 사용됩니다.
- `map()`은 배열을 반복하여 JSX 요소로 변환합니다.
- `key`는 각 항목을 고유하게 식별하기 위한 속성으로, 리렌더링 시 성능 최적화에 매우 중요합니다.

### 예제 코드
```jsx
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

- 각 `<li>` 요소에 `key={user.id}`를 부여하여 고유성을 보장합니다.

---

## 2. Lifting State Up

### 핵심 개념
- 두 개 이상의 컴포넌트가 동일한 상태를 공유해야 할 때, **상태를 공통 부모 컴포넌트로 올리는 방식**을 사용합니다.
- 이를 Lifting State Up이라고 합니다.
- 자식 컴포넌트는 props를 통해 상태 값과 변경 함수(setState)를 전달받아 사용합니다.

### 예제 코드
```jsx
function Parent() {
  const [text, setText] = useState("");

  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </>
  );
}

function ChildA({ text, setText }) {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function ChildB({ text }) {
  return <p>{text}</p>;
}
```

- `Parent` 컴포넌트가 상태를 보유하고, `ChildA`는 값을 수정, `ChildB`는 값을 표시합니다.
- 이런 구조를 통해 상태 일관성과 데이터 흐름을 명확히 할 수 있습니다.

---

이번 주차에서는 React에서의 배열 렌더링 방식과 상태를 효과적으로 공유하는 방법을 학습했습니다. 이를 통해 컴포넌트 간 데이터 흐름에 대한 이해도를 높일 수 있습니다.
