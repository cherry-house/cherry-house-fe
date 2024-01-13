import { Route, Routes } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Join from "./pages/user/join/Join";
import Login from "./pages/user/login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
