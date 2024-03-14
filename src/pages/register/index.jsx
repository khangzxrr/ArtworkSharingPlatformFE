import React from "react";
import styles from "./register.module.css";
import { RegisterForm } from "../../components";

const index = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default index;