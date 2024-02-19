import React from "react";
import styles from './login.module.css'
import { LoginForm } from "../../components";

const index = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default index