import { useStockContext } from "../../Context/StockContext"
import {motion} from 'framer-motion'

export const NewsNotification = () =>{
  const {lightMode} = useStockContext()
  return (
    <motion.div
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
     className="flex flex-col gap-4">
      <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} w-[80%] m-auto p-4`}>
        <p className={`${lightMode ? "text-gray-600" : "text-white"} text-center font-bold mb-2`}>Manage news</p>
      </div>

      <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-4 w-[80%] m-auto`}>
        <p className={`${lightMode ? "text-gray-600":"text-white"} text-center font-bold mb-2`}>Manage Notifications</p>
        <div className="flex justify-between gap-5">
          
          <div className={`${lightMode ? "text-gray-500":"text-white"}`}>Email subscribe</div>
          <div className="relative  border-none border-white p-1 w-[10%] ">
            <div className="group bg-gray-700 rounded-xl h-4 relative z-10 "></div>
            <span className="absolute inset-0 scale-2 transition-transform duration-800 bg-[cyan] z-20 group-hover:scale-100"></span>

          </div>

        </div>
          <div className={`${lightMode ? "text-gray-500":"text-white"}`}>Customize nitificattions (messages, comments, posts, likes)</div>
          
      </div>
      
    </motion.div>
  )
}