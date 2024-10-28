





import React, { useEffect, useRef } from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './home'
import Displayalbum from './Displayalbum';
import { albumsData } from '../assets/assets';

const Display = () => {

   const displayRef=useRef();
   const location=useLocation();
    const isAlbum=location.pathname.includes("album");
     const albumId=isAlbum?location.pathname.slice(-1):"";
     const bgcolor= albumsData[Number(albumId)].bgColor;
     console.log(bgcolor)
     
     useEffect(()=>{
        if(isAlbum){
         displayRef.current.style.background=`linear-gradient(${bgcolor},#121212)`
        }
        else{
               displayRef.current.style.background=`#121212`
        }
     },[location,isAlbum,bgcolor])

   
  return (
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Displayalbum />} />
      </Routes>
    </div>
  );
}

export default Display
