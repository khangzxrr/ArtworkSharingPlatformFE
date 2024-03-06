import React from "react";
import Header from "../../layouts/loggedLayout";
import Footer from "../../layouts/footer";
import styles from "./auction.module.css";
import { Link } from "react-router-dom";
function AuctionDetail() {
  return (
    <div>
      <Header />
      <div className={`${styles["live-auction"]}`}>
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
                <h2>Auction Details</h2>
                <p className="mb-0">Home / Auction Details</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-xl-6 text-lg-end text-center" style={{textAlign: "center"}}>
              <Link
                to="/auction"
                className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
              >
                Go Back
              </Link>
            </div>
          </div>
          <div className={`row g-4 ${styles["mb-50"]}`}>
            <div className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
              <div
                className={`${styles["tab-content"]} mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp`}
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div
                  className="tab-pane big-image fade show active"
                  id="gallery-img1"
                >
                  <div
                    className={`${styles["auction-gallery-timer"]}  d-flex align-items-center justify-content-center flex-wrap`}
                  >
                    <h3>4D : 0-15H : 0-50M : 0-14S </h3>
                  </div>
                  <img
                    alt=""
                    src="https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div
                className={`${styles["product-details-right"]}`}
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <h3>Tapetum-Lucidum, Painting by Aurelio Bentes Bravo.</h3>
                <p className={`${styles["para"]}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsum consequuntur corporis culpa. Accusantium facere eum
                  ipsa! Eius mollitia nulla nam.
                </p>
                <h4>
                  Bidding Price: <span>465.000 VND</span>
                </h4>
                <div className={`${styles["bid-form"]}`}>
                  <div className={`${styles["form-title"]}`}>
                    <h5>Bid Now</h5>
                    <p>Bid Amount : Minimum Bid 50.000 VND</p>
                  </div>
                  <form>
                    <div className={`${styles["form-inner"]} gap-2`}>
                      <input type="text" placeholder="50.00 VND" />
                      <button
                        className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                        type="submit"
                      >
                        Place Bid
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-8">
              <ul
                className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
                id="pills-tab"
                role="tablist"
                style={{
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                  marginBottom: "45px",
                }}
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link details-tab-btn active"
                    id="pills-bid-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-bid"
                    type="button"
                    role="tab"
                    aria-controls="pills-bid"
                    aria-selected="true"
                  >
                    Biding History
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="pills-bid"
                  role="tabpanel"
                  aria-labelledby="pills-bid-tab"
                >
                  <div className={`${styles["bid-list-area"]}`}>
                    <ul className={`${styles["bid-list"]}`}>
                      <li>
                        <div className="row d-flex align-items-center">
                          <div className="col-7">
                            <div className={`${styles["bidder-area"]}`}>
                              <div className={`${styles["bidder-img"]}`}>
                                <img
                                  alt=""
                                  src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                                />
                              </div>
                              <div className={`${styles["bidder-content"]}`}>
                                <Link to="#">
                                  <h6>Artmajeur</h6>
                                </Link>
                                <p>515.000 VND</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <div className={`${styles["bid-time"]}`}>
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row d-flex align-items-center">
                          <div className="col-7">
                            <div className={`${styles["bidder-area"]}`}>
                              <div className={`${styles["bidder-img"]}`}>
                                <img
                                  alt=""
                                  src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                                />
                              </div>
                              <div className={`${styles["bidder-content"]}`}>
                                <Link to="#">
                                  <h6>Artmajeur</h6>
                                </Link>
                                <p>515.000 VND</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <div className={`${styles["bid-time"]}`}>
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row d-flex align-items-center">
                          <div className="col-7">
                            <div className={`${styles["bidder-area"]}`}>
                              <div className={`${styles["bidder-img"]}`}>
                                <img
                                  alt=""
                                  src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                                />
                              </div>
                              <div className={`${styles["bidder-content"]}`}>
                                <Link to="#">
                                  <h6>Artmajeur</h6>
                                </Link>
                                <p>515.000 VND</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <div className={`${styles["bid-time"]}`}>
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row d-flex align-items-center">
                          <div className="col-7">
                            <div className={`${styles["bidder-area"]}`}>
                              <div className={`${styles["bidder-img"]}`}>
                                <img
                                  alt=""
                                  src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                                />
                              </div>
                              <div className={`${styles["bidder-content"]}`}>
                                <Link to="#">
                                  <h6>Artmajeur</h6>
                                </Link>
                                <p>515.000 VND</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <div className={`${styles["bid-time"]}`}>
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row d-flex align-items-center">
                          <div className="col-7">
                            <div className={`${styles["bidder-area"]}`}>
                              <div className={`${styles["bidder-img"]}`}>
                                <img
                                  alt=""
                                  src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                                />
                              </div>
                              <div className={`${styles["bidder-content"]}`}>
                                <Link to="#">
                                  <h6>Artmajeur</h6>
                                </Link>
                                <p>515.000 VND</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <div className={`${styles["bid-time"]}`}>
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row d-flex align-items-center">
                          <div className="col-7">
                            <div className={`${styles["bidder-area"]}`}>
                              <div className={`${styles["bidder-img"]}`}>
                                <img
                                  alt=""
                                  src="https://www.kiettacnghethuat.com/wp-content/uploads/The-Starry-Night.jpg"
                                />
                              </div>
                              <div className={`${styles["bidder-content"]}`}>
                                <Link to="#">
                                  <h6>Artmajeur</h6>
                                </Link>
                                <p>515.000 VND</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <div className={`${styles["bid-time"]}`}>
                              <p>4 Hours Ago</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
}

export default AuctionDetail;
