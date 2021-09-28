import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import photo from './img/sandeepu.jpg'

const About = () => {
    const [show, setshow] = useState(false);
    return (
        <>
             <div className="container mt-5 profile">
                 
                <div className="row">
                    <div className="col-11 col-md-4 img">
                        <img src={photo} alt="img" />

                    </div>
                    <div className="col-11 col-md-6">
                        <div className="profile-head ">
                            <h4 className="head">Akhand pratap</h4>
                            <h6>web developer</h6>
                            <p className="profile-rating mt-3 mb-5">
                                RANKINGS : 1/10
                            </p>
                        </div>
                    </div>
                    <div className="col-11 col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />

                    </div>
                </div>
                <div className="setbutton ">
                <button  className="btnsmile" onClick={() => setshow(false)}>About</button>

                <button  className="btnsad" onClick={() => setshow(true)}>Timeline</button>
                </div>

                <div className="App">
                    {
                        show ? <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINKS</p>
                              <label>  <a href="" className="workdone" target="akhand">Linkdin</a></label><br />
                                <a href="" className="workdone " target="akhand">Facebook</a> <br />
                                <a href="" className="workdone" target="akhand">Instagram</a><br />
                                <a href="" className="workdone" target="akhand">Github</a> <br />
                                <a href="" className="workdone" target="akhand">CodeChef</a><br />
                                <a href="" className="workdone" target="akhand">HackerRank</a> <br />
                                <a href="" className="workdone" target="akhand">GFG</a> <br />

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                            <div className="col-md-6">
                            <label>Experience</label>
                                </div>
                                <div className="col-md-6">
                                <h6>Expert</h6>
                                </div>
                                <div className="col-md-6">
                            <label>Total Project</label>
                                </div>
                                <div className="col-md-6">
                                <h6>10</h6>
                                </div>
                                <div className="col-md-6">
                            <label>Programming</label>
                                </div>
                                <div className="col-md-6">
                                <h6>Expert</h6>
                                </div>
                                <div className="col-md-6">
                            <label>English Level</label>
                                </div>
                                <div className="col-md-6">
                                <h6>Expert</h6>
                                </div>
                                <div className="col-md-6">
                            <label>Availibility</label>
                                </div>
                                <div className="col-md-6">
                                <h6>6 Months</h6>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                        
        
 : <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINKS</p>
                                <a href="https://www.linkedin.com/in/akhand-pratap-339904202/" className="workdone" target="akhand">Linkdin</a><br />
                                <a href="" className="workdone " target="akhand">Facebook</a> <br />
                                <a href="" className="workdone" target="akhand">Instagram</a><br />
                                <a href="" className="workdone" target="akhand">Github</a> <br />
                                <a href="" className="workdone" target="akhand">CodeChef</a><br />
                                <a href="" className="workdone" target="akhand">HackerRank</a> <br />
                                <a href="" className="workdone" target="akhand">GFG</a> <br />

                            </div>
                        </div>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" area-aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>45578437652566</p>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Akhand Pratap Singh</p>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email-ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>akhandbhu@11gmail.com</p>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>9140903852</p>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div> </div></div>  </div>}
</div>

</div>
                            
        </>
    )
}      

export default About
