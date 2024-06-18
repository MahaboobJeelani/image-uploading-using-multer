import React, { useState } from 'react'
import axios from 'axios'

const Multer = () => {
    let [file, setFile] = useState(null);
    // let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const handleResgister = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', email)
        formData.append('password', password)

        axios.post(`http://localhost:8000/register`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then((res) => { console.log(file, email, password) })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form action="" onSubmit={handleResgister}>
                <label htmlFor="">Profile</label>
                <input type="file" onChange={(e) => { console.log(e); setFile(e.target.files[0]) }} />
                {/* <label htmlFor="">Username :</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> */}
                <label htmlFor="">Email :</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Password :</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Multer