import React from "react";
import PageWrapper from "../../components/base/PageWrapper";
import styles from "./PostDetail.module.scss";
import { ReactComponent as Profile } from "../../images/profile_ex.svg";
import { ReactComponent as HeartOutline } from "../../images/heart_outline.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Chat } from "../../images/chat.svg";
import { ReactComponent as Img1 } from "../../images/img_1.svg";
import { ReactComponent as Img2 } from "../../images/img_2.svg";
import { ReactComponent as Img3 } from "../../images/img_3.svg";

const hashtags = ["헤어모델", "무료헤어모델", "얼굴공개", "서면미용실"];

const PostTitle = () => {
  return (
    <header className={styles.title}>
      <div className={styles.title_left}>
        <div className={styles.category_date}>
          <span className={styles.category}>헤어</span>
          <span className={styles.date}>2024.01.01</span>
        </div>
        <div>
          <span className={styles.title_text}>부산 헤어 모델 구해요 ♥</span>
        </div>

        <div className={styles.writer}>
          <Profile className={styles.writer_image} />
          <span className={styles.writer_name}>이피글</span>
        </div>
      </div>
      <div className={styles.writer_address}>
        <span className={styles.writer_address_detail}>
          피글 아카데미 법원점
        </span>
        <span className={styles.writer_address_basic}>
          부산광역시 연제구 법원북로 16
        </span>
      </div>
    </header>
  );
};

const PostContent = () => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [likedNum, setLikedNum] = React.useState(20);

  const onClickLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikedNum(likedNum - 1);
    } else {
      setLikedNum(likedNum + 1);
    }
  };

  return (
    <body className={styles.contents}>
      <div className={styles.content_main}>
        <div className={styles.images}>
          <Img1 className={styles.image} />
          <Img2 className={styles.image} />
          <Img3 className={styles.image} />
        </div>
        <div className={styles.hashtags}>
          {hashtags.map((hashtag, index) => (
            <span key={index}> #{hashtag} </span>
          ))}
        </div>
        <div className={styles.text}>
          서면 피글 미용실에서 무료로 헤어 모델 하실 분 구합니다.
          <br /> 1년차 미용사입니다. <br />
          커트, 염색, 펌 모든 시술 가능하며 소정의 약값이 발생할 수 있습니다.{" "}
          <br />
          포트폴리오 작업으로 전/후 얼굴 공개 사진 촬영이 진행됩니다. <br />
          현재 모발 길이 상태, 탈색/염색/파마 유무와 사진과 함께 채팅 넣어주세요
          ♡
        </div>
      </div>
      <div className={styles.likes_n_comments}>
        <div className={styles.likes}>
          <div onClick={onClickLike} className={styles.likes_icon}>
            {isLiked ? <Heart /> : <HeartOutline />}
          </div>
          <span className={styles.likes_count}>{likedNum}</span>
        </div>
        <div className={styles.chat}>
          <div className={styles.chat_icon}>
            <Chat />
          </div>
          <span className={styles.chat_text}>채팅</span>
        </div>
      </div>
    </body>
  );
};

const PostDetail = () => {
  return (
    <PageWrapper>
      <PostTitle />
      <PostContent />
    </PageWrapper>
  );
};

export default PostDetail;
