import React from 'react'
import phone from './img/phone1.jpg'
import email from './img/email1.png'
import bhu from './img/bhu.jpg'
const Contact = () => {
  return (
    <>
      <div className="container-fluied  mt-5">
        <div className="row  ">
          <div className="col-sm-11 col-lg-4 shadow ">
            <div className="row ">
              <div className="col-4  phone">
                <img src={phone} alt="img" />
              </div>
              <div className="col-7 text">
                <h3>Phone</h3>
                <h6>9140903852</h6>
              </div>
            </div>

          </div>
          <div className="col-sm-11 col-lg-4 shadow ">
            <div className="row">
              <div className="col-4  phone">
                <img src={email} alt="img" />
              </div>
              <div className="col-7 text">
                <h3>Email</h3>
                <h6>akhandpratap121196@gmail.com</h6>
              </div>
            </div>

          </div>
          <div className="col-sm-11 col-lg-4 shadow">
            <div className="row">
              <div className="col-4  phone">
                <img src={bhu} alt="img" />
              </div>
              <div className="col-7 text">
                <h3>Address</h3>
                <h6>bhu varanasi</h6>
              </div>
            </div>

          </div>


        </div>

      </div>
      <div className="container mt-5 Touch">
        <h2 className="get">Get in Touch</h2>
        <div className=" row input-group mb-3">
          <div className="col-11 col-lg-4 col-md-11">
          <input type="text" className="form-control" placeholder="your name" aria-label="Username" />
          </div>
          <div className="col-11 col-lg-4 col-md-11">
          <input type="email" className="form-control" placeholder="your email" aria-label="Username" />
            </div>
            <div className="col-11 col-lg-4 col-md-11">
            <input type="number" className="form-control" placeholder="your phone number" aria-label="Server" />

            </div>
        </div>

        <div className="input-group akash">
  
  <textarea className="form-control" aria-label="With textarea" placeholder="message"></textarea>
</div>

        <div className="form-group form-button">
          <input type="submit" name="signup" id="signup" className="form-submit-button" value="Send Message" />
        </div>
      </div>
    </>
  )
}

export default Contact
