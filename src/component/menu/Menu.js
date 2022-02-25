import React from 'react';
import {Data} from '../data/Data';
import './menu.css';

import MenuItem from '../menuitem/MenuItem';
const Menu = () => {

const menu1={
textAlign:"left",
marginTop:"-100px",
fontWeight:"800",
fontSize:"65px",
marginBottom:"30px",

}

    return (
        <div className='menu' >
        <h1 style={menu1}> Faverite Food At One Click</h1>

        <div className='row'>
        <div className='col border-start border-5 border-success'>
        
        {Data.map((menuItem,key)=>{
            return (<MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} p={menuItem.p}/>);
        })}
        
        </div>
        
        
        </div>
            
        </div>
    );
};

export default Menu;