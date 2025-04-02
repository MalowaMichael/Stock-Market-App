import { useStockContext } from "../../../Context/StockContext"


export const TableView = ({stock}) =>{
  const {lightMode} = useStockContext()
  const stockProperties = [
    {id: 0, name: "Symbol", val: `${stock.symbol}`},
    {id: 1, name: "Price", val: `$ ${stock.price}`},
    {id: 2, name: "Change", val: `${stock.change}`},
    {id: 3, name: "Percentage Change", val: `${stock.percent_change}%`},
    {id: 4, name: "Volume", val: `${stock.volume}`},
    {id: 5, name: "Market Cap", val: `$ ${stock.market_cap}`},
    {id: 6, name: "Day High", val: `${stock.day_high}`},
    {id: 7, name: "Day Low", val: `${stock.day_low}`},
    {id: 8, name: "52 Week High", val: `${stock.week_high}`},
    {id: 9, name: "52 Week Low", val: `${stock.week_low}`}    
    
  ]

  return (
    <div className="w-[94%] m-auto">
      <div id="details table" className={`flex flex-col gap-4 border border-white ${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} rounded-xs w-full m-auto mt-2`}>
          <h2 className={`${lightMode ? "text-gray-600": "text-gray-200"} text-3xl text-center font-bold`}>{stock.name}</h2>
  
            {stockProperties.map((property) => (
              <div key={property.id}>
                <div className="w-full m-auto ">
                  <div className="flex justify-between gap-5 border-b border-white p-2">
                    <p className={`${lightMode ? "text-gray-400" : "text-gray-100"} text-lg font-bold`}>{property.name}</p>
                    <p className={`${lightMode ? "text-gray-400" : "text-gray-100"} text-sm font-medium`}>{property.val}</p>
                  </div>
                </div>
  
              </div>
            ))}
  
          </div>
    </div>
  )
}