import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import Join from "../pages/user/join/Join";
import Login from "../pages/user/login/Login";
import Password from "../pages/user/password/Password";
import PostRegister from "../pages/post/PostRegister";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/write" element={<PostRegister />} />
      </Routes>
    </>
  );
};

export default MainRoute;
