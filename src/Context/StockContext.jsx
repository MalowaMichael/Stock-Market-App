import { createContext, useContext, useState } from "react";
import indices_data from "../Components/StockService/IndicesData";
import stock_data from "../Components/StockService/StockData";

/**const performance_data = [
  { date: "Mar-23", DJIA: 11678.45, SPX: 2550.75, IXIC: 11988.19, FTSE: 7254.34, DAX: 1550.78, N225: 20789.23 },
  { date: "Mar-24", DJIA: 25720.68, SPX: 3578.12, IXIC: 10025.23, FTSE: 17270.45, DAX: 2570.55, N225: 15890.55 },
  { date: "Mar-25", DJIA: 14550.92, SPX: 5540.33, IXIC: 15850.12, FTSE: 7205.18, DAX: 5450.12, N225: 13550.33 },
  { date: "Mar-26", DJIA: 34600.00, SPX: 4560.00, IXIC: 17950.00, FTSE: 27260.00, DAX: 6675.00, N225: 15700.00 },
  { date: "Mar-27", DJIA: 24800.00, SPX: 7580.00, IXIC: 24100.00, FTSE: 22290.00, DAX: 8750.00, N225: 18900.00 },
  { date: "Mar-28", DJIA: 30450.92, SPX: 5540.00, IXIC: 33870.00, FTSE: 19210.00, DAX: 11420.00, N225: 21600.00 },
  { date: "Mar-29", DJIA: 31500.00, SPX: 6550.00, IXIC: 34900.00, FTSE: 20240.00, DAX: 17500.00, N225: 29750.00 }
]; */

export const StockContext = createContext(null)

export const StockContextProvider = (props) =>{
  const [minimize, setMinimize] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [on, setOn] = useState(false)
  
//toggle sidebar
const toggleSidebar = () =>{
  setSidebarOpen(!sidebarOpen)
}
  //toggling the themes
  const toggleThemeMode = () => {
    setLightMode(!lightMode)

    if(!lightMode) {
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }


  const contextValue = {
    indices_data, stock_data, 
    minimize, setMinimize,
    sidebarOpen, toggleSidebar, 
    lightMode, setLightMode,
    toggleThemeMode,
    on, setOn,
  
  }

  return (
    <StockContext.Provider value={contextValue}>
      {props.children}
    </StockContext.Provider>
  )
}

//custom hook
  export const useStockContext = () =>{
    return useContext(StockContext);
  }