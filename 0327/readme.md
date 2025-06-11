# 4주차: React의 State와 Component LifeCycle

## State란?
- **정의**: State는 React 컴포넌트 내부에서 동적으로 변화하는 데이터를 관리하는 핵심 개념입니다.
- **역할**: 사용자의 상호작용에 따라 UI를 동적으로 바꿀 수 있도록 해줍니다.
- **특징**:
  - 컴포넌트의 상태를 나타내는 JavaScript 객체입니다.
  - 컴포넌트가 렌더링될 때 state 값이 사용되며, state가 변경되면 React가 자동으로 다시 렌더링을 수행합니다.
- **중요성**: State를 이해하고 적절히 활용하는 것은 React 개발의 기본이자 필수 능력입니다.

---

## State의 동작 방식
- State는 변경 가능한 데이터이지만, 컴포넌트 외부에서 직접 수정할 수 없습니다.
- 오직 React가 제공하는 메서드를 통해 변경해야 하며, 변경 시 자동으로 다시 렌더링됩니다.

---

## Component LifeCycle
React 컴포넌트는 다음과 같은 생명주기 단계를 거칩니다.

### 1️⃣ 마운트 (Mount)
- 컴포넌트가 생성되어 화면에 나타나는 단계입니다.

### 2️⃣ 업데이트 (Update)
- 컴포넌트의 props나 state가 변경될 때 발생합니다.
- React는 변경된 내용을 Virtual DOM과 비교하여, 필요한 부분만 실제 DOM에 반영합니다.

### 3️⃣ 언마운트 (Unmount)
- 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않을 때 발생합니다.
- 컴포넌트가 메모리에서 해제되며, 정리 작업(clean-up)을 수행할 수 있습니다.

---

## 클래스형 컴포넌트의 생명주기 메서드 예제

```jsx
import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    // 초기 state 설정
    this.state = { count: 0 };
    console.log('constructor 호출: 초기 state 설정');
  }

  // 컴포넌트가 마운트된 후 한 번만 호출
  componentDidMount() {
    console.log('componentDidMount 호출: 컴포넌트가 화면에 나타남');
  }

  // 컴포넌트가 업데이트된 후 호출
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate 호출: state 또는 props가 변경됨');
  }

  // 컴포넌트가 언마운트되기 전에 호출
  componentWillUnmount() {
    console.log('componentWillUnmount 호출: 컴포넌트가 제거되기 전');
  }

  // 버튼 클릭 시 state를 업데이트하는 메서드
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render 호출: UI 렌더링');
    return (
      <div>
        <p>현재 카운트: {this.state.count}</p>
        <button onClick={this.handleClick}>카운트 증가</button>
      </div>
    );
  }
}

export default LifecycleExample;
```

---

## 함수형 컴포넌트의 라이프사이클 대응
- 함수형 컴포넌트에서는 생명주기 메서드를 직접 사용하지 않습니다.
- 대신 **`useEffect` 훅**을 사용하여 마운트, 업데이트, 언마운트 시점의 작업을 처리합니다.

---

## 정리
- **마운트**: 컴포넌트가 화면에 나타날 때  
- **업데이트**: props나 state가 변경될 때  
- **언마운트**: 더 이상 화면에 표시되지 않을 때  

State와 생명주기를 이해하면 React에서의 동적 UI 구현과 효율적인 렌더링을 손쉽게 다룰 수 있습니다.
