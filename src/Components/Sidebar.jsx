function Sidebar() {
    return (
        <div className="bg-green-100 px-10 flex flex-col justify-center items-center rounded-3xl shadow-lg w-60">
            <a href="/profile" className="button hover:underline">Profile</a><br />
            <a href="/leaderboard" className="button hover:underline">Leaderboard</a><br />
            <a href="/events" className="button hover:underline">Events</a><br />
            <a href="/chat" className="button hover:underline">AI Chatbot</a><br /><hr className="w-36"/><br />
            <a href="/teacher" className="button hover:underline">Teacher Panel</a>
        </div> 
    )
}

export default Sidebar;