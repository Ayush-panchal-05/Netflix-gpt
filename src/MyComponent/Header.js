import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import {signOut } from "firebase/auth"
import { removeuser } from '../utils/userSlice'
import { useEffect } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import Browse from './Browse';

const Header = () => {
  const navigate = useNavigate() ;
  const dispatch = useDispatch() ;
  const user =useSelector(store =>store.user) ;
  const handleSignOut=()=>{
      signOut(auth).then(() => {
         // navigate("/") ;
          
        }).catch((error) => {
          
        });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})) ;   
        navigate("/Browse") ;
      } else {
        dispatch(removeuser()) ; 
        navigate("/") ;
      }
    });
    return () =>unsubscribe() ;
  },[]) ;

  return (
    <div className="absolute w-screen px-12 py-6 bg-gradient-to-b from-black from-20% z-30 flex justify-between"  >
      <img className="w-36 mx-28 " src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="Logo" />
      {user && 
      <div className="flex">
        <img src={user?.photoURL} className="w-12 h-12 rounded-lg" alt="" />
        <div className="w-18 h-12 ml-2">
           <h4 className="text-white w-18 h-6">{user?.displayName}</h4>
           <button className="text-white mr-4 w-18 h-6 pr-2 pl-2 rounded-lg" onClick={handleSignOut}>Sign out</button>
        </div>
      </div>}
    </div>
  )
}

export default Header 
