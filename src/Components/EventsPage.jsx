import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import '../App.css';
import Sidebar from './Sidebar';

const pb = new PocketBase('https://edita.pockethost.io');

function Events() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const records = await pb.collection('events').getFullList();
      console.log(records)
        
        if (records.length > 0) {
          const userData = records.map(user => ({
            date: user.date,
            name: user.name,
            location: user.location,
            badge: user.badges,
            attendance: user.hours
          }));

          console.log(userData[0].username);

          setUsersData(userData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className='px-10 py-10 flex h-screen'>
      <Sidebar />
      <div className='flex justify-center items-center flex-1'>
        <div className='scale-125 p-60 min-h-screen'>
          <div className='profile-container w-full max-w-screen-xl mx-auto px-10 py-8 bg-yellow-100 rounded-3xl shadow-lg'>
            <h1 className='text-4xl font-bold mb-4'>Upcoming Events</h1>
            <hr className="mb-4" />
            <div className="overflow-auto max-h-[calc(8*3.5rem)]" style={{ paddingRight: '1rem' }}>
              <table className="min-w-full divide-y divide-gray-700 bg-yellow-50 rounded-xl">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Date</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Event</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Location</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Badge</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Attendance Hours</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {usersData.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.badge}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.attendance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;