import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
const Result=()=>
{
    <p>Email has been sent</p>
}

const Contact = () => {

    const [res, showres]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6yjaf2m', 'template_9ufcty6', e.target, '0kcXd7SdqETfygUGV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
          showres(true);
      };
    



  return (
  <div className='center' onSubmit={sendEmail}>
    <h1 className='center'>Contact Us</h1>
    <p className='center' >Please fill the details and connect along</p>
    <form className='form'>
      First Name :  <input className='in'  type="text" name="f_name"></input><br></br>
      Email Address:  <input  className='in' name="email" type="text"></input><br></br>
      Message:   <input  className='in' name="message" type="text"></input><br></br>
      

      <button className='button'>Submit</button>
      <div>{res ? <Result/>:null}</div>
      

    </form>


    </div>
    
  )
}

export default Contact