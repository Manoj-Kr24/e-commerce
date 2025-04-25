import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';



const Profile = () => {


    const { token, backendUrl } = useContext(ShopContext);
    const [user, setUser] = useState({})

    const getUser = async () => {
        try {
            if (!token) {
                return null;
            }

            const response = await axios.post(backendUrl + '/api/user/user-info', {}, { headers: { token } })
            console.log(response)
            if (response.data.success) {
                console.log(response)
                setUser(response.data.user)
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }

    useEffect(() => {
        getUser();

    }, [token])







    return (
        <div className="p-6 max-w-lg mx-auto bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-lg space-y-6">
            <h2 className="text-center text-3xl font-bold text-gray-800">My Profile</h2>
            <div className="p-6 max-w-lg mx-auto bg-gradient-to-br from-purple-100 to-purple-300 rounded-2xl shadow-lg space-y-6 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800">Welcome, {user.name}!</h1>
                <p className="text-lg text-gray-600">We're glad to have you here. Here's your profile information:</p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-gray-700 text-xl"><strong className="text-purple-600">Name:</strong> {user.name}</p>
                    <p className="text-gray-700 text-xl"><strong className="text-purple-600">Email:</strong> {user.email}</p>
                </div>
            </div>

            <h3 className=" text-center text-2xl font-semibold text-gray-800">Shop More With Us</h3>

        </div>
    );
};

export default Profile;
