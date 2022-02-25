import React from 'react';
import './contact.css';
const Contact = () => {
    return (
        <div className='contact'>
        <div className='leftcontact'>
        <img src='https://tse3.mm.bing.net/th?id=OIP.eDJbIRxpmyIDSSYMacyD8gHaF2&pid=Api&P=0&w=205&h=161'/>
        <h1>contact us</h1></div>



        <div className='rightcontact'>

           <form method='post'>
           
           <label htmlFor='name'>FULL NAME</label>
           <input type='text'name='name' placeholder='Enter Your Name'/><br/>


<label  htmlFor='email'>Email</label>
<input type='email' name='name' placeholder='Enter your Email'/>
<br/>
<label htmlFor='message'>message us</label><br/>
<textarea name='message' cols='16' rows="4"  ></textarea>  
<button type='submit'>Send message</button>
       
      
       
           </form> 
           </div>
        </div>
    );
};

export default Contact;