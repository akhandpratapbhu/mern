import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from './img/image2.jpg'
const Login = () => {

const [email,setEmail]=useState();
const [password,setPassword]=useState();
 

      const   userlogin=async(e)=>{
            e.preventDefault();
      }


    return (
        <>
            <section >
               <div className="container ap mt-5">
                   <div className="signin-content row">
                   <div className=" col-lg-6 col-sm-10 signup-image">
                               <figure>
                                   <img src={image} alt="img"/>
                               </figure>
                               <NavLink to="/login" className="signup-image-link">
                                   I am already register
                               </NavLink>
                           
                       </div>
                       <div className=" col-lg-6 col-sm-10 signup-form">
                           <h2 className="form-title">Sign In</h2>
                           <form className="register-form"id="register-form">
                               
                               <div className="form-group">
                                   <label htmlFor="email">
                                   <i class="zmdi zmdi-email font"></i>
                                   </label>
                                   <input type="email" name="email" class="input-field" id="email" autoComplete="off"
                                   placeholder="Your Email" value={email}
                                   onChange={(e)=>setEmail(e.target.value)}/>
                               </div>
                               
                             <div className="form-group">
                                   <label htmlFor="password">
                                   <i class="zmdi zmdi-lock font"></i>
                                   </label>
                                   <input type="password" name="password" class="input-field"
                                    id="password" autoComplete="off"
                                    placeholder="Your password " value={password} onChange={(e)=>setPassword(e.target.value

                                    )}  />
                               </div>
                               <div className="form-group form-button">
                                   <input type="submit" onClick={userlogin} name="signup" id="signup" className="form-submit" value="login"/>
                               </div>
                           </form>
                           </div>
                           
                   </div>
               </div>
            </section>
        </>
    )
}

export default Login

