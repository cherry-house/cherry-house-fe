import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <nav>
        <div className="footer">
          <div className="footerBox">
            <div className="footerTitle">CherryHouse 2024</div>
            <div className="footerDocs">
              <p>이용약관</p>
              <p>|</p>
              <p>개인정보처리방침</p>
              <p>|</p>
              <p>오픈소스 라이선스</p>
            </div>
            <div className="footerDocs">문의: contact@cherryhouse.com</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
