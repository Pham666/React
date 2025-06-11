import React, {useState, useEffect} from 'react';
function Counter3(props) {
const [count, setCount] = useState(0);
//componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
useEffect(()=> {
//브라우저 API를 사용해서 document의 title을 업데이트합니다.
document.title = `You clicked ${count} times`;
});
return (
<div>
<p>총 {count}번 클랙했습니다.</p>
<button onClick={() => setCount(count + 1)}>
클릭
</button>
</div>
);
}
export default Counter3;
Counter3.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Counter3 from './chapter_07/Counter3';
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter3 />)