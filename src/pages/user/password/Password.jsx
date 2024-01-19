import React, { useState } from "react";
import PageWrapper from "../../../components/base/PageWrapper";
import UserBox from "../components/user-box/UserBox";
import "./Password.scss";
import { useNavigate } from "react-router-dom";

const PasswordView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleInputNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleInputReNewPassword = (e) => {
    setReNewPassword(e.target.value);
  };

  return (
    <div className="password">
      <div className="password_inner">
        <div className="password_title">
          <div className="password_title_main">비밀번호 재설정</div>
        </div>
        <div className="password_form_n_button">
          <form className="password_form">
            <input
              className="button_n_input"
              type="text"
              placeholder="이메일"
              onChange={handleInputEmail}
              value={email}
            />
            <input
              className="button_n_input"
              type="text"
              placeholder="기존 비밀번호"
              onChange={handleInputPassword}
              value={password}
            />
            <input
              className="button_n_input"
              type="text"
              placeholder="새 비밀번호"
              onChange={handleInputNewPassword}
              value={newPassword}
            />
            <input
              className="button_n_input"
              type="text"
              placeholder="새 비밀번호 확인"
              onChange={handleInputReNewPassword}
              value={reNewPassword}
            />
          </form>
          {newPassword !== reNewPassword && reNewPassword !== "" ? (
            <div className="password_error">
              새 비밀번호가 일치하지 않습니다.
            </div>
          ) : null}

          <button
            className={`button_n_input send_button`}
            onClick={() => navigate("/")}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

const Password = () => {
  return (
    <PageWrapper>
      <UserBox contents={PasswordView()}></UserBox>
    </PageWrapper>
  );
};

export default Password;
