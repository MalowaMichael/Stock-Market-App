import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Slider } from "./Components/Slider";
import { Home } from "./Pages/Home";
import { StockDetails } from "./Components/StockDetails";
import { SearchBar } from "./Components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<StockDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
