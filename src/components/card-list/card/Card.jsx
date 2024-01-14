import React from "react";
import "./Card.scss";
import { ReactComponent as Profile } from "../../../images/profile.svg";
import { ReactComponent as MapIcon } from "../../../images/map_icon.svg";

const Card = () => {
  return (
    <div>
      <div className="box">
        <p className="profileTitle">
          <Profile className="profile" />
          <div className="text">
            <span className="title">부산 헤어 모델 구해요 ♥</span>
            <span className="hashtags">
              # 헤어모델 #무료헤어모델 #얼굴공개 #서면미용실{" "}
            </span>
          </div>
        </p>

        <div className="sideText">
          <div className="address">
            <span className="shop">
              <MapIcon />
              &nbsp; 피글 아카데미 서면점
            </span>
            <span className="detailAddress">해운대로 177번길</span>
          </div>
          <p className="distance">
            설정 위치로부터 <span className="num">29km</span> 떨어져있어요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
