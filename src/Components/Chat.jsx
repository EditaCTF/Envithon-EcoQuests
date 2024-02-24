import { useState } from "react";
import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Sidebar from "./Sidebar";

function SuggestPage() {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [name, setName] = useState("");
  const genAI = new GoogleGenerativeAI("ENTER_YOUR_GEMINI_API_KEY");

  const fetchData = async () => {
    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = name;
    const result = await model.generateContent("As the Edita bot dedicated to supporting NSS (National Service Scheme) students, your role involves assisting with volunteering activities and keeping students informed about upcoming events. Please respond to the question enclosed in quotes: '" + prompt + "'");
    const response = await result.response;
    const text = await response.text();
    setApiData(text);
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className='px-10 py-10 flex h-screen'>
      <Sidebar />
      <div className='flex justify-center items-center flex-1'>
        <div className='scale-100 p-60 min-h-screen'>
          <div className='profile-container w-full mx-auto px-10 py-8 bg-yellow-100 rounded-3xl shadow-lg' style={{ overflow: 'visible' }}>
            <h1 className='text-4xl font-bold mb-4'>EditaBot</h1>
            <hr className="mb-4" />
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col items-center gap-5">
                <div className="bg-blue-100 overflow-auto px-4 py-5 w-full max-w-md rounded-lg border-2 border-gray-300" style={{ maxHeight: '30rem' }}>
                  {apiData && (
                    <React.Fragment>
                      {!loading && <p className="text-left">{apiData}</p>}
                      {loading && <p className="text-left">EditaBot is thinking...</p>}
                    </React.Fragment>
                  )}
                </div>
                <input
                  type="text"
                  className="form-control w-full p-4 border-2 border-gray-300 rounded-lg"
                  id="name"
                  value={name}
                  placeholder="Ask me anything!"
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" className="rounded-md py-2 px-4 bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                  Send
                </button>
              </div>
            </form>
            <div className="text-center mt-5">
              Developed By <a href="https://editaofficial.frenzyvjn.tech">EditaCTF</a> | Powered by <a href="https://ai.google.dev">Gemini</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestPage;
