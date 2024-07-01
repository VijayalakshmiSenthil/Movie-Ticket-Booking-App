import './App.css'
import { useState } from 'react';
import LoginForm from './components/login';
import { Routes, Route } from 'react-router-dom';
import Movie from './components/movie';
import DetailsAboutMovie from './components/movieview';
import Home from './components/home';
import Cart from './components/cart';
import Contact from './components/contact'
import Navigation from './components/navbar';
function App() {
  const [cart,setCart] =useState([]); 
  const [popup,setPopup]=useState(false);


  const handleClick=(movie)=>{
    let isPresent = false;
    cart.forEach((cinema)=>{
      if(movie._id===cinema._id)
      isPresent = true;
    })
    if (isPresent){
      setPopup(true);
      return;
    }
    setCart([...cart,movie]);
  }
  return (
    <>
    
    <Navigation size={cart.length} />
      <div className='App'>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movieview/:_id" element={<DetailsAboutMovie handleClick={handleClick} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          {
          popup && window.alert("Whoops! your show is already in your cart.")
          }
        </Routes>
      </div>
    </>
  );
}  
export default App;


