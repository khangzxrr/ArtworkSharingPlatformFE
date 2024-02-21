import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LikePost from "./LikePost";
import Comment from "./Comment";
// import Modal from "./Modal";
import useInput from "../../hook/useInput";
// import { timeSince } from "../utils";
import { MoreIcon, CommentIcon, InboxIcon, BookmarkIcon } from "./Icons";
import styles from "./post.module.css";
import { Button } from "antd";



const Post = ({ post }) => {
  const comment = useInput("");
  const history = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const [newComments, setNewComments] = useState([]);
  console.log("🚀 ~ Post ~ newComments:", newComments)
  const [likesState, setLikes] = useState(post.likesCount);

  const incLikes = () => setLikes(likesState + 1);
  const decLikes = () => setLikes(likesState - 1);

  const handleAddComment = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    setNewComments([
      ...newComments,
      ...[
        {
          _id: Math.random() * 1000,
          user: {
            avatar:
              "https://play-lh.googleusercontent.com/pzM2gijW4MrnFTd7-DHcdpKyhIaP66K1f-9C9l3VFfYAbqeiKXd-ak1_YppBJJ0iAWM",
            username: "username",
          },
          text: comment.value,
        },
      ],
    ]);
      comment.setValue("");
    }
  };

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postHeaderWrapper}>
        <div className={styles.postHeader}>
          <img
            className={styles.avatar}
            src={post.user?.avatar}
            alt="avatar"
            onClick={() => history(`/${post.user?.username}`)}
          />
          <h3
            className="pointer"
            onClick={() => history(`/${post.user?.username}`)}
          >
            {post.user?.username}
          </h3>
        </div>
        {post.isMine && <MoreIcon onClick={() => setShowModal(true)} />}
      </div>

      <img className={styles.postImg} src={post.img} alt="post-img" />

      <div className={styles.postActions}>
        <LikePost
          isLiked={post.isLiked}
          postId={post._id}
          incLikes={incLikes}
          decLikes={decLikes}
        />
        <CommentIcon onClick={() => history(`/p/${post._id}`)} />
        {/* <InboxIcon /> */}
        <Button type="primary">Buy artwork</Button>
      </div>

      <div className={styles.likesCaptionComments}>
        {likesState !== 0 && (
          <span className="likes bold">
            {likesState} {likesState > 1 ? "likes" : "like"}
          </span>
        )}

        <p>
          <span
            onClick={() => history(`/${post.user?.username}`)}
            className="pointer username bold"
          >
            {/* {post.user?.username} */}
          </span>
          {post.caption}
        </p>

        {post.commentsCount > 2 && (
          <span
            onClick={() => history(`/p/${post._id}`)}
            className={styles.viewComments}
          >
            View all {post.commentsCount} comments
          </span>
        )}

        {post.comments?.slice(0, 2).map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}

        {newComments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}

        <span className="secondary">1m ago</span>
      </div>

      <textarea
        columns="3"
        placeholder="Add a Comment"
        value={comment.value}
        onChange={comment.onChange}
        onKeyDown={handleAddComment}
      ></textarea>
    </div>
  );
};

export default Post;
