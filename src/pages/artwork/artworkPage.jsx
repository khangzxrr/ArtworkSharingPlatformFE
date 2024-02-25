import React, { useEffect,useRef,useState } from "react";
import styles from "./index.module.css";
import Post from "../../components/post";
function Artwork() {
  const feed = [
    {
      _id: 1,
      user: {
        avatar:
          "https://static.vecteezy.com/system/resources/previews/015/551/101/non_2x/creative-letter-gg-logo-gaming-esport-with-shield-and-sword-design-ideas-vector.jpg",
        username: "username",
      },
      caption: "caption",
      isMine: false,
      img: "https://pbs.twimg.com/media/FvpBu6vXwAAAKe4.jpg",
      isLiked: false,
      likesCount: 0,
      commentsCount: 0,
      comments: [
        {
          _id: 1,
          user: {
            avatar:
              "https://play-lh.googleusercontent.com/pzM2gijW4MrnFTd7-DHcdpKyhIaP66K1f-9C9l3VFfYAbqeiKXd-ak1_YppBJJ0iAWM",
            username: "username",
          },
          text: "comment 1",
        },
        {
          _id: 2,
          user: {
            avatar:
              "https://play-lh.googleusercontent.com/pzM2gijW4MrnFTd7-DHcdpKyhIaP66K1f-9C9l3VFfYAbqeiKXd-ak1_YppBJJ0iAWM",
            username: "username",
          },
          text: "comment 2",
        },
      ],
    },
    {
      _id: 2,
      user: {
        avatar:
          "https://play-lh.googleusercontent.com/pzM2gijW4MrnFTd7-DHcdpKyhIaP66K1f-9C9l3VFfYAbqeiKXd-ak1_YppBJJ0iAWM",
        username: "username",
      },
      caption: "caption",
      isMine: false,
      img: "https://image-cdn.essentiallysports.com/wp-content/uploads/20210224212849/1200-16-640x720.jpg",
      isLiked: false,
      likesCount: 0,
      commentsCount: 0,
      comments: [],
    },
    {
      _id: 3,
      user: {
        avatar:
          "https://logo.com/image-cdn/images/kts928pd/production/08207a1a4c3383abed17d2995786c44959ceaa91-1140x620.png?w=1080&q=72",
        username: "username",
      },
      caption: "caption",
      isMine: false,
      img: "https://fptshop.com.vn/uploads/originals/2023/1/3/638083514914057008_twitter-la-gi.jpg",
      isLiked: false,
      likesCount: 0,
      commentsCount: 0,
      comments: [],
    },
  ];
  const [count, setCount] = useState(2);
    const [page, setPage] = useState(1);
    console.log("🚀 ~ Artwork ~ page:", page)
   const loader = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      });
      if (loader.current) {
        observer.observe(loader.current);
      }
      return () => {
        if (loader.current) {
          observer.unobserve(loader.current);
        }
      };
    }, [loader]);
  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setTimeout(() => {
         setPage((prevPage) => prevPage + 1);
         setCount(3);
      }, 2000);
    }
  };
  return (
    <div
      style={{
        paddingTop: "105px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {feed.length > 0 ? (
        <div className="home">
          {feed.slice(0, count).map((post) => (
            <Post key={post._id} post={post} />
          ))}
          {count !== 3 && (
            <div ref={loader} style={{ textAlign: "center" }}>
              <span>loading ...</span>
            </div>
          )}
        </div>
      ) : (
        "not found"
      )}
    </div>
  );
}

export default Artwork;
