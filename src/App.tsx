import Navbar from './components/navbar'
import './App.css'

// 2 - reaproveitamento de estrutura <-------------
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='flex flex-col gap-20 mb-20'>
      <Outlet /> {/*apenas isso vai mudar na transição de página!!*/}
      </div>
    </div>
  )
}