import { useState } from "react"
import { useStockContext } from "../Context/StockContext"
import {motion} from 'framer-motion'
export const LoginSignup = () =>{
  const {lightMode} = useStockContext()
  const [isLogin, setIsLogin] = useState(false)

  return (
    <motion.div 
          initial={{opacity:0, y:-250}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.8, easings:"easeout"}}
    className="border-none border-white w-[94%] m-auto h-screen">
      <form action="" className="flex flex-col gap-5 mt-8">

        <p className={`${lightMode ? "text-purple-700":"text-[cyan]"} ml-22 text-4xl font-bold `}>        
          {isLogin ? "Good to see you again" : "Step into the future"}
      </p>
        {!isLogin && (
          
          <div className="relative group w-[80%] m-auto ">
            <span className={`absolute h-[2px] z-10 ${lightMode ? "bg-purple-700" :"bg-[cyan]"} inset-0 scale-0 transform translate-y-14 transition-all group-hover:scale-100 duration-1000`}></span>
            <input className={`relative group outline-none w-full ${lightMode ? "bg-white/80 border-gray-200 text-gray-600" : "bg-gray-600 border-white/50 text-white/90"} border-b  p-4`} type="text" placeholder="Username"/>
            
        </div>

        )}


        <div className="relative group w-[80%] m-auto ">
          <span className={`absolute h-[2px] z-10 ${lightMode ? "bg-purple-700" :"bg-[cyan]"} inset-0 scale-0 transform translate-y-14 transition-all group-hover:scale-100 duration-1000`}></span>
            <input className={`relative group outline-none w-full ${lightMode ? "bg-white/80 border-gray-200 text-gray-600" : "bg-gray-600 border-white/50 text-white/90"} border-b  p-4`} type="email" autocomplete="off" placeholder="example@gmail.com"/>
            
        </div>

        <div className="relative group w-[80%] m-auto ">
            <span className={`absolute h-[2px] z-10 ${lightMode ? "bg-purple-700" :"bg-[cyan]"} inset-0 scale-0 transform translate-y-14 transition-all group-hover:scale-100 duration-1000`}></span>
            <input className={`relative group outline-none w-full ${lightMode ? "bg-white/80 border-gray-200 text-gray-600" : "bg-gray-600 border-white/50 text-white/90"} border-b  p-4`} type="text" placeholder="Password"/>
            
        </div>
             
        
        <div className=" w-1/2 m-auto my-2">
          <input type="submit" value={`${!isLogin ? "Sign up" : "Login"}`} className={` border ${lightMode ? "border-purple-700 text-gray-600 bg-white/80 hover:border-purple-700 hover:text-purple-700" : "border-white/50 text-white"} text-md font-medium bg-black/20 w-full m-auto p-3 rounded-sm cursor-pointer hover:text-[cyan] hover:border-[cyan] transition-all duration-700`} />

        </div>

          <p className={` ${lightMode ? "text-gray-600":"text-gray-100"} text-center italic text-mg w-[80%] m-auto`}>{!isLogin ? "Already" : "Not yet"} registered? <span onClick={() => setIsLogin(!isLogin)} className={`${lightMode ? "text-purple-700" : "text-[cyan]"} cursor-pointer font-bold hover:underline`}>{!isLogin ? "Login": "Sign up"}</span></p>


        
      </form>
    </motion.div>

  )
}