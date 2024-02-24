import React, { useEffect } from "react";
import Pocketbase from 'pocketbase';
const pb = new Pocketbase('https://edita.pockethost.io/');

function TeacherCheck() {
    useEffect(() => {
    const isTeacher = pb.authStore.model.isTeacher;

    if (isTeacher === true) {
        window.location.href = "/teacher-portal";
} else {
      window.location.href = "/login";
      alert("You are not a teacher");
    }
  }, []);
}

export default TeacherCheck;