import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'


function App() {
 

  return (
    <>
      <div>
         <BrowserRouter>
           <Routes>
             <Route path='/' element={<Home/>} /> 
             <Route path='/login' element={<Login/>} /> 
           </Routes>
         </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
