
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Slider } from './Components/Slider'
import { Home } from './Pages/Home'
import { Details } from './Pages/Details'
import { StockDetails } from './Components/StockDetails'
import { SearchBar } from './Components/SearchBar'

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Slider/>
      <SearchBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        
 <Route path="details" element={ <StockDetails/>
}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
