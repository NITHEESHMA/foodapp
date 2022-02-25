
import './App.css';
import Navigation from './component/Navigation';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './component/footer/Footer';
import Menu from './component/menu/Menu';
import About from './component/about/About';
import Contact from './component/contact/Contact';





function App() {
  return (
    <div className="App">
   
    <Navigation/>
    <BrowserRouter>
        <Routes>
     
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/order" element={<Menu/>}/>
      
    </Routes>
    </BrowserRouter>
     
    
<Footer/>
   
    </div>
  );
}

export default App;


