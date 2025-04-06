import { StockCard } from "../Components/Cards/StockCard"
import { useStockContext } from "../Context/StockContext"
import {motion} from 'framer-motion'

export const Portfolio = ({subTabSelected}) =>{
  const {stock_data, lightMode} = useStockContext()

  return (
    <div 
    
    className="border-none border-white min-h-screen w-[94%] m-auto overflow-y-auto">

        {subTabSelected === "Watchlist" && (
        <motion.div 
        initial={{opacity:0, x:-250}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, easings:"easeout"}}
          className="flex flex-col gap-15">
          
          <div className="border-none border-white">
            <p className={`${lightMode ? "text-purple-700" : "text-[cyan]"} text-lg sm:text-xl md:text-3xl font-bold py-4`}>Stocks in Watchlist</p>
            <div id="watchlist" className=" overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-5">
              {stock_data.map((stock, id) => (
                <StockCard key={id} symbol={stock.symbol} price={stock.price} change={stock.change} />
              ))}
  
            </div>
          </div>
  
          <div id="other stocks" className="border-none border-white overflow-y-auto">
            <p className={`${lightMode ? "text-purple-700" : "text-[cyan]"} text-lg sm:text-xl md:text-3xl font-bold py-4`}>More in market</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                  {[...Array(10)].map((_, index) => (
                    <div key={index} className={`${lightMode ? "bg-white/80 shadow-sm" : "bg-gray-800"} h-[180px] w-[100%]`}>
  
                    </div>
                  ))}
                </div>
          </div>
          </motion.div>
  
        )}
        {/**News section */}
        {subTabSelected === "News" && (
          <motion.div 
          initial={{opacity:0, x:-250}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, easings:"easeout"}}          
          className="flex flex-col gap-5 border-none border-white mt-[5%] mb-5 ">
          
          <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 border-none border-green-400 h-[40vh] overflow-y-auto`}>
              <p className={`${lightMode ? "text-gray-600" : "text-[cyan]"} text-[18px] font-bold py-4`}>Latest News</p>
              <p className={`${lightMode ? "text-gray-500":"text-white"}`}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>

          <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 border-none border-green-400 h-[40vh] overflow-y-auto`}>
              <p className={`${lightMode ? "text-gray-600" : "text-[cyan]"} text-[18px] font-bold py-4`}>Stock Market News</p>
              <p className={`${lightMode ? "text-gray-500":"text-white"}`}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>

          <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 border-none border-green-400 h-[40vh] overflow-y-auto`}>
              <p className= {`${lightMode ? "text-gray-600" : "text-[cyan]"} text-[18px] font-bold py-4`}>Real Time Updates</p>
              <p className={`${lightMode ? "text-gray-500":"text-white"}`}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
          </div>
        </motion.div>
        )}
        
    </div>
  )
}