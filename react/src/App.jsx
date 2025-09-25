import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Regiok from './Regiok'
import Regisztracio from './Regisztracio'
import Alt_Reg from './Alt_Reg'
function App() {

  return (
      <div>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/regiok' element={<Regiok/>} />
            <Route path='/regisztracio' element={<Regisztracio/>} />
            <Route path='/alt_reg' element={<Alt_Reg/>} />
          </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
