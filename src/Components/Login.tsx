import { m } from 'framer-motion';
import PocketBase from 'pocketbase';
import React, { useState } from 'react'

const pb = new PocketBase('https://edita.pockethost.io');

function Login() {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
      })
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
          ...prevData,
          [name]: value,
        }))
      }
      const handleSubmit1 = async() => {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
        console.log(authData)
        {console.log(pb.authStore)}
        console.log(pb.authStore.isValid);
        if (pb.authStore.isValid == true) {
            window.location.href = '/profile';
          }

      }
      const handleSubmit = async(e) => {
        document.getElementById('submit').disabled=true;
        console.log(userData);
        try {
          e.preventDefault()
          e.disable = true
          const authData = await pb.collection('users').authWithPassword(
            userData.username,
            userData.password
        );
        }
        catch {
          alert("Incorrect credentials!")
          pb.authStore.clear()
          document.getElementById('submit').disabled=false
          return
        }
        finally {
          console.log(pb.authStore.isValid);
          if (pb.authStore.isValid == true) {
            window.location.href = '/profile';
          }
        }

    }
    
    return (    
      <main className='bg-green-200 flex justify-center items-center min-h-screen'>
        <div className='bg-green-100 flex w-192 h-96 p-20 rounded-lg shadow-md'>
          <div className="flex justify-center items-center p-20">
            <h1 className='text-4xl font-bold mb-6 text-center'>Login</h1>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-20">
            <div className='mb-6'>
              <input className='rounded-lg w-full mb-4 p-2 text-xl' type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={userData.username} /><br />
              <input className='rounded-lg w-full mb-4 p-2 text-xl' type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={userData.password} /><br />
              <button id='submit' className="w-full py-2 px-4 bg-yellow-200 text-black font-semibold rounded-lg shadow-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-yellow-600 transition duration-300" onClick={handleSubmit}>Login</button>
            </div>
            <div className="flex items-center justify-center h-screen">
              <button className="px-4 py-2 flex gap-2 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-black hover:text-white transition duration-300" onClick={handleSubmit1}>
                  <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" />
                  <span>Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Login;