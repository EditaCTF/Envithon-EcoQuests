import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import '../App.css';
import Sidebar from './Sidebar';

const pb = new PocketBase('https://edita.pockethost.io');

function Leaderboards() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const records = await pb.collection('users').getFullList(
          {sort: '-attendence'}
        );
      console.log(records)
        

        if (records.length > 0) {
          const userData = records.map(user => ({
            username: user.username,
            attendance: user.attendence,
            badges: user.badges,
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
            <h1 className='text-4xl font-bold mb-4'>Leaderboards</h1>
            <hr className="mb-4" />
            <div className="overflow-auto max-h-[calc(8*3.5rem)]" style={{ paddingRight: '1rem' }}>
              <table className="min-w-full divide-y divide-gray-700 bg-yellow-50 rounded-xl">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Rank</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Username</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Badges</th>
                    <th scope="col" className="px-6 py-3 text-center text-sm font-medium">Attendance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {usersData.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm">{user.badges.length}</td>
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

export default Leaderboards;