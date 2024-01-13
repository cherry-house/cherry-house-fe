import { Route, Routes } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import Join from "./pages/user/join/Join";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default App;
