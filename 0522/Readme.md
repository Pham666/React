# 12주차: React + styled-components 기반의 Todo List 앱

## 사용 기술 스택

- **React**: 컴포넌트 기반 UI 라이브러리  
- **styled-components**: CSS-in-JS 방식의 스타일링 도구  
- **react-icons**: 다양한 아이콘 사용을 위한 라이브러리  
- **Context API + useReducer**: 상태 및 전역 상태 관리  

---

## 주요 컴포넌트 구성

| 컴포넌트     | 역할 설명 |
|--------------|-----------|
| `TodoTemplate` | 전체 앱 레이아웃 정의. 중앙 정렬된 틀 제공 |
| `TodoHead`     | 오늘 날짜, 요일, 남은 할 일 개수 표시 |
| `TodoList`     | 현재 할 일 목록을 렌더링 |
| `TodoItem`     | 개별 할 일 항목 표시 및 완료/삭제 기능 제공 |
| `TodoCreate`   | 새로운 할 일을 추가할 수 있는 입력 폼과 버튼 |

---

## 상태 관리 구조

- **TodoProvider**  
  `Context API`를 활용하여 전역 상태를 관리하는 공급자 역할 수행  

- **커스텀 Hook 분리**
  - `useTodoState`: 할 일 목록 상태를 읽어올 수 있는 Hook
  - `useTodoDispatch`: 할 일 추가/삭제/완료 액션을 디스패치
  - `useTodoNextId`: 다음에 생성될 할 일의 ID를 추적  

- **useReducer**
  상태 변경을 명확하게 처리하기 위해 `reducer` 함수 사용  
  지원하는 액션 타입: `CREATE`, `TOGGLE`, `REMOVE`

---

## 구현된 주요 기능

- 할 일 추가, 완료 처리, 삭제 기능
- 오늘의 날짜 및 요일 표시 (`toLocaleDateString()` 사용)
- 컴포넌트 리렌더링 최적화를 위한 `React.memo` 적용
- `createGlobalStyle`을 통한 글로벌 스타일 정의

---

## 프로젝트 특징 요약

이 프로젝트는 **React의 상태 관리 기법과 styled-components를 실전처럼 구성**하여 연습하는 것을 목표로 합니다.  
컴포넌트를 역할별로 분리하고, Context API와 커스텀 훅을 통해 전역 상태를 다루며,  
불필요한 렌더링을 최소화해 성능과 구조 모두 고려된 앱을 구현합니다.

