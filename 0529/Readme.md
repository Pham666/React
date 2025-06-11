# 13주차: React Router 기초 정리

## 1. React Router란?
- SPA(Single Page Application)에서 **클라이언트 측 라우팅**을 담당하는 대표 라이브러리  
- URL 경로에 따라 서로 다른 컴포넌트를 렌더링해 페이지 전환처럼 보이게 함  
- 페이지 새로고침 없이 화면을 전환하므로 부드러운 사용자 경험 제공

---

## 2. 설치
```bash
npm install react-router-dom
# 또는
yarn add react-router-dom
```

---

## 3. 기본 사용 패턴

### BrowserRouter
```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* 라우트 설정 */}
    </BrowserRouter>
  );
}
```
- HTML5 History API를 이용한 일반적인 라우터  
- 배포 시 서버가 임의의 경로를 모두 `index.html`로 돌려주도록 설정 필요

### Routes 와 Route
```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* 와일드카드(404) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```
- `Routes` : 여러 개의 Route를 그룹화  
- `path="*"` : 정의되지 않은 모든 경로 처리

### Link와 NavLink
```jsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>

<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? "active" : undefined)}
>
  About
</NavLink>
```
- `<Link>` : 페이지 새로고침 없이 이동  
- `<NavLink>` : 현재 경로(active) 여부에 따라 스타일 제어

### useNavigate
```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // 인증 로직 …
    navigate("/dashboard");        // push
    // navigate("/dashboard", { replace: true }); // history 교체
  };
  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 4. 중첩(Nested) 라우트
```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<Overview />} />          {/* /dashboard */}
  <Route path="settings" element={<Settings />} />{/* /dashboard/settings */}
</Route>
```
- 부모 컴포넌트 내부에서 `<Outlet />`으로 자식 라우트를 렌더링

---

## 5. URL 파라미터와 쿼리

### 동적 세그먼트(params)
```jsx
<Route path="/posts/:postId" element={<Post />} />

function Post() {
  const { postId } = useParams(); // { postId: '123' }
}
```

### 쿼리 스트링(search params)
```jsx
import { useSearchParams } from "react-router-dom";

function List() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
}
```

---

## 6. Private Route(인증 라우트) 예시
```jsx
function PrivateRoute({ children }) {
  const isLoggedIn = useAuth(); // 사용자 인증 여부
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

<Route path="/mypage" element={<PrivateRoute><MyPage /></PrivateRoute>} />
```

---

## 7. 배포 환경 주의 사항
- **BrowserRouter** 사용 시 서버 측에서 모든 경로를 `index.html`로 포워딩해야 404 오류 방지  
- GitHub Pages와 같이 History API를 지원하지 않는 환경에서는 **HashRouter** 선택 가능

---

React Router를 활용하면 SPA에서도 페이지 전환 느낌을 자연스럽게 구현할 수 있습니다. 필요에 따라 `useLocation`, `useMatch`, `createBrowserRouter` 등 고급 API도 확인해 보세요.
