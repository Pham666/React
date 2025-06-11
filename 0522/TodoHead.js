// src/components/TodoHead.js
import React from 'react';

function TodoHead() {
  // 예시: 오늘 날짜와 총 할 일 개수 표시
  const today = new Date().toLocaleDateString();
  // 실제 state는 useContext 로 가져오시면 됩니다.
  // const todos = useContext(TodoStateContext);
  const todos = []; 

  return (
    <div className="todo-head">
      <h1>{today} 할 일</h1>
      <div>총 {todos.length}개</div>
    </div>
  );
}

export default TodoHead;
