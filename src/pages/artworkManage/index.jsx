import React, { useEffect, useState } from "react";
import {
  Popover,
  Modal,
  DatePicker,
  Form,
  Input,
  Button,
  message,
  Popconfirm,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import Header from "../../layouts/loggedLayout";
import Footer from "../../layouts/footer";
import { storeImageToFireBase } from "./../../utils/storeImageToFirebase.";
const Index = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const [change, setChange] = useState(false);
  const [changeD, setChangeD] = useState(false);
  const [changeA, setChangeA] = useState(false);
  const [changeUp, setChangeUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenUp, setIsModalOpenUp] = useState(false);
  const [isModalOpenA, setIsModalOpenA] = useState(false);
  const [isModalOpenD, setIsModalOpenD] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const showModal = (type) => {
    hide();
    setType(type);
    setIsModalOpen(true);
  };
  const showModalA = (id) => {
    setIsModalOpenA(true);
    setChangeA(id);
  };
  const showModalD = (id) => {
    setIsModalOpenD(true);
    setChangeD(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelUp = () => {
    setIsModalOpenUp(false);
    setImage(false);
  };
  const handleCancelD = () => {
    setIsModalOpenD(false);
  };
  const handleCancelA = () => {
    setIsModalOpenA(false);
  };
  const confirmA = (id) => {
    change
      ? setDataLive(dataLive.filter((item) => item.id !== id))
      : setData(data.filter((item) => item.id !== id));
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const content = (
    <div className={styles.submenu}>
      <p onClick={() => showModal("direct")}>Direct sales</p>
      <p onClick={() => showModal("auction")}>Auction sales</p>
    </div>
  );
  const contentPost = (
    <div className={styles.submenu}>
      <p onClick={() => showModal("direct")}>Update</p>
      <p onClick={() => showModal("auction")}>Delete</p>
    </div>
  );
  const [data, setData] = useState([
    {
      id: 1,
      name: "Tapetum-Lucidum, Painting by Aurelio Bentes Bravo",
      img: "https://www.artmajeur.com/medias/standard/a/u/aurelio-bentes-bravo/artwork/17093506_tapetum-lucidum1.jpg?v=1692558339",
      decription: "Tapetum-Lucidum, Painting by Aurelio Bentes Bravo",
      price: "100",
    },
    {
      id: 2,
      name: "Painting by Aurelio Bentes Bravo, Tapetum-Lucidum",
      img: "https://scontent.fsgn2-7.fna.fbcdn.net/v/t31.18172-8/478092_300888676679054_201695878_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c2f564&_nc_eui2=AeHUiHTHhvHK7flvjvSzFA0FGizg3_kpd2EaLODf-Sl3YZ3qvuVNCBpaeX5ll5ul8ndN6szjk7e4a_QZoABzt1HP&_nc_ohc=G0HZ3AnbKfkAX92tLN5&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAGwcakexq2zKgMutNhATTqMT6J1zEZQCmWjnZONPwToA&oe=660954E4",
      decription: "Painting by Aurelio Bentes Bravo, Tapetum-Lucidum",
      price: "200",
    },
  ]);
  const [dataLive, setDataLive] = useState([
    {
      id: 1,
      name: "Tapetum-Lucidum, Painting by Aurelio Bentes Bravo",
      img: "https://www.artmajeur.com/medias/hd/m/y/mysane/artwork/10945453_2_dans-ses-atours.jpg",
      decription: "Tapetum-Lucidum, Painting by Aurelio Bentes Bravo",
      price: "500",
      day: "",
    },
    {
      id: 2,
      name: "Painting by Aurelio Bentes Bravo, Tapetum-Lucidum",
      img: "https://www.artmajeur.com/medias/standard/l/i/lieaoaxaca/artwork/13040441_img-20200224-wa0010.jpg",
      decription: "Painting by Aurelio Bentes Bravo, Tapetum-Lucidum",
      price: "600",
      day: "",
    },
  ]);
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } =
          await storeImageToFireBase(selectedFile);
        if (isSuccess) {
          setImage(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const onFinish = (values) => {
    values["id"] = Math.floor(Math.random() * 100);;
    values["img"] = image;
    values["price"] = "";
    type !== "auction"
      ? setData([...data, ...[values]])
      : setDataLive([...dataLive, ...[values]]);
    setIsModalOpen(false);
    form.resetFields();
    setImage(false);
  };
  const onUpdate = (values) => {
    const updatedItems = (change ? dataLive : data).map((item) => {
      if (item.id === parseInt(changeUp)) {
        return {
          ...item,
          name: values.name,
          decription: values.decription,
          img: image,
        };
      }
      return item;
    });
    change ?  setDataLive(updatedItems) : setData(updatedItems);
    setIsModalOpenUp(false);
    form.resetFields();
    setImage(false);
  };
  const updateItemA = (values) => {
    const updatedItems = dataLive.map((item) => {
      if (item.id === parseInt(changeA)) {
        return { ...item, price: values.price };
      }
      return item;
    });
    setDataLive(updatedItems);
    setIsModalOpenA(false);
    form.resetFields();
  };
  const updateItemD = (values) => {
    const updatedItems = data.map((item) => {
      if (item.id === parseInt(changeUp)) {
        return { ...item, price: values.price };
      }
      return item;
    });
    setData(updatedItems);
    setIsModalOpenD(false);
    form.resetFields();
  };
  const onFill = (data) => {
    setImage(data.img);
    form.setFieldsValue(data);
    setIsModalOpenUp(true);
    setChangeUp(data.id);
  };
  return (
    <div>
      <Header />
      <div className={`${styles["live-auction"]}`}>
        <img
          alt=""
          src="https://demo.egenslab.com/html/bidout/preview/assets/images/bg/section-bg2.png"
          className={`img-fluid ${styles["section-bg2"]}`}
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
            style={{ marginBottom: "40px" }}
          >
            <div className="col-xl-6">
              <div
                className={`${styles["section-title2"]} text-lg-start text-center`}
              >
                <h2>Artworks Management</h2>
              </div>
            </div>
            <div className="col-xl-6 text-lg-end text-center">
              <Popover
                placement="bottom"
                content={content}
                open={open}
                onOpenChange={handleOpenChange}
                trigger="click"
              >
                <Link
                  to="#"
                  className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                >
                  Post Artwork
                </Link>
              </Popover>
              <Modal
                title={type !== "auction" ? "Direct sales" : "Auction sales"}
                open={isModalOpen}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
              >
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                >
                  <Form.Item label="Upload" valuePropName="fileList">
                    <div className={`${styles["upload"]}`}>
                      <img
                        src={
                          image ||
                          "https://www.ekoparkotomasyon.com/wp-content/public_html/cart/image/data/uploads/2013/12/default-placeholder.png"
                        }
                        alt=""
                        style={{
                          width: "85px",
                          height: "77px",
                          position: "absolute",
                          borderRadius: "5px",
                        }}
                      />
                      <button
                        style={{
                          cursor: "auto",
                          border: 0,
                          background: "none",
                          zIndex: 1,
                        }}
                        type="button"
                      >
                        <input
                          type="file"
                          name="profileImageUrl"
                          accept="image/*"
                          onChange={onSelectFile}
                          id="upload"
                          style={{
                            width: "50px",
                            height: "50px",
                            position: "absolute",
                            opacity: "0",
                          }}
                        />
                        <PlusOutlined />
                        <div
                          style={{
                            marginTop: 8,
                          }}
                        >
                          {!isLoading ? "Upload" : "Loading"}
                        </div>
                      </button>
                    </div>
                  </Form.Item>
                  <Form.Item label="Name" name="name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Decription" name="decription">
                    <TextArea rows={4} />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 20,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
              <Modal
                title={!change ? "Update Direct sales" : "Update Auction sales"}
                open={isModalOpenUp}
                // onOk={handleOk}
                onCancel={handleCancelUp}
                footer={[]}
              >
                <Form
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                  style={{
                    maxWidth: 600,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  form={form}
                  name="control-hooks"
                  onFinish={onUpdate}
                >
                  <Form.Item label="Upload" valuePropName="fileList">
                    <div className={`${styles["upload"]}`}>
                      <img
                        src={
                          image ||
                          "https://www.ekoparkotomasyon.com/wp-content/public_html/cart/image/data/uploads/2013/12/default-placeholder.png"
                        }
                        alt=""
                        style={{
                          width: "85px",
                          height: "77px",
                          position: "absolute",
                          borderRadius: "5px",
                        }}
                      />
                      <button
                        style={{
                          cursor: "auto",
                          border: 0,
                          background: "none",
                          zIndex: 1,
                        }}
                        type="button"
                      >
                        <input
                          type="file"
                          name="profileImageUrl"
                          accept="image/*"
                          onChange={onSelectFile}
                          id="upload"
                          style={{
                            width: "50px",
                            height: "50px",
                            position: "absolute",
                            opacity: "0",
                          }}
                        />
                        <PlusOutlined />
                        <div
                          style={{
                            marginTop: 8,
                          }}
                        >
                          {!isLoading ? "Upload" : "Loading"}
                        </div>
                      </button>
                    </div>
                  </Form.Item>
                  <Form.Item label="Name" name="name">
                    <Input />
                  </Form.Item>
                  <Form.Item label="Decription" name="decription">
                    <TextArea rows={4} />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 20,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>
            </div>
            <div
              className={`text-center`}
              style={{ marginTop: "30px", width: "100%" }}
            >
              <div
                className={`${styles["eg-card-change"]} ${styles["eg-card"]} ${styles["auction-card2"]}`}
                style={{
                  width: "25%",
                  visibility: "visible",
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                  animationName: "fadeInDown",
                }}
              >
                <div
                  className={`${styles["b-change"]} ${change && styles["c-change"]}`}
                ></div>
                <div
                  className={`${styles["change"]}`}
                  onClick={() => setChange(false)}
                >
                  <span style={{ color: `${!change ? "#FFF" : "#1f2230"} ` }}>
                    Direct sales
                  </span>
                </div>
                <div
                  className={`${styles["change"]}`}
                  onClick={() => setChange(true)}
                >
                  <span style={{ color: `${change ? "#FFF" : "#1f2230"} ` }}>
                    Auction sales
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-4 d-flex justify-content-center">
            {change
              ? dataLive.map((data, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-10 " key={i}>
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
                        <img alt="" src={data.img} />
                        <div className={`${styles["auction-timer"]}`}>
                          <div className={`${styles["countdown"]}`}>
                            <h5>
                              <span>4</span>D :<span>04</span>H :{" "}
                              <span>18</span>M : <span>37</span>S
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles["auction-content"]}`}>
                        <h4>
                          <Link to="#">{data.name}</Link>
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
                          <p>{data.price}VND</p>
                        </div>
                        <div
                          className={`${styles["auction-card-bttm"]}`}
                          style={{ alignItems: "end" }}
                        >
                          <Link
                            to="#"
                            className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                            onClick={() => showModalA(data.id)}
                          >
                            Sell a Bid
                          </Link>
                          <Modal
                            title={"Auction sales"}
                            open={isModalOpenA}
                            // onOk={handleOk}
                            onCancel={handleCancelA}
                            footer={[]}
                          >
                            <Form
                              labelCol={{
                                span: 4,
                              }}
                              wrapperCol={{
                                span: 14,
                              }}
                              layout="horizontal"
                              style={{
                                maxWidth: 600,
                              }}
                              initialValues={{
                                remember: true,
                              }}
                              form={form}
                              name="control-hooks"
                              onFinish={updateItemA}
                            >
                              <Form.Item label="Price" name="price">
                                <Input />
                              </Form.Item>
                              <Form.Item label="RangePicker" name="day">
                                <RangePicker />
                              </Form.Item>
                              <Form.Item
                                wrapperCol={{
                                  offset: 20,
                                  span: 16,
                                }}
                              >
                                <Button type="primary" htmlType="submit">
                                  Submit
                                </Button>
                              </Form.Item>
                            </Form>
                          </Modal>
                          <div className={`${styles["share-area"]}`}>
                            <Link
                              to="#"
                              className={`${styles["eg-btn"]} ${styles["btn--update"]} ${styles["btn--sm"]}`}
                              onClick={() => onFill(data)}
                            >
                              Update
                            </Link>
                            <Popconfirm
                              title="Delete the post"
                              description="Are you sure to delete this post?"
                              onConfirm={() => confirmA(data.id)}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button danger>Delete</Button>
                            </Popconfirm>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : data.map((data, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-10 " key={i}>
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
                        <img alt="" src={data.img} />
                      </div>
                      <div className={`${styles["auction-content"]}`}>
                        <h4>
                          <Link to="#">{data.name}</Link>
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
                          <p>{data.price} VND</p>
                        </div>
                        <div
                          className={`${styles["auction-card-bttm"]}`}
                          style={{ alignItems: "end" }}
                        >
                          <Link
                            to="#"
                            className={`${styles["eg-btn"]} ${styles["btn--primary2"]} ${styles["btn--md"]}`}
                            onClick={() => showModalD(data.id)}
                          >
                            Sell
                          </Link>
                          <Modal
                            title={"Direct sales"}
                            open={isModalOpenD}
                            // onOk={handleOk}
                            onCancel={handleCancelD}
                            footer={[]}
                          >
                            <Form
                              labelCol={{
                                span: 4,
                              }}
                              wrapperCol={{
                                span: 14,
                              }}
                              layout="horizontal"
                              style={{
                                maxWidth: 600,
                              }}
                              initialValues={{
                                remember: true,
                              }}
                              form={form}
                              name="control-hooks"
                              onFinish={updateItemD}
                            >
                              <Form.Item label="Price" name="price">
                                <Input />
                              </Form.Item>
                              <Form.Item
                                wrapperCol={{
                                  offset: 20,
                                  span: 16,
                                }}
                              >
                                <Button type="primary" htmlType="submit">
                                  Submit
                                </Button>
                              </Form.Item>
                            </Form>
                          </Modal>
                          <div className={`${styles["share-area"]}`}>
                            <Link
                              to="#"
                              className={`${styles["eg-btn"]} ${styles["btn--update"]} ${styles["btn--sm"]}`}
                              onClick={() => onFill(data)}
                            >
                              Update
                            </Link>
                            <Popconfirm
                              title="Delete the post"
                              description="Are you sure to delete this post?"
                              onConfirm={() => confirmA(data.id)}
                              onCancel={cancel}
                              okText="Yes"
                              cancelText="No"
                            >
                              <Button danger>Delete</Button>
                            </Popconfirm>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
