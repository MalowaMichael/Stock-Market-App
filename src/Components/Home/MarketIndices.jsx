import { Indexcard } from "../Cards/IndexCard";
import indices_data from "../StockService/IndicesData";

export const MarketIndices = () =>{

  return (
    
          <div className="flex items-start gap-5">
          {indices_data.slice(0, 3).map((index) => (
            <Indexcard key={index.symbol} index={index}/>      

          ))}  
          </div>        
  )
}