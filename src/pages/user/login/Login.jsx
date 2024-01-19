import React, { useState } from "react";
import PageWrapper from "../../../components/base/PageWrapper";
import UserBox from "../components/user-box/UserBox";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as KaKao } from "../../../images/KaKao_icon.svg";
import { ReactComponent as Google } from "../../../images/Google_icon.svg";
import "./Login.scss";

const LoginView = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPwd = (e) => {
    setPwd(e.target.value);
  };

  return (
    <div className="login">
      <div className="login_inner">
        <div className="login_title">
          <div className="login_title_main">로그인</div>
          <div className="login_title_sub">
            <span>체</span>험단 이<span>리</span>로 <span>집</span>합 !<br />
            체리집에서 다양한 체험을 경험해보세요 :)
          </div>
        </div>
        <div className="login_form_n_button">
          <form className="login_form">
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
              placeholder="비밀번호"
              onChange={handleInputPwd}
              value={password}
            />
          </form>
          <div className="find_password_text">
            비밀번호를 잊으셨나요?&nbsp;&nbsp;
            <Link to="/password" className="find_password">
              비밀번호 재설정
            </Link>
          </div>
          <button
            className={`button_n_input send_button`}
            onClick={() => navigate("/password")}
          >
            로그인
          </button>
          <div className="grey_text_line">
            <hr />
            <div className="grey_text">또는</div>
            <hr />
          </div>
          <div className="social_login">
            <button
              className={"social_login_button"}
              onClick={() => navigate("/")}
            >
              <KaKao className="social_logo" onClick={() => navigate("/")} />
            </button>
            <button
              className={"social_login_button"}
              onClick={() => navigate("/")}
            >
              <Google className="social_logo" onClick={() => navigate("/")} />
            </button>
            <button
              className={`button_n_input or_join_button`}
              onClick={() => navigate("/join")}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <PageWrapper>
      <UserBox contents={LoginView()}></UserBox>
    </PageWrapper>
  );
};

export default Login;
