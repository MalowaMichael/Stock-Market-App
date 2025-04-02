import { useParams } from "react-router-dom"

import { BarChart } from "../Components/Charts/StockCharts/BarChart"
import { AreaChart } from "../Components/Charts/StockCharts/AreaChart"
import { PieChart } from "../Components/Charts/StockCharts/DoughnutChart"
import { TopBar } from "../Components/DetailsComponents/TopBar"
import { useState } from "react"
import { TableView } from "../Components/DetailsComponents/Views/TableView"
import { NormalView } from "../Components/DetailsComponents/Views/NormalView"

export const Details = ({stocks}) => {
  const [chartSelected, setChartSelected] = useState("");
  const [viewSelected, setviewSelected] = useState("Normal view");

  const {stockSymbol} = useParams()
  const stock = stocks.find((stk) => stk.symbol === stockSymbol)

  if(!stock) return <p>No stock found</p>

  /*const stockProperties = [
    {id: 0, name: "Symbol", val: `${stock.symbol}`},
    {id: 1, name: "Price", val: `$ ${stock.regularMarketPrice}`},
    {id: 2, name: "Change", val: `${stock.regularMarketChangePercent}%`},
    {id: 3, name: "Market Cap", val: `$ ${stock.marketCap}`},
    {id: 4, name: "Day High", val: `$ ${stock.regularMarketDayHigh}`},
    {id: 5, name: "Day Low", val: `$ ${stock.regularMarketDayLow}`},
    {id: 6, name: "Volume", val: `${stock.regularMarketVolume}`},
    {id: 7, name: "52 Week High", val: `$ ${stock.fiftyTwoWeekHigh}`},
    {id: 8, name: "52 Week Low", val: `$ ${stock.fiftyTwoWeekLow}`},
  ]*/
  
  
  return <div className="flex flex-col justify-between gap-5 px-1">
        
        <div className="w-[94%] m-auto border-none border-white mt-5">
          <TopBar viewSelected={viewSelected} setviewSelected={setviewSelected} chartSelected={chartSelected} setChartSelected={setChartSelected} />
        </div>
     

        {/**Details table */}
          {viewSelected === "Normal view" && <NormalView stock={stock}/>}
          {viewSelected === "Table view" && (<TableView stock={stock}/>)}

        

        <div id="charts">
          {chartSelected === "Area chart" && <AreaChart stock = {stock}/>}
          {chartSelected === "Bar chart" && <BarChart stock={stock}/>}
          {chartSelected === "Pie chart" && <PieChart stock={stock}/>}
        </div>
      </div>
    
      
      
}