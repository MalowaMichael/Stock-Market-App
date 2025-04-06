import { useStockContext } from "../../Context/StockContext";
import {motion} from 'framer-motion'
export const SecuritySettings = () =>{
  const {lightMode} = useStockContext()

  const today = new Date().getFullYear() + "-" + (new Date().getMonth() +1) + "-" + new Date().getDate();
  const securityEvents = [
    {id: 0, name: "Login", attempts: 2, device: "Windows PC", day: today},
    {id: 1, name: "Password change", attempts: 0, device: "None", day: "None"},
    {id: 2, name: "Email change", attempts: 0, device: "None", day: "None"},
    {id: 3, name: "Security quiz", attempts: 0, device: "None", day: "None"}
  ]
  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
    className="flex flex-col gap-4 mt-2">
      
      <div className={`${lightMode ? "bg-white/80 shadow-md":"bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto`}>
        <p className={`${lightMode ? "text-gray-600" : "text-white"} text-xl text-center font-bold mb-4`}>Track security events</p>
        <div className="grid grid-cols-4 gap-25 mb-2">
          <p className={`${lightMode ? "text-gray-600":"text-white"} text-md font-bold`}>Events</p>
          <p className={`${lightMode ? "text-gray-600":"text-white"} text-md font-bold`}>Attempts</p>
          <p className={`${lightMode ? "text-gray-600":"text-white"} text-md font-bold`}>Device</p>
          <p className={`${lightMode ? "text-gray-600":"text-white"} text-md font-bold`}>Day</p>
        </div>

          {securityEvents.map((event) => (
            <div key={event.id} className="grid grid-cols-4 gap-5">
              <p className="text-white text-sm font-medium bg-black my-1">{event.name}</p>
              <p className="text-[cyan] text-center text-sm font-normal cursor-default bg-black p-1 rounded-sm my-1">{event.attempts}</p>
              <p className="text-[cyan] text-center text-sm font-normal cursor-default bg-black p-1 rounded-sm my-1">{event.device}</p>
              <p className="text-[cyan] text-center text-sm font-normal cursor-default bg-black p-1 rounded-sm my-1">{event.day}</p>
            </div>
          ))}
      </div>

      <div id="security quiz" className={`${lightMode ? "bg-white/80 shadow-md":"bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto`}>
        <form action="" className="flex flex-col gap-4">
          <p className={`${lightMode ? "text-gray-600" :"text-white"} text-xl font-bold text-center`}>Set security quiz</p>

          <label htmlFor="dating" className={`${lightMode ? "text-gray-500" :"text-white"} ml-[10%]`}>1. In which city did you have your first date?</label>
          <input className={`${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : "text-white border-white/30"} border outline-none p-2 focus:border-[cyan] w-[80%] m-auto`} type="text" />
          
          <label htmlFor="parents" className={`${lightMode ? "text-gray-500" :"text-white"} ml-[10%]`}>2. In which city did your parents meet?</label>
          <input className={`${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : "text-white border-white/30"} border outline-none p-2 focus:border-[cyan] w-[80%] m-auto`} type="text" />
          
          <label htmlFor="school" className={`${lightMode ? "text-gray-500" :"text-white"} ml-[10%]`}>3. Which primary school did you go to?</label>
          <input className={`${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : "text-white border-white/30"} border outline-none p-2 focus:border-[cyan] w-[80%] m-auto`} type="text" />
          
          <label htmlFor="subject" className={`${lightMode ? "text-gray-500" :"text-white"} ml-[10%]`}>4. Which was your favorite subject in primary?</label>
          <input className={`${lightMode ? "text-gray-600 border-gray-400 focus:border-gray-400" : "text-white border-white/30"} border outline-none p-2 focus:border-[cyan] w-[80%] m-auto`} type="text" />

          <input className ={`text-green-400 font-bold text-center p-2 ${lightMode ? "bg-purple-700" : "bg-gray-600"} cursor-pointer w-1/2 m-auto my-2`} type="submit" value="Set"/>
        </form>
      </div>

      <div id="delete account" className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"}  p-4 mb-2 w-[96%] md:w-[80%] m-auto`}>
        <p className="text-[#ff5733] text-center font-bold">Delete this account</p>

        <div className="text-white font-bold text-center p-2 rounded-md bg-[#ff5733] w-1/2 m-auto my-2 cursor-pointer  ">Delete</div>
      </div>
    </motion.div>
  )
}