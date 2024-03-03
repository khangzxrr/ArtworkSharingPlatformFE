import {
  Button,
  Popover,
  Modal,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from "react";
import styles from "./index.module.css";
const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(false);
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
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const content = (
    <div className={styles.submenu}>
      <p onClick={() => showModal("direct")}>Direct sales</p>
      <p onClick={() => showModal("auction")}>Auction sales</p>
    </div>
  );
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  return (
    <>
      <Popover
        content={content}
        open={open}
        onOpenChange={handleOpenChange}
        trigger="click"
      >
        <Button type="primary" className="form-button">
          Sell Artwork
        </Button>
      </Popover>
      <Modal
        title={type !== "auction" ? "Direct sales" : "Auction sales"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
        >
          
          {type === "auction" && (
            <>
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="RangePicker">
                <RangePicker />
              </Form.Item>
            </>
          )}
          <Form.Item label="Price">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Decription">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Index;
