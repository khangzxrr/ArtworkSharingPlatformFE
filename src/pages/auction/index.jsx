import React from "react";
import styles from "./auction.module.css";
import { Link } from "react-router-dom";
import Header from "../../layouts/loggedLayout";
import Footer from "../../layouts/footer";
const index = () => {
  return (
    <div>
      <Header />
      <div className={`${styles["live-auction"]}`}>
        <img
          alt=""
          src="https://demo.egenslab.com/html/bidout/preview/assets/images/bg/section-bg2.png"
          className={`${styles["section-bg2"]}`}
        />
        <div
          style={{ maxWidth: "1320px", position: "relative", margin: "auto" }}
        >
          <img
            alt=""
            src="assets/images/bg/dotted2.png"
            className={`${styles["dotted3"]}`}
          />
          <div
            className="row d-flex justify-content-center align-items-center g-4"
            style={{ marginBottom: "60px" }}
          >
            <div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
              <div
                className={`${styles["section-title2"]} text-lg-start text-center`}
              >
                <h2>Live Auction</h2>
                {/* <p className="mb-0">
                  Explore on the world's best &amp; largest Bidding marketplace
                  with our beautiful Bidding products. We want to be a part of
                  your smile, success and future growth.
                </p> */}
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-4 col-xl-6 text-lg-end text-center">
              <Link
                to="#"
                className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
              >
                View All
              </Link>
            </div> */}
          </div>
          <div className="row gy-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div
                className={`${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className={`${styles["auction-img"]}`}>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                  />
                  <div className={`${styles["auction-timer"]}`}>
                    <div className={`${styles["countdown"]}`}>
                      <h5>
                        <span>4</span>D :<span>04</span>H : <span>18</span>M :{" "}
                        <span>37</span>S
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={`${styles["auction-content"]}`}>
                  <h4>
                    <Link to="#">
                      Tapetum-Lucidum, Painting by Aurelio Bentes Bravo
                    </Link>
                  </h4>
                  <div className={`${styles["author-price-area"]}`}>
                    <div className={`${styles["author"]}`}>
                      <img
                        alt=""
                        src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                      />
                      <span className={`${styles["name"]}`}>
                        By | Artmajeur
                      </span>
                    </div>
                    <p>465.000 VND</p>
                  </div>
                  <div className={`${styles["auction-card-bttm"]}`}>
                    <Link
                      to="/auction/detail"
                      className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                    >
                      Place a Bid
                    </Link>
                    <div className={`${styles["share-area"]}`}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="#d53939" fillRule="nonzero">
                          <g transform="scale(5.12,5.12)">
                            <path d="M15,7c-7.16797,0 -13,5.83203 -13,13c0,14.76172 16.69531,22.04688 22.375,26.78125l0.625,0.53125l0.625,-0.53125c5.67969,-4.73437 22.375,-12.01953 22.375,-26.78125c0,-7.16797 -5.83203,-13 -13,-13c-4.05469,0 -7.61719,1.92578 -10,4.84375c-2.38281,-2.91797 -5.94531,-4.84375 -10,-4.84375zM15,9c3.83594,0 7.1875,1.96875 9.15625,4.9375l0.84375,1.25l0.84375,-1.25c1.96875,-2.96875 5.32031,-4.9375 9.15625,-4.9375c6.08594,0 11,4.91406 11,11c0,12.89844 -14.40625,19.57422 -21,24.78125c-6.59375,-5.20703 -21,-11.88281 -21,-24.78125c0,-6.08594 4.91406,-11 11,-11z" />
                          </g>
                        </g>
                      </svg>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="none" fillRule="nonzero" stroke="none">
                          <g transform="scale(6.4,6.4)">
                            <path
                              d="M20,16.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,17c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,16c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <path
                              d="M20,3.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,4c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,3c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <g>
                              <path
                                d="M20,29.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                                fill="#abd1e8"
                              />
                              <path
                                d="M20,30c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,29c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                                fill="#7496c4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div
                className={`${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className={`${styles["auction-img"]}`}>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                  />
                  <div className={`${styles["auction-timer"]}`}>
                    <div className={`${styles["countdown"]}`}>
                      <h5>
                        <span>4</span>D :<span>04</span>H : <span>18</span>M :{" "}
                        <span>37</span>S
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={`${styles["auction-content"]}`}>
                  <h4>
                    <Link to="#">
                      Tapetum-Lucidum, Painting by Aurelio Bentes Bravo
                    </Link>
                  </h4>
                  <div className={`${styles["author-price-area"]}`}>
                    <div className={`${styles["author"]}`}>
                      <img
                        alt=""
                        src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                      />
                      <span className={`${styles["name"]}`}>
                        By | Artmajeur
                      </span>
                    </div>
                    <p>465.000 VND</p>
                  </div>
                  <div className={`${styles["auction-card-bttm"]}`}>
                    <Link
                      to="/auction/detail"
                      className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                    >
                      Place a Bid
                    </Link>
                    <div className={`${styles["share-area"]}`}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="#d53939" fillRule="nonzero">
                          <g transform="scale(5.12,5.12)">
                            <path d="M15,7c-7.16797,0 -13,5.83203 -13,13c0,14.76172 16.69531,22.04688 22.375,26.78125l0.625,0.53125l0.625,-0.53125c5.67969,-4.73437 22.375,-12.01953 22.375,-26.78125c0,-7.16797 -5.83203,-13 -13,-13c-4.05469,0 -7.61719,1.92578 -10,4.84375c-2.38281,-2.91797 -5.94531,-4.84375 -10,-4.84375zM15,9c3.83594,0 7.1875,1.96875 9.15625,4.9375l0.84375,1.25l0.84375,-1.25c1.96875,-2.96875 5.32031,-4.9375 9.15625,-4.9375c6.08594,0 11,4.91406 11,11c0,12.89844 -14.40625,19.57422 -21,24.78125c-6.59375,-5.20703 -21,-11.88281 -21,-24.78125c0,-6.08594 4.91406,-11 11,-11z" />
                          </g>
                        </g>
                      </svg>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="none" fillRule="nonzero" stroke="none">
                          <g transform="scale(6.4,6.4)">
                            <path
                              d="M20,16.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,17c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,16c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <path
                              d="M20,3.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,4c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,3c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <g>
                              <path
                                d="M20,29.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                                fill="#abd1e8"
                              />
                              <path
                                d="M20,30c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,29c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                                fill="#7496c4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div
                className={`${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className={`${styles["auction-img"]}`}>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                  />
                  <div className={`${styles["auction-timer"]}`}>
                    <div className={`${styles["countdown"]}`}>
                      <h5>
                        <span>4</span>D :<span>04</span>H : <span>18</span>M :{" "}
                        <span>37</span>S
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={`${styles["auction-content"]}`}>
                  <h4>
                    <Link to="#">
                      Tapetum-Lucidum, Painting by Aurelio Bentes Bravo
                    </Link>
                  </h4>
                  <div className={`${styles["author-price-area"]}`}>
                    <div className={`${styles["author"]}`}>
                      <img
                        alt=""
                        src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                      />
                      <span className={`${styles["name"]}`}>
                        By | Artmajeur
                      </span>
                    </div>
                    <p>465.000 VND</p>
                  </div>
                  <div className={`${styles["auction-card-bttm"]}`}>
                    <Link
                      to="/auction/detail"
                      className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                    >
                      Place a Bid
                    </Link>
                    <div className={`${styles["share-area"]}`}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="#d53939" fillRule="nonzero">
                          <g transform="scale(5.12,5.12)">
                            <path d="M15,7c-7.16797,0 -13,5.83203 -13,13c0,14.76172 16.69531,22.04688 22.375,26.78125l0.625,0.53125l0.625,-0.53125c5.67969,-4.73437 22.375,-12.01953 22.375,-26.78125c0,-7.16797 -5.83203,-13 -13,-13c-4.05469,0 -7.61719,1.92578 -10,4.84375c-2.38281,-2.91797 -5.94531,-4.84375 -10,-4.84375zM15,9c3.83594,0 7.1875,1.96875 9.15625,4.9375l0.84375,1.25l0.84375,-1.25c1.96875,-2.96875 5.32031,-4.9375 9.15625,-4.9375c6.08594,0 11,4.91406 11,11c0,12.89844 -14.40625,19.57422 -21,24.78125c-6.59375,-5.20703 -21,-11.88281 -21,-24.78125c0,-6.08594 4.91406,-11 11,-11z" />
                          </g>
                        </g>
                      </svg>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="none" fillRule="nonzero" stroke="none">
                          <g transform="scale(6.4,6.4)">
                            <path
                              d="M20,16.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,17c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,16c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <path
                              d="M20,3.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,4c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,3c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <g>
                              <path
                                d="M20,29.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                                fill="#abd1e8"
                              />
                              <path
                                d="M20,30c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,29c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                                fill="#7496c4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div
                className={`${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className={`${styles["auction-img"]}`}>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                  />
                  <div className={`${styles["auction-timer"]}`}>
                    <div className={`${styles["countdown"]}`}>
                      <h5>
                        <span>4</span>D :<span>04</span>H : <span>18</span>M :{" "}
                        <span>37</span>S
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={`${styles["auction-content"]}`}>
                  <h4>
                    <Link to="#">
                      Tapetum-Lucidum, Painting by Aurelio Bentes Bravo
                    </Link>
                  </h4>
                  <div className={`${styles["author-price-area"]}`}>
                    <div className={`${styles["author"]}`}>
                      <img
                        alt=""
                        src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                      />
                      <span className={`${styles["name"]}`}>
                        By | Artmajeur
                      </span>
                    </div>
                    <p>465.000 VND</p>
                  </div>
                  <div className={`${styles["auction-card-bttm"]}`}>
                    <Link
                      to="/auction/detail"
                      className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                    >
                      Place a Bid
                    </Link>
                    <div className={`${styles["share-area"]}`}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="#d53939" fillRule="nonzero">
                          <g transform="scale(5.12,5.12)">
                            <path d="M15,7c-7.16797,0 -13,5.83203 -13,13c0,14.76172 16.69531,22.04688 22.375,26.78125l0.625,0.53125l0.625,-0.53125c5.67969,-4.73437 22.375,-12.01953 22.375,-26.78125c0,-7.16797 -5.83203,-13 -13,-13c-4.05469,0 -7.61719,1.92578 -10,4.84375c-2.38281,-2.91797 -5.94531,-4.84375 -10,-4.84375zM15,9c3.83594,0 7.1875,1.96875 9.15625,4.9375l0.84375,1.25l0.84375,-1.25c1.96875,-2.96875 5.32031,-4.9375 9.15625,-4.9375c6.08594,0 11,4.91406 11,11c0,12.89844 -14.40625,19.57422 -21,24.78125c-6.59375,-5.20703 -21,-11.88281 -21,-24.78125c0,-6.08594 4.91406,-11 11,-11z" />
                          </g>
                        </g>
                      </svg>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="none" fillRule="nonzero" stroke="none">
                          <g transform="scale(6.4,6.4)">
                            <path
                              d="M20,16.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,17c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,16c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <path
                              d="M20,3.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,4c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,3c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <g>
                              <path
                                d="M20,29.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                                fill="#abd1e8"
                              />
                              <path
                                d="M20,30c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,29c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                                fill="#7496c4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div
                className={`${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className={`${styles["auction-img"]}`}>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                  />
                  <div className={`${styles["auction-timer"]}`}>
                    <div className={`${styles["countdown"]}`}>
                      <h5>
                        <span>4</span>D :<span>04</span>H : <span>18</span>M :{" "}
                        <span>37</span>S
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={`${styles["auction-content"]}`}>
                  <h4>
                    <Link to="#">
                      Tapetum-Lucidum, Painting by Aurelio Bentes Bravo
                    </Link>
                  </h4>
                  <div className={`${styles["author-price-area"]}`}>
                    <div className={`${styles["author"]}`}>
                      <img
                        alt=""
                        src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                      />
                      <span className={`${styles["name"]}`}>
                        By | Artmajeur
                      </span>
                    </div>
                    <p>465.000 VND</p>
                  </div>
                  <div className={`${styles["auction-card-bttm"]}`}>
                    <Link
                      to="/auction/detail"
                      className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                    >
                      Place a Bid
                    </Link>
                    <div className={`${styles["share-area"]}`}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="#d53939" fillRule="nonzero">
                          <g transform="scale(5.12,5.12)">
                            <path d="M15,7c-7.16797,0 -13,5.83203 -13,13c0,14.76172 16.69531,22.04688 22.375,26.78125l0.625,0.53125l0.625,-0.53125c5.67969,-4.73437 22.375,-12.01953 22.375,-26.78125c0,-7.16797 -5.83203,-13 -13,-13c-4.05469,0 -7.61719,1.92578 -10,4.84375c-2.38281,-2.91797 -5.94531,-4.84375 -10,-4.84375zM15,9c3.83594,0 7.1875,1.96875 9.15625,4.9375l0.84375,1.25l0.84375,-1.25c1.96875,-2.96875 5.32031,-4.9375 9.15625,-4.9375c6.08594,0 11,4.91406 11,11c0,12.89844 -14.40625,19.57422 -21,24.78125c-6.59375,-5.20703 -21,-11.88281 -21,-24.78125c0,-6.08594 4.91406,-11 11,-11z" />
                          </g>
                        </g>
                      </svg>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="none" fillRule="nonzero" stroke="none">
                          <g transform="scale(6.4,6.4)">
                            <path
                              d="M20,16.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,17c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,16c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <path
                              d="M20,3.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,4c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,3c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <g>
                              <path
                                d="M20,29.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                                fill="#abd1e8"
                              />
                              <path
                                d="M20,30c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,29c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                                fill="#7496c4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 ">
              <div
                className={`${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div className={`${styles["auction-img"]}`}>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                  />
                  <div className={`${styles["auction-timer"]}`}>
                    <div className={`${styles["countdown"]}`}>
                      <h5>
                        <span>4</span>D :<span>04</span>H : <span>18</span>M :{" "}
                        <span>37</span>S
                      </h5>
                    </div>
                  </div>
                </div>
                <div className={`${styles["auction-content"]}`}>
                  <h4>
                    <Link to="#">
                      Tapetum-Lucidum, Painting by Aurelio Bentes Bravo
                    </Link>
                  </h4>
                  <div className={`${styles["author-price-area"]}`}>
                    <div className={`${styles["author"]}`}>
                      <img
                        alt=""
                        src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                      />
                      <span className={`${styles["name"]}`}>
                        By | Artmajeur
                      </span>
                    </div>
                    <p>465.000 VND</p>
                  </div>
                  <div className={`${styles["auction-card-bttm"]}`}>
                    <Link
                      to="/auction/detail"
                      className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                    >
                      Place a Bid
                    </Link>
                    <div className={`${styles["share-area"]}`}>
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="#d53939" fillRule="nonzero">
                          <g transform="scale(5.12,5.12)">
                            <path d="M15,7c-7.16797,0 -13,5.83203 -13,13c0,14.76172 16.69531,22.04688 22.375,26.78125l0.625,0.53125l0.625,-0.53125c5.67969,-4.73437 22.375,-12.01953 22.375,-26.78125c0,-7.16797 -5.83203,-13 -13,-13c-4.05469,0 -7.61719,1.92578 -10,4.84375c-2.38281,-2.91797 -5.94531,-4.84375 -10,-4.84375zM15,9c3.83594,0 7.1875,1.96875 9.15625,4.9375l0.84375,1.25l0.84375,-1.25c1.96875,-2.96875 5.32031,-4.9375 9.15625,-4.9375c6.08594,0 11,4.91406 11,11c0,12.89844 -14.40625,19.57422 -21,24.78125c-6.59375,-5.20703 -21,-11.88281 -21,-24.78125c0,-6.08594 4.91406,-11 11,-11z" />
                          </g>
                        </g>
                      </svg>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0,0,256,256"
                      >
                        <g fill="none" fillRule="nonzero" stroke="none">
                          <g transform="scale(6.4,6.4)">
                            <path
                              d="M20,16.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,17c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,16c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <path
                              d="M20,3.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                              fill="#abd1e8"
                            />
                            <path
                              d="M20,4c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,3c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                              fill="#7496c4"
                            />
                            <g>
                              <path
                                d="M20,29.5c-1.933,0 -3.5,1.567 -3.5,3.5c0,1.933 1.567,3.5 3.5,3.5c1.933,0 3.5,-1.567 3.5,-3.5c0,-1.933 -1.567,-3.5 -3.5,-3.5z"
                                fill="#abd1e8"
                              />
                              <path
                                d="M20,30c1.654,0 3,1.346 3,3c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.654 1.346,-3 3,-3M20,29c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4z"
                                fill="#7496c4"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
