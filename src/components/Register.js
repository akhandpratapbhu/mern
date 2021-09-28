import React, { useState } from 'react'
import { NavLink,useHistory } from 'react-router-dom'
import image from './img/image1.jpg'
const Register = () => {
    const history=useHistory(); 
    const [user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })
  let name,value;
   const handleInput= (e)=>{
       console.log(e);
       name=e.target.name;
       value= e.target.value;
       setUser({...user,[name]:value});
   }


               const postData= async(e)=>{
                  e.preventDefault();

                  const{name,email,phone,work,password,cpassword}=user;
                  const res= await fetch("/register",{
                      method:"POST",
                      headers:{
                          "Content-type" : "application/json"
                      },
                      body:JSON.stringify({
                        name,email,phone,work,password,cpassword
                      })
                  });
                  const data=await res;
                  if(data.status===422 || !data){
                      window.alert("Invalid Registration");
                      console.log("Invalid Registration");

                  }else{
                    window.alert(" Registration Successfully");
                    console.log(" Registration Successfully");
                    history.push("/login");
                  }
               }
   


    return (
        <>
            <section className="signup">
               <div className="container mt-5">
                   <div className="signup-content row">
                       <div className=" col-lg-6 col-sm-10 signup-form">
                           <h2 className="form-title">Sign up</h2>
                           <form method="POST" className="register-form"  id="register-form">
                               <div className="form-group">
                                   <label htmlFor="name">
                                   <i className="zmdi zmdi-account font"></i>
                                   </label>
                                   <input type="text" name="name" class="input-field" id="name" autoComplete="off" onChange={handleInput} value={user.name} placeholder="Your Name"/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="email">
                                   <i className="zmdi zmdi-email font"></i>
                                   </label>
                                   <input type="email" name="email" 
                                   class="input-field" id="email" 
                                   autoComplete="off" 
                                   onChange={handleInput}
                                    value={user.email} placeholder="Your Email"/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="phone">
                                   <i className="zmdi zmdi-phone font"></i>
                                   </label>
                                   <input type="number" name="phone" class="input-field" id="phone" autoComplete="off" onChange={handleInput} value={user.phone} placeholder="Your Phoneno."/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="work">
                                   <i className="zmdi zmdi-slideshow font"></i>
                                   </label>
                                   <input type="text" name="work" class="input-field" id="work" autoComplete="off" onChange={handleInput} value={user.work} placeholder="Your profession"/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="password">
                                   <i className="zmdi zmdi-lock font"></i>
                                   </label>
                                   <input type="password" name="password" class="input-field" id="password" autoComplete="off" onChange={handleInput} value={user.password} placeholder="Your password "/>
                               </div>
                               <div className="form-group">
                                   <label htmlFor="cpassword">
                                   <i className="zmdi zmdi-lock font"></i>
                                   </label>
                                   <input type="password" name="cpassword" class="input-field" id="cpassword" autoComplete="off" onChange={handleInput} value={user.cpassword} placeholder="Your confirm password "/>
                               </div>
                               <div className="form-group form-button">
                                   <input type="submit" name="signup"
                                    id="signup" className="form-submit"
                                     value="register" onClick={postData}
                                     />
                               </div>
                           </form>
                           </div>
                           <div className=" col-lg-6 col-sm-10 signup-image">
                               <figure>
                                   <img src={image} alt="img"/>
                               </figure>
                               <NavLink to="/login" className="signup-image-link">
                                   I am already register
                               </NavLink>
                           
                       </div>
                   </div>
               </div>
            </section>
        </>
    )
}

export default Register
