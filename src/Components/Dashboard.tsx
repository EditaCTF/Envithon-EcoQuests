import React from 'react';
import ProfilePage from './Dashboard_Subpages/ProfilePage';
import LeaderboardPage from './Dashboard_Subpages/LeaderboardPage';
import EventsPage from './Dashboard_Subpages/EventsPage';
import ChatPage from './Dashboard_Subpages/ChatPage';

function YourComponent() {
  const [activeTab, setActiveTab] = React.useState('profile');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfilePage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'events':
        return <EventsPage />;
      case 'chat':
        return <ChatPage />;
      default:
        return null;
    }
  }


function Dashboard() {
    return( 
        <main>
            <div className="flex justify-center items-center gap-4 pt-5 pr-5 w-fit">
                <button onClick={() => openTab('profile')}>Profile</button>
                <button onClick={() => openTab('leaderboard')}>Leaderboard</button>
                <button onClick={() => openTab('events')}>Events</button>
                <button onClick={() => openTab('chat')}>Chat</button>
            </div>
            {renderContent()}
        </main>
    );
}

export default Home;