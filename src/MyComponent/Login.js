import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn ,setSignIn]= useState(true) ;
    const changetheme=()=>{
      setSignIn(!isSignIn);
    };
  return (
    <div >
       <Header/>   
      <div className="absolute">
        <img  style={{height:"775px",width:"96rem"}} src='https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_small.jpg'  alt='Theme'></img>
       </div>
       <form className="absolute p-16 my-28 mx-auto right-0 left-0 text-white rounded-md" style={{width:"28rem",height:"38rem",background: 'rgb(0, 0, 0, 0.80)'}}>
         <h1 className="py-2 text-3xl" style={{width:"20rem"}} >{isSignIn?"Sign In":"Sign Up"}</h1>
         {!isSignIn &&( <input type="text" placeholder='Name' className="p-3 mt-4 rounded-md"  style={{background:'#343434',width:"20rem",justifyItems:"center"}}/>
         )}
         <input type="email" placeholder='Email Address or Phone Number' className="p-3 my-4 rounded-md"  style={{background:'#343434',width:"20rem",justifyItems:"center"}}/>
         <input type="password" placeholder='Password'className="p-3 rounded-md" style={{background:'#343434',width:"20rem"}}/>
         <button className="p-3 mt-10 bg-red-600 rounded-md" style={{width:"20rem"}}> {isSignIn?"Sign In":"Sign Up"}</button>
         <div  className='mt-4' style={{width:"20rem"}}>
           <div style={{float:"left"}}>
              <input type="checkbox" className="accent-gray-600 w-4 h-4 rounded-md"/>
              <label className="text-sm"style={{color:'#999'}}> Remember me</label>
           </div>
           <a href='https://www.netflix.com/dz-en/LoginHelp' className="text-xs hover:underline"style={{float:"right",color:'#999'}}>Need help?</a>
         </div>
         <div className="mt-24" style={{width:"20rem"}}>
          <p className="cursor-pointer" style={{color:"#999"}} onClick={changetheme}>
           {isSignIn?"New to Netflix":"Already registered"} <span className="hover:underline" style={{color:"white"}}>{isSignIn?"Sign In Now":"Sign Up"}</span>
          </p>
         </div>
         <div className='text-xs'style={{width:"20rem"}}>
          <p style={{color:'#999',lineHeight:"1.1rem"}}>
          This page is protected by Google reCAPTCHA to ensure<br/> you're not a bot.<a style={{color:"blue"}} href="">Learn more.</a>
          </p>
         </div>
       </form>
       
    </div>
  )
}

export default Login
