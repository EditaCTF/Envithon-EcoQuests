import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://edita.pockethost.io');

function Update() {
  const [userData, setUserData] = useState({
    username: '',
    department: '',
    about: '',
    regno: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function update(username, department, about, regno, year) {
      // Extract the user ID
      const userId = pb.authStore.model.id;
      const data = {
        username: username,
        department: department,
        about: about,
        regno: regno,
        year: year,
      };

      // Update the user with the extracted ID
      const record = await pb.collection('users').update(userId, data);
      console.log(record);
    
  }

  const handleSubmit = async () => {
    const { username, department, about, regno, year } = userData;

    console.log(username);
    console.log(about);
    console.log(department);
    console.log(regno);
    console.log(year);
    console.log("Hits here2");

    if (username && about) {
      await update(username,department,about, regno, year);
      alert("Updated profile!");
    } else {
      console.error("One or more elements not found.");
    }
    window.location.href = '/profile';
  };


  return (
    <main className='bg-green-200 flex justify-center items-center min-h-screen'>
      <div className='bg-green-100 flex scale-125 h-96 p-20 pt-24 rounded-lg shadow-md'>
        <div className="flex justify-center items-center p-20">
          <h1 className='text-4xl font-bold mb-6 text-center'>Update Profile</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-20">
          <div className='mb-6'>
            <div className="column">
              <div className="form-group">
                <input
                  type="text"
                  id="usernameId"
                  name="username"
                  className='rounded-lg w-full mb-4 p-2 text-xl'
                  placeholder="Username"
                  onChange={handleChange}
                  value={userData.username}
                />
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <input
                  type="text"
                  id="regnoId"
                  name="regno"
                  className='rounded-lg w-full mb-4 p-2 text-xl'
                  placeholder="Registration No."
                  onChange={handleChange}
                  value={userData.regno}
                />
              </div>
            </div>
            <div className="column">
              <div className="form-group">
                <select
                  id="eventDropdown"
                  name="department"
                  className='rounded-lg w-full mb-4 p-2 text-xl'
                  defaultValue="Select Department"
                  onChange={handleChange}
                  value={userData.department}
                >
                <option value="nil">Select Department</option>
                <option value="B.Tech AI/DS">B.Tech AI/DS</option>
                <option value="B.Tech CSE (Cybersecurity)">B.Tech CSE (Cybersecurity)</option>
                <option value="B.Tech CSE (IoT)">B.Tech CSE (IoT)</option>
                <option value="B.Sc Data Science">B.Sc Data Science</option>
                <option value="B.Com (General)">B.Com (General)</option>
                <option value="B.Com (PA)">B.Com (PA)</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <select
                id="eventDropdown"
                name="year"
                className='rounded-lg w-full mb-4 p-2 text-xl'
                onChange={handleChange}
                value={userData.year}
              >
                <option value="nil">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <input
                type="text"
                id="aboutyou"
                name="about"
                className='rounded-lg w-full mb-4 p-2 text-xl'
                placeholder="About me"
                onChange={handleChange}
                value={userData.about}
              />
            </div>
          </div>
            <button className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 transition duration-300" id="submit" onClick={handleSubmit}>Update</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Update;
