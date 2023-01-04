import Head from "next/head";
import React from "react";
import { FaUserTie } from 'react-icons/fa'

import styles from "../styles/Login.module.css";

const login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div class={styles.form}>
        <form>
            <h3>Admin Login</h3>
            <div className={styles.Avatar}><FaUserTie /></div>
            <div className={styles.form_field}>
                <label for='username'>Username</label>
                <input type='text' placeholder="Email or Username" id='username'/>
            </div>
            <div className={styles.form_field}>
                <label for='password'>Password</label>
                <input type='password' placeholder="Password" id='password'/>
            </div>
            <div className={styles.form_submit}>
                <button type='submit'>Log In</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default login;
