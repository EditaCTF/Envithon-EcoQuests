import React from "react";
import Pocketbase from 'pocketbase';

const pb = new Pocketbase('https://edita.pockethost.io/');

function Test() {
  const handleSubmit = async() => {
    console.log(pb.authStore.model);
  }

  const handleClear = async() => {
    pb.authStore.clear();
    console.log(pb.authStore.model.isTeacher);
  }

  return ( 
    <main>
        <button onClick={handleSubmit}>Test</button>
        <button onClick={handleClear}>Clear</button>
    </main>
  );
}

export default Test;