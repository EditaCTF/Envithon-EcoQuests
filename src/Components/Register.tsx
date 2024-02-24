import React, { useState } from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://edita.pockethost.io/');

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async() => {
    console.log(userData);
    const record = await pb.collection('users').create(userData);
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    console.log(authData);
    window.location.href = '/login';
  }
  

  return (
    <main className='bg-green-200 flex justify-center items-center min-h-screen'>
      <div className='bg-green-100 flex scale-125 h-96 p-20 pt-24 rounded-lg shadow-md'>
        <div className="flex justify-center items-center p-20">
          <h1 className='text-4xl font-bold mb-6 text-center'>Register</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-20">
          <div className='mb-6'>
            <input className='rounded-lg w-64 mb-4 p-2 text-l' type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={userData.username} /><br />
            <input className='rounded-lg w-64 mb-4 p-2 text-l' type="text" name="email" id="email" placeholder="Email" onChange={handleChange} value={userData.email} /><br />
            <input className='rounded-lg w-64 mb-4 p-2 text-l' type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={userData.password} /><br />
            <input className='rounded-lg w-64 mb-4 p-2 text-l' type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" onChange={handleChange} value={userData.passwordConfirm} /><br />
            <button className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 transition duration-300" id="submit" onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register;
