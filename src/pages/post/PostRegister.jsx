import React, { useState } from "react";
import styles from "./PostRegister.module.scss";
import PageWrapper from "../../components/base/PageWrapper";
import { ReactComponent as FileIcon } from "../../images/file_icon.svg";

const PostRegisterView = () => {
  const [postImages, setPostImages] = useState([]);
  // const [previewImages, setPreviewImages] = useState([]);

  const uploadImageHandler = (e) => {
    const nowSelectedImage = e.target.files;
    const nowImageURLList = [...postImages];

    for (let i = 0; i < nowSelectedImage.length; i++) {
      const nowImageURL = URL.createObjectURL(nowSelectedImage[i]);
      nowImageURLList.push(nowImageURL);
    }
    setPostImages(nowImageURLList);
    console.log(nowSelectedImage);
    console.log(nowImageURLList);
  };
  console.log(postImages);
  return (
    <div className={styles.posting}>
      <div className={styles.posting_box}>
        <input
          className={styles.title}
          placeholder="제목을 입력해주세요"
        ></input>
        <div className={styles.select}>
          <div className={styles.select_category}>
            <span>카테고리</span>
            <span className={styles.category}></span>
          </div>
          <div className={styles.select_address}>
            <span>위치</span>
            <span className={styles.address}></span>
          </div>
          <div className={styles.select_hashtag}>
            <span>태그</span>
            <span className={styles.hashtag}></span>
          </div>
        </div>
        <div className={styles.content}>
          내용
          <textarea
            className={styles.content_text}
            placeholder="내용을 입력해주세요"
          ></textarea>
        </div>
        <div className={styles.images}>
          <div className={styles.file_box}>
            <label for="file_icon">
              <div className={styles.file_icon}>
                <FileIcon className={styles.file_icon_image} />
                <div>이미지 추가</div>
              </div>
            </label>
            <input
              id="file_icon"
              type="file"
              multiple="multiple"
              accept=".jpg, .jpeg, .png"
              className={styles.image_button}
              onChange={uploadImageHandler}
            />
          </div>

          {postImages.map((image, index) => (
            <img
              className={styles.image_preview}
              key={index}
              src={image}
              alt=""
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>취소</button>
          <button className={styles.button_pink}>등록</button>
        </div>
      </div>
    </div>
  );
};

const PostRegister = () => {
  return (
    <PageWrapper>
      <PostRegisterView />
    </PageWrapper>
  );
};

export default PostRegister;
