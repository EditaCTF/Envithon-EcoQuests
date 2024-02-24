import React, { useState } from 'react'
import './App.css'
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://edita.pockethost.io/');

function App() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    console.log(userData);
    const record = pb.collection('users').create(userData);
  }

  return (
    <main className='bg-black min-h-screen'>
      <div className='flex justify-center items-center my-auto min-h-screen'>
      <div className='h-1/2 w-1/2 border items-center flex flex-col py-5 gap-5'>
        <h1 className='text-3xl text-white'>Register</h1>
        <input className='rounded-lg w-fit placeholder:p-2 p-1 text-xl' type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={userData.username} />
        <input className='rounded-lg w-fit placeholder:p-2 p-1 text-xl' type="text" name="email" id="email" placeholder="Email" onChange={handleChange} value={userData.email} />
        <input className='rounded-lg w-fit placeholder:p-2 p-1 text-xl' type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={userData.password} />
        <input className='rounded-lg w-fit placeholder:p-2 p-1 text-xl' type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" onChange={handleChange} value={userData.passwordConfirm} />
        <input className='rounded-lg w-fit placeholder:p-2 p-1 text-xl' type="text" name="name" id="name" placeholder="Name" onChange={handleChange} value={userData.name} />
        <button className='flex rounded-md py-1 px-2 bg-white mx-auto my-auto' onClick={handleSubmit}>
          Register
        </button>
      </div>
      </div>
    </main>
  )
}

export default App;
