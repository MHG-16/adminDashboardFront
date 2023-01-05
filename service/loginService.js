import axios from 'axios'

export async function loginService(data, setToken, setError) {
    const userName = data.username
    const password = data.password
    // eslint-disable-next-line no-undef
    const authBuffer = Buffer.from(`${userName}:${password}`, 'utf-8').toString(
        'base64',
    )
    await axios
        .post('http://localhost:8761/login', data, {
            headers: { Authorization: `Basic ${authBuffer}` },
        })
        .then(response => {
            setToken(response.data.message.access_token)
        })
        .catch(error => {
            console.log(error.response.data.message)
            setError(error.response.data.message)
        })
}
