import Head from 'next/head'
import React, { useState } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

import styles from '../styles/Login.module.css'
import { loginService } from '../service/loginService'
import { useToken } from '../hooks/useToken'

const login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div className={styles.form}>
                <Form />
            </div>
        </>
    )
}

function Form() {
    const { register, handleSubmit } = useForm()
    const { setToken } = useToken()
    const [errorMessage, setError] = useState('')
    const onSubmit = data => loginService(data, setToken, setError)
    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <h3>Admin Login</h3>
            <div className={styles.Avatar}>
                <FaUserTie />
            </div>
            <div className={styles.form_field}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Email or Username"
                    id="username"
                    required
                    {...register('username')}
                    onChange={() => setError('')}
                />
            </div>
            <div className={styles.form_error}>
                {errorMessage === 'Unkown email' && 'Unknown email or username'}
            </div>
            <div className={styles.form_field}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register('password')}
                    onChange={() => setError('')}
                    required
                />
            </div>
            <div className={styles.form_error}>
                {errorMessage === 'Password is incorrect' &&
                    'Password is incorrect'}
            </div>
            <div className={styles.form_submit}>
                <button type="submit">Log In</button>
            </div>
        </form>
    )
}
export default login
