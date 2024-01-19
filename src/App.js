import { Route, Routes } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Join from "./pages/user/join/Join";
import Login from "./pages/user/login/Login";
import Search from "./pages/search/Search";
import Password from "./pages/user/password/Password";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/search" element={<Search />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/password" element={<Password />} />
    </Routes>
  );
}

export default App;
