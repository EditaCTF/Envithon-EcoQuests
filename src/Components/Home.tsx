import React from "react";
function Home() {
    return ( 
        <main className='bg-green-200 flex justify-center items-center min-h-screen'>
            <div className='bg-green-100 flex w-192 h-96 p-10 rounded-lg shadow-md'>
                <div className="flex-1 flex flex-col justify-center items-center p-20">
                    <h1 className='text-4xl font-bold mb-6 text-center'>Welcome to EcoQuests</h1>
                </div>
                <div className="flex-1 flex flex-col justify-center items-start">
                    <div className='mb-4'>
                        <p className='text-lg font-semibold mb-2'>Already a member?</p>
                        <a href="/login" className='block w-full'>
                            <button className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 transition duration-300">Login</button>
                        </a>
                    </div>
                    <div>
                        <p className='text-lg font-semibold mb-2'>New around here?</p>
                        <a href="/register" className='block w-full'>
                            <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Create new account</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* <p>&copy; Submission by Team Edita for Envithon'24 conducted by NSS of SNUC</p> */}
        </main>
     );
}
    
export default Home;