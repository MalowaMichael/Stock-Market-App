import { useEffect, useState } from "react"
import { StockCard } from "../Components/Cards/StockCard"
import { LineChart } from "../Components/Charts/PerformanceCharts/LineChart"
import { Indexcard } from "../Components/Cards/IndexCard"
import { Link, useNavigate } from "react-router-dom"
import { useStockContext } from "../Context/StockContext"
import {motion} from 'framer-motion'



    
  const currentDate = new Date().getFullYear() + "-" + (new Date().getMonth() +1) + "-" + new Date().getDate();

  export const Home = ({setTabClicked}) => {
    const {indices_data, stock_data, lightMode} = useStockContext()

    const [hoveredID, setHoveredID] = useState(null)
    
    const handleMouseOver = (id) => {
        setHoveredID(id)
    }
    const handleMouseLeave = () =>{
        setHoveredID(null)
    }

    const navigate = useNavigate()
    
    const handleNavigate = () =>{
        navigate('/fullcharts')
        //setTabClicked('Charts')
    }
   /* const [stocks, setStocks] = useState(null)

    useEffect(() =>{
        const fetchData = async() => {
            const stock_data = await getStockData()
           if(stock_data) setStocks(stock_data)
           // console.log("Home stock data: ", stock_data)
        }

        fetchData()
    }, [])*/

//if (stocks.length === 0) return <p>Loading stocks...</p>;

    return <motion.div 
            initial={{opacity:0, x:-250}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8, easings:"easeout"}}
        
        className="flex flex-col gap-5 md:gap-2 border-none border-white overflow-y-auto mt-4 -z-10">
        
            

            <div id="indices" className="grid grid-cols-2 md:grid-cols-4 gap-5 border-none border-white w-[94%] m-auto overflow-x-auto">
                {indices_data.slice(0, 4).map((index) => (
                    <Indexcard key={index.symbol} index={index}/>
                ))}
            
            </div>

                <div id = "chart-calender" className=" block gap-5 md:flex justify-between md:gap-4 w-[94%] m-auto mt-2 border-none border-white md:h-[50vh]">
                    <div className="md:w-[70%] border-none border-white cursor-pointer">
                       <Link to={'/fullcharts'}>
                             <LineChart onClick = {() => setTabClicked('Charts')} />
                       </Link>
                       
                    </div>
                    
                    <div className="md:w-[30%] h-[50vh] mt-4 md:mt-0 border-none border-white overflow-y-auto">
                        <p className={`sticky top-0 ${lightMode ? "text-gray-600 bg-white/80" :"text-green-400 bg-gray-800"}  p-4 text-lg font-bold`}>Current Indices Prices</p>

                        {indices_data.map((indexData, index) => (
                            <div key={indexData.symbol} className={`${lightMode ? "text-gray-400 bg-white/80" : "text-white bg-gray-800"} grid grid-cols-3 gap-4 p-4  my-2`}>
                                <div className="">{indexData.symbol}</div>
                                <div onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave} className="relative cursor-default">Today</div>
                                <div className={`${lightMode ? "bg-gray-200" : "bg-gray-600 "} rounded-md p-[1px] w-auto`}>${indexData.current_value}</div>
                            </div>
                        ))}
                        
                        {hoveredID !== null && (
                            <div className="absolute top-[70%] left-[85%] bg-black rounded-tl-xl rounded-tr-lg rounded-br-lg p-[1px] text-white">{currentDate}</div>

                        )}

                    </div>
                </div>            

            <div id="wishlist-news" className="block gap-5 md:flex items-start justify-between md:gap-5 border-none border-white mt-2 w-[94%] m-auto">                
                <div id="watchlist" className="md:w-[70%] h-[40vh] border-none border-white bg-[transparent]  m-auto overflow-y-auto ">
                    <p className={`sticky top-0 ${lightMode ? "text-gray-600 bg-white/80" : "text-green-400 bg-gray-800 "} p-4 text-lg font-bold mb-2`}>My Watchlist</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                        {stock_data.map((stock) => (
                            <StockCard key={stock.symbol} symbol={stock.symbol} price={stock.price} change={stock.change} />
                        ))}
                    </div>

                </div>

                <div id="recent-news" className={` ${lightMode ? "bg-white/80" : "bg-gray-800"} p-2 my-5 md:my-0 md:w-[30%] h-[40vh] overflow-y-auto`}>
                    <p className={`sticky top-0 ${lightMode ? "text-gray-600 bg-white/80" : "text-green-400 bg-gray-800"} p-2 text-lg font-bold mb-2`}>News & Updates</p>

                    <p className={` ${lightMode ? "text-gray-600" : "text-green-400"} text-lg font-medium my-6`}>Stock Market News</p>
                    <p className={` ${lightMode ? "text-gray-600" : "text-green-400"} text-lg font-medium my-6`}>Breaking News</p>
                    <p className={` ${lightMode ? "text-gray-600" : "text-green-400"} text-lg font-medium my-6`}>Financial Updates</p>
                </div>
            </div>

            
        
    </motion.div>
}


{/**{stocks.length > 0 ? (
            stocks.map((stock) =>(
                <Card key={stock.symbol} stock={stock} />

            ) )
        ) :(
            <p>Loading data...</p>
        )} 

        {stocks ? (
            <pre>{JSON.stringify(stocks, null, 2)}</pre>
        ):(
            <p>Loading stock data...</p>
        )} */}
