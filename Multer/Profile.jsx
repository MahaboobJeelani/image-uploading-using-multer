import React, { useEffect } from 'react'
import axios from 'axios'

const Profile = () => {
    const id = localStorage.getItem('id')
    useEffect(() => {
        axios.get(`http://localhost:8000/image/${id}`)
            .then(() => {
                console.log('Merchant profile is loaded');
            }).catch((err) => console.log(err))
    }, [])
    return (
        <div>
            <img src="" alt="" />
        </div>
    )
}

export default Profile
