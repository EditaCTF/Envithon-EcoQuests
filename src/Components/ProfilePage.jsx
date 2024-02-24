import React, { useState, useEffect } from 'react';
import Pocketbase from 'pocketbase';
import '../App.css';
import Sidebar from './Sidebar';
import beach from '../../static/beach.png';
import bird from '../../static/bird.png';
import camp from '../../static/camp.png';
import other from '../../static/other.png';
import def from '../../static/default.png';

const pb = new Pocketbase('https://edita.pockethost.io');

function ProfilePage() {
  const [usersData, setUsersData] = useState({});

  const handleBadgeClick = (badgeType) => {
    const badgeTexts = {
      beach: "Just earned the Beach Cleaning badge! 🏖️ #EnvironmentalAction #NSS #SNUC",
      bird: "Achieved the Birdwatching badge! 🦅 #NatureLover #NSS #SNUC",
      camp: "Completed the Camping badge! ⛺️ #AdventureTime #NSS #SNUC",
      other: "Participated in an NSS Event! #NSS #SNUC",
    };

    const tweetText = badgeTexts[badgeType] || "Check out my awesome website! #WebDevelopment";
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterIntentUrl, '_blank');
  }
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        let id = await pb.authStore.model.id;
        const record = await pb.collection('users').getOne(id);

        if (record) {
          const userData = {
            name: record.user,
            reg: record.regno,
            username: record.username,
            email: record.email,
            year: record.year,
            dept: record.department,
            about: record.about,
            badges: record.badges
          };
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
        <div className='p-20'>
          <div className='profile-container scale-125 w-full max-w-screen-xl mx-auto px-10 py-8 bg-yellow-100 rounded-3xl shadow-lg'>
            <h1 className='text-4xl font-bold mb-4'>Profile</h1>
            <hr className="mb-4" />
            <div className='flex h-48 mt-8'>
              <div className="flex justify-center items-center p-20">
                <img className='w-32 h-32 mb-8' src={def} alt='Profile Picture' />
              </div>
              <div className="flex-1 flex flex-col justify-center items-center p-20">
                <div className='mb-6'>
                  <p className='text-lg'>{usersData.name} {usersData.username}</p>
                  <p className='text-lg'>{usersData.reg}</p>
                  <p className='text-lg'>{usersData.email}</p>
                  <p className='text-lg'>Year {usersData.year}</p>
                  <p className='text-lg'>{usersData.dept}</p>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="recents-section">
              <p className='text-lg font-semibold mb-2'>About Me</p>
              <p className='text-lg'>{usersData.about}</p>
            </div>
            <hr className="my-4" />
            {usersData.badges && (
              <div>
                <p className='text-lg font-semibold mb-2'>Badges</p>
                <div className="badges-section flex flex-wrap">
                  {usersData.badges.map((badge, index) => (
                    <div className='flex items-center' key={index}>
                      {badge === 'beach' && <img className='w-16 h-16 mr-6' src={beach} alt="Beach" title='Beach Cleaning' id="tweetBeach" onClick={() => handleBadgeClick('beach')} />}
                      {badge === 'bird' && <img className='w-16 h-16 mr-6' src={bird} alt="Bird" title='Birdwatching' id="tweetBird" onClick={() => handleBadgeClick('bird')} />}
                      {badge === 'camp' && <img className='w-16 h-16 mr-6' src={camp} alt="Camp" title='Camping' id="tweetCamp" onClick={() => handleBadgeClick('camp')} />}
                      {badge === 'other' && <img className='w-16 h-16 mr-6' src={other} alt="Other" title='Other activities' onClick={() => handleBadgeClick('other')} />}
                    </div>
                  ))}
                </div>
                <hr className="my-4" />
              </div>
            )}
            <div className='flex flex-wrap'>
              <a href="/update" className="hover:text-gray-500 hover:underline">
                <h2 className='text-lg font-semibold'>Edit Profile</h2>
              </a>
              <a href="/" className="hover:text-gray-500 hover:underline ml-4">
                <h2 className='text-lg font-semibold'>Logout</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
