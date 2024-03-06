
import Header from '../../layouts/loggedLayout';
import React from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'

const index = () => {

  return (
    <div>
      <Header />
      Home Page
      <Link to='/login'>Login here</Link>
      <br/>
    </div>
  );
}

export default index;