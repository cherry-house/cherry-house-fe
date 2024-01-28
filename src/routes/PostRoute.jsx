import { Route, Routes } from "react-router-dom";
import PostDetail from "../pages/post/PostDetail";

const PostRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/post" element={<PostDetail />} />
        {/* <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/post/:id/edit" element={<PostDetail />} /> */}
      </Routes>
    </>
  );
};

export default PostRoute;
