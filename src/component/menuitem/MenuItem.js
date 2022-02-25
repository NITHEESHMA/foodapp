import React, { StrictMode } from 'react';
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from '../data/Data';




export default function MenuItem({image,name,price,p}) {
  
  const buttonitem={
    float:"right",
    marginRight:"510px",
    marginTop:"-180px"
    
  }


     //const orderItem=(menuItem,key)=>{
      // this.Data.bind((menuItem,key)=> key!==0);      
     
// alert('your item added to cart');
  //}

  function handleRemove() {
   
      
       alert("your is order placed");
     
  }



  return (
    <div className='menuitem'>

    <Card style={{ width: '18rem' ,marginLeft:"30px"}}>
   
    
    
  
    <div className='row' style={{disply:"flex"}}>
    <div className='col-4'>
    <div> <img src={image}/></div>
    <Card.Title style={{width:'18rem'}}>
    <h1>{name}</h1>
    <p>{price}</p>
   
 
  </Card.Title>

    </div>
    
    </div>
    
    </Card>
    <button onClick={() => handleRemove()} style={buttonitem}>{p}</button>
    </div>
    
    
  )
}
