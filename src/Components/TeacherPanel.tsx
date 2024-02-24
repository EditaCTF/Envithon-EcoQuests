import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://edita.pockethost.io');

function Something() {
  const [userData, setUserData] = useState({
    username: '',
    event: 'other', // default event value
    hours: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function update(username, attendance) {
    const user = await pb.collection('users').getFullList();
    const userToUpdate = user.find((user) => user.username === username);
    console.log(userToUpdate);
    console.log(user);

    if (userToUpdate) {
      // Extract the user ID
      const userId = userToUpdate.id;
      const newAttendance = parseInt(attendance);
      // Update the user's attendance
      const data = {
        attendence: userToUpdate.attendence+newAttendance,
        streak: userToUpdate.streak+1,
      };

      // Update the user with the extracted ID
      const record = await pb.collection('users').update(userId, data);
    }
  }

  const handleSubmit = async () => {
    const { username, hours } = userData;

    console.log(username);
    console.log(hours);
    console.log("Hits here2");

    if (username && hours) {
      await update(username, hours);
    } else {
      console.error("One or more elements not found.");
    }
    alert("Attendance updated!");
    window.location.reload()
  };

  useEffect(() => {
    const isTeacher = pb.authStore.model.isTeacher;

    if (isTeacher === true) {
      // Do nothing, the teacher is already authenticated
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <main className='bg-green-200 flex justify-center items-center min-h-screen'>
      <div className='bg-green-100 flex scale-125 h-96 p-20 pt-24 rounded-lg shadow-md'>
        <div className="flex justify-center items-center p-20">
          <h1 className='text-4xl font-bold mb-6 text-center'>Add Attendance</h1>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-20">
          <div className='mb-6'>
            <div className="form-group">
              <input
                type="text"
                id="usernameId"
                name="username"
                className='rounded-lg w-full p-2 text-xl mb-4'
                placeholder="Username"
                onChange={handleChange}
                value={userData.username}
              />
            </div>
            <div className="form-group">
              <select
                id="eventDropdown"
                name="event"
                className='rounded-lg w-full p-2 text-xl mb-4'
                onChange={handleChange}
                value={userData.event}
              >
                <option value="nil">Select Event</option>
                <option value="bird">Birdwatching</option>
                <option value="beach">Beach Cleaning</option>
                <option value="camp">Camping</option>
                <option value="other">Others</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="hoursCounter"
                name="hours"
                className='rounded-lg w-full p-2 text-xl mb-4'
                placeholder="Hours"
                onChange={handleChange}
                value={userData.hours}
              />
            </div>
          </div>
          <button className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 transition duration-300" id="submit" onClick={handleSubmit}>Update</button>
          <div className="mt-4">
            <a className='underline hover:bg-gray-700' href="/profile">Return to Profile</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Something;