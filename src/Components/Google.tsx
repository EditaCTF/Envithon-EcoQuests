import React, { useState } from 'react'
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://edita.pockethost.io/');

function Google() {
    const handleSubmit = async() => {
        const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
        console.log(authData)

        {console.log(pb.authStore)}

      }
    return ( 
        <main>
            
            <button onClick={handleSubmit}>
                Reset
            </button>
        </main>
     );
}

export default Google;