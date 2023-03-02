import React, { useEffect, useState } from "react";
import Background from "../components/Signup/Background";
import Header from "../components/Signup/Header";
import { firebaseAuth } from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleSignUp = async() =>{
       try {
        const {email,password} = formValues
        await createUserWithEmailAndPassword(firebaseAuth,email,password)
       } catch (err) {
        console.log(err)
       }
  }

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if(currentUser) navigate('/')
   })
  },[navigate])

  

  return (
    <div className="signup">
      <Background />
      <div className="contain">
        <Header />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, TV</h1>
            <h1>shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              {" "}
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value })} />
            {showPassword && (
              <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]: e.target.value })} />
            )}
            {!showPassword && (
              <button onClick={() => {setShowPassword(true) }}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignUp}>Sign Up</button>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
