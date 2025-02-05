import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Favourite from './components/Favourite';
import PageNotfound from './components/PageNotfound';


function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={
        <>
        <Banner />
        <Movies />
        </>
      }></Route>
      <Route path='/fav' element={
        <Favourite />
      }></Route>
      <Route path='*' element={<PageNotfound />}></Route>
     </Routes>
      
     </BrowserRouter>
    </>
  )
}

export default App
