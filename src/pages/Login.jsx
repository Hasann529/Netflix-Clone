import React, {useEffect, useState} from 'react'
import Background from '../components/Signup/Background'
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from '../components/Signup/Header';



const Login = () => {
  const navigate = useNavigate();
  const [err , setErr] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
 

  const handleLogIn = async () => {
    try {
      const {email,password} = formValues
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      
    } catch (error) {
      setErr(true)
    }
  };
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) navigate("/");
    });
  },[navigate])

 

  return (
    <div className='login'>
      <Background />
      <div className="contain">
       <Header login />
       <div className='body'>
         <div className='form'>
              <h3>Log In</h3>
              {err && <p style={{color:'#e50914'}}>User Not Found..</p>}
              <input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value })} />
              <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value })} />
              <button onClick={handleLogIn}>Log In</button>
         </div>
       </div>
    </div>
      
    </div>
  )
}

export default Login
