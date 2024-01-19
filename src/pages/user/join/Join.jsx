import React, { useState } from "react";
import PageWrapper from "../../../components/base/PageWrapper";
import UserBox from "../components/user-box/UserBox";
import "./Join.scss";
import { useNavigate } from "react-router-dom";

const JoinView = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [repassword, setRePwd] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPwd = (e) => {
    setPwd(e.target.value);
  };
  const handleInputRePwd = (e) => {
    setRePwd(e.target.value);
  };

  return (
    <div className="join">
      <div className="join_inner">
        <div className="join_title">
          <div className="join_title_main">회원가입</div>
          <div className="join_title_sub">
            <span>체</span>험단 이<span>리</span>로 <span>집</span>합 !<br />
            체리집에 가입하고 다양한 체험을 받아보세요 :)
          </div>
        </div>
        <div className="join_form_n_button">
          <form className="join_form">
            <input
              className="button_n_input"
              type="text"
              placeholder="이름"
              onChange={handleInputName}
              value={name}
            />
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
            <input
              className="button_n_input"
              type="text"
              placeholder="비밀번호 확인"
              onChange={handleInputRePwd}
              value={repassword}
            />
          </form>
          {password !== repassword && repassword !== "" ? (
            <div className="join_error">비밀번호가 일치하지 않습니다.</div>
          ) : null}

          <button
            className={`button_n_input send_button`}
            onClick={() => navigate("/")}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

const Join = () => {
  return (
    <PageWrapper>
      <UserBox contents={JoinView()}></UserBox>
    </PageWrapper>
  );
};

export default Join;
