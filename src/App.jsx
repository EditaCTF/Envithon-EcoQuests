import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Google from './Components/Google';
import Something from './Components/TeacherPanel';
import SuggestPage from './Components/Chat';
import ProfilePage from './Components/ProfilePage';
import EventsPage from './Components/EventsPage';
import ChatPage from './Components/ChatPage';
import LeaderboardPage from './Components/LeaderboardPage';
import Test from './Components/Test';
import TeacherCheck from './Components/TestTeacher';
import Update from './Components/UpdateProfile';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/google-auth" element={<Google />} />
        <Route path="/teacher-portal" element={<Something />} />
        <Route path='/chat' element={<SuggestPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/chat1' element={<ChatPage />} />
        <Route path='/leaderboard' element={<LeaderboardPage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/teacher' element={<TeacherCheck />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </Router>
  );
}