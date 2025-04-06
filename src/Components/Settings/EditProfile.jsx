import { useStockContext } from "../../Context/StockContext"
import {motion} from 'framer-motion'
export const EditProfile = () =>{
  const {lightMode} = useStockContext()
  return (
    <motion.div
    initial={{opacity:0, x:-250}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:0.8, easings:"easeout"}}

     className={`text-white md:w-[80%] m-auto border mb-5 ${lightMode ? "border-none bg-white/80 " : "border-white/30"} p-2`}>
      
      <form action="">
        <section>
          <div className="flex flex-col gap-4">
            <p className={`text-center ${lightMode ? "text-gray-600" :"text-white"} text-[18px] font-bold`}>Profile pic</p>
            <img src="" alt="" className={`h-40 w-40 ${lightMode ? "border border-gray-400":""} rounded-full m-auto`}/>
            <div className="flex justify-between my-4">
              <input className={`border rounded-md text-center ${lightMode ? "border-gray-400 text-gray-600" : "bg-gray-600 text-white border-white/30"}  w-[25%]  `} type="file"/>
              <div className={`rounded-lg cursor-pointer p-2 border ${lightMode ? "border-gray-400 text-gray-600":"border-white/30 text-[cyan]"} text-center w-[25%]`} type="submit">Default</div>
              <div className={`rounded-lg cursor-pointer p-2 border ${lightMode ? "border-gray-400 text-gray-600":"border-white/30 text-[cyan]"} text-center w-[25%]`} type="submit">Remove</div>
            </div>
          </div>

          
        </section>

        <hr className={`w-[96%] ${lightMode ? "text-gray-400" : "text-white/50"} m-auto mb-4 mt-4`}/>

        <section>
        <p className={`text-center ${lightMode ? "text-gray-600" : "text-white"} text-[18px] font-bold mb-4`}>Personal details</p>

        <div className="flex justify-between gap-4 my-8 ">
            <input className={`border p-2 ${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : "text-white border-white/30"} w-full outline-none focus:border-[cyan]`} type="text" placeholder="Your name"/>
            <input className={`border p-2 ${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : "text-white border-white/30"} w-full outline-none focus:border-[cyan]`} type="text" placeholder="Username"/>
          </div>

          <textarea className={`${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : 'border-white/30 text-white'} w-full m-auto p-2 border rounded-xs outline-none focus:border-[cyan]`} cols={30} rows={4} placeholder="Add bio"/>
          <div className="flex justify-between gap-4">
            <input className={`${lightMode ? "border-gray-400 text-gray-600 focus:border-gray-400":"text-white border-white/30 focus:border-[cyan]"} border w-full p-2 my-4 m-auto outline-none`} type = "text" placeholder="country"/>
            <input className={`${lightMode ? "border-gray-400 text-gray-600 focus:border-gray-400":"text-white border-white/30 focus:border-[cyan]"} border w-full p-2 my-4 m-auto outline-none  focus:bg-gray-500`} type ="date"/>
            
          </div>
          <div className="flex justify-between w-[50%]">
            <input className={`h-4 w-4`} type="radio" name="gender"/> <span className={`${lightMode ? "text-gray-600" : "text-white"}`}>Male</span>
            <input className={`h-4 w-4`} type="radio" name="gender"/> <span className={`${lightMode ? "text-gray-600" : "text-white"}`}>Female</span>
          </div>

        </section>

        <input type="submit" value="Save" className={`text-green-400 ${lightMode ? "bg-purple-700" : "bg-gray-500"} text-center md:text-[20px] font-medium w-[50%] ml-[25%] mr-[25%] p-2 mt-8 mb-2 cursor-pointer`}/>
      </form>
    </motion.div>
  )
}