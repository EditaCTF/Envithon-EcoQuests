"use client";
import React from 'react'
import { AiFillRobot } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { motion } from "framer-motion"

interface PageProps{
    "author":string,
    "message":string,
    "className":string
}

export default function Message({author,message,className}:PageProps) {

  return (
    <motion.div whileInView={{scale:1}} viewport={{once:true}} initial={{scale:0}}  className={`w-full min-h-20 flex flex-col py-2 px-4 rounded-xl ${className}`}>
      <span className="flex items-center">
      {  
        author === 'User' ? 
          <FaUser className='inline-block w-10 h-10 mr-2 border border-black bg-gradient-to-r from-teal-600 to-teal-300 rounded-full p-2' /> 
          :   
          <AiFillRobot className='inline-block w-10 h-10 mr-2 border border-black bg-gradient-to-r from-pink-700 to-pink-400 rounded-full p-2' />
      
      }
      <h4 className='font-bold text-2xl opacity-50 text-violet-200 capitalize'>{author}</h4>
      </span>  
      <p className='px-12 py-1'>{message===""? <p className='text-gray-400 italic'>Unspecified</p>:message}</p>
    </motion.div>
  )
}