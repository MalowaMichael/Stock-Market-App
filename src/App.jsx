import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { StockChart } from "./Components/StockChart";
import { Details } from "./Pages/Details";
import stock_data from "./Components/StockService/StockData";
import { useState } from "react";
import { SideBar } from "./Components/SideBar";
import { Header } from "./Components/Header/Header";
import { Portfolio } from "./Pages/Portfolio";
import { Settings } from "./Pages/Settings";
import { FullChartView } from "./Pages/FullChartView";
import {useStockContext} from "./Context/StockContext";
import { FAQ } from "./Pages/FAQ";
import { LoginSignup } from "./Pages/LoginSignup";

function App() {
  const {lightMode } = useStockContext();

  const [subTabSelected, setsubTabSelected] = useState(["Watchlist", "Line", "Normal view"]);
  const [tabClicked, setTabClicked] = useState("Dashboard")

  return (
      <BrowserRouter>
      <div className={` md:flex gap-5 ${lightMode ? "bg-gray-200 transition-all duration-900 transition-ease-in-out": "bg-black"}`}>
        <SideBar setsubTabSelected={setsubTabSelected} tabClicked={tabClicked} setTabClicked={setTabClicked} />
        
        <div className="flex-1 border-none border-white">          
          <Header />
          <Routes>
            <Route path="/" element={<Home subTabSelected={subTabSelected} setTabClicked={setTabClicked} />} />
            <Route path="/stock-portfolio" element={<Portfolio subTabSelected={subTabSelected}/>} />
            <Route path="/fullcharts" element={<FullChartView subTabSelected={subTabSelected} />} />
            <Route path="/settings" element={<Settings subTabSelected={subTabSelected} setsubTabSelected={setsubTabSelected} />} />
            <Route path="/details/:stockSymbol" element={<Details stocks={stock_data} />} />
            <Route path = "faq" element={<FAQ/>}></Route>
            <Route path="login" element={<LoginSignup/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
