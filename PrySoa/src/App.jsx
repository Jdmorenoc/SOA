import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// COMPONENTES
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseState from './playground/HookUseState'
import Saludar from './playground/Component'

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homehooks' element={<HomeHooks/>}></Route> 
        <Route path='/saludar' element={<Saludar/>}></Route> 
        <Route path='/usestate' element={<HookUseState/>}></Route> 
        <Route path='/navigate' element={<HookUseNavigate/>}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
