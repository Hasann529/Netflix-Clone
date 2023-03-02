import React, { useEffect, useState } from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase-config';
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { clearMovies } from '../../redux/Action';

const Navbar = () => {
  const dispatch = useDispatch()
  const [searchbar, setSearchbar] = useState(false)

   const navigate = useNavigate()

   useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser){
        navigate("/signup");
        dispatch(clearMovies())
      }
       
    });
  
   },[navigate,dispatch])
   
  return (
    <div className='navbar'>
       <img src={logo} alt='logo' />
       <div className='nav-content'>
          <div className="lists">
            <Link to='/' >Home</Link>
            <Link to='/tvshows' >TV Shows</Link>
            <Link to='/recent' >Recently Added</Link>
            <Link to='/mylist' >My List</Link>
          </div>
          <div className='icons'>
          {searchbar && <input type="text" placeholder="Titles, people, genres" />} 
          <FaSearch onClick={()=> {searchbar ? setSearchbar(false) : setSearchbar(true)} } />
          <FaPowerOff className='off'  onClick={() => signOut(firebaseAuth)} />
          </div>
       </div>
      
    </div>
  )
}

export default Navbar
