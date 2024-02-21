import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./post.module.css";


const Comment = ({ comment }) => {
  const history = useNavigate();

  return (
    <div className={styles.commentWrapper} style={{ padding: "0.4rem 0" }}>
      <img
        className={styles.avatar}
        onClick={() => history(`/${comment.user.username}`)}
        src={comment.user.avatar}
        alt="avatar"
      />

      <div style={{ display: "grid" }}>
        <strong
          onClick={() => history(`/${comment.user.username}`)}
          className="bold pointer"
        >
          {comment.user.username}
        </strong>
        <span>{comment.text}</span>
      </div>
    </div>
  );
};

export default Comment;
