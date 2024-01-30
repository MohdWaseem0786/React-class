import React, { useState } from 'react'
import Nav from './Nav'
import About from './About'
import Contect from './Contect'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'

// import Nav from './Nav'
// import Carausel from './Carausel'
// import Products from './Products'


const App = () => {
  // let data='bhopal'
// let color='Pink'
  // let [pink,setPink]=useState()
  
  // let [input,setInput]=useState()

  // const fun2 =(e)=>{
  //   setInput(e.target.value)
 

//   const fun1=()=>{
//     setPink('pink')
//   }



  // setInterval(() => {
  //   let time = new Date().toLocaleTimeString()
  //   setPink(time)
  // });

  return (
    <div>
      {/* <Nav/>
      <Carausel/>
      <Products/>
     */}
{/* 
      <button onClick={()=>{setPink('pink')}}>Pink</button>
      <p>fav color {pink}</p> */}

      {/* <h2>{pink}</h2> */}

      {/* <input type='texts' onChange={fun2}/>
     <h2>{input}</h2> */}

  <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>

    </div>

    
  )
}

export default App