import React from 'react';
import logo from './images/logo1.jpg';

import ReorderIcon from '@mui/icons-material/Reorder';
import {  Nav ,NavItem} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/navigation.css';
const Navigation = () => {
    return (
        <div className='container'>

        <div className='leftside'>
        <img src={logo} style={{width:"100px"}}/>
        </div>

        <div className='rightside'>
{/*} <Link to="/">HOME</Link>
        <Link to='/'>MENU</Link>
        <Link to="/">ABOUT</Link>
    <Link to="/">CONTACT</Link>*/}


  {/*} <a href="/">HOME</a>
    <a href="/menu">MENU</a>
    <a href="/about">ABOUT</a>
    <a href="/contact">CONTACT</a>*/}

<Nav>

    <Nav.Item>
    <Nav.Link href="/home">HOME</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/menu">MENU</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">ABOUT</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/contact">
      CONTACT
    </Nav.Link>
  </Nav.Item>
</Nav>
        </div>

        <button>
        <ReorderIcon/>
        </button>
        </div>
    );
};

export default Navigation;