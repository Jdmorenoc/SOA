import './App.css'
import HomeHooks from './playground/HomeHooks'
import HookUseNavigate from './playground/HookUseNavigate'
import HookUseState from './playground/HookUseState'
import Saludar from './playground/Component'

function App(){
  return (
    <>
    <h1>Juan Moreno</h1>
    <Saludar/>
    <HomeHooks/>
    <HookUseNavigate/>
    <HookUseState/>
    </>
  )
}

export default App
