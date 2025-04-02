import { useStockContext } from "../../Context/StockContext"
import {motion} from 'framer-motion'
export const Region = () =>{
  const {lightMode} = useStockContext()

  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
    className="">
      <form action="" className={`flex flex-col gap-5 ${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} mt-2 w-[80%] m-auto p-4`}>
        <p className={`${lightMode ? "text-gray-600" : "text-white"} font-bold text-center text-[cyan] mb-2`}>Regional information</p>
        <div className="grid grid-cols-2 gap-4">
        <label htmlFor="country" className={`${lightMode ? "text-gray-500" :"text-white"}`}>Country
          <input className={`${lightMode ? "text-gray-500 border-gray-500 focus:border-gray-500": "text-white border-white/30 "} ml-2 p-1 w-[60%] border  focus:border-[cyan] outline-none`} type="text"/>

        </label>
        <label htmlFor="currency" className={`${lightMode ? "text-gray-500" :"text-white"}`}>Currency
          <select name="currency" className = {`ml-2 border ${lightMode ? "border-gray-500 focus:border-gray-500" : "border-white/30"}  p-1 w-[40%] focus:border-[cyan] outline-none`}>
            <option className="text-gray-800" value="kes">KES</option>
            <option className="text-gray-800" value="">US dollar</option>
            <option className="text-gray-800" value="">Euro</option>
            <option className="text-gray-800" value="">Yen</option>
          </select>
        </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
        <label htmlFor="zipcode" className={`${lightMode ? "text-gray-500" :"text-white"}`}>ZIP Code 
          <input className={`${lightMode ? "text-gray-500 border-gray-500 focus:border-gray-500": "text-white border-white/30 "} ml-2 p-1 w-[60%] border  focus:border-[cyan] outline-none`} type="number"/>
        </label>

        <label htmlFor="timezone" className={`${lightMode ? "text-gray-500" :"text-white"}`}> Timezone
          <select name="timezone" className = {`ml-2 border ${lightMode ? "border-gray-500 focus:border-gray-500" : "border-white/30"}  p-1 w-[40%] focus:border-[cyan] outline-none`}>
            <option className = "text-gray-800" value="">E.A.T</option>
            <option className = "text-gray-800" value="">U.T.C</option>
          </select>
        </label>
      
        </div>
        <input className={`text-green-400 ${lightMode ? "bg-purple-700" : "bg-gray-600"} p-2 text-center font-bold cursor-pointer w-1/2 m-auto`} type="submit"  value={"Commit changes"}/>

      </form>
      
    </motion.div>
  )
}