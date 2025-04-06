import { useStockContext } from "../../Context/StockContext"
import {motion} from 'framer-motion'

const linkedAcc = [
  {id: 0, name: "Google"},
  {id: 1, name: "Facebook"},
  {id: 2, name: "GitHub"}
]
export const ManageAccount = () =>{
  const {lightMode} = useStockContext()

  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
    className="flex flex-col gap-5 mt-2 ">

      <div className={`${lightMode ? "bg-white/80 shadow-md": "bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto`} >
        <p className={`${lightMode ? "text-gray-600" : "text-white"} text-center font-medium mb-2`}>Linked Accounts</p>
        <div className="grid grid-cols-3 gap-5 md:gap-25">
          <div className={`${lightMode ? "text-gray-600" : "text-white"}`}>Google</div>
          <div className="text-white p-1 bg-green-400 text-center rounded-md md:font-medium cursor-pointer my-1">Link</div>
          <div className="text-white p-1 bg-[#ff5733] text-center rounded-md md:font-medium cursor-pointer my-1 ">Unlink</div>
        </div>
        <div className="grid grid-cols-3 gap-5 md:gap-25">
          <div className={`${lightMode ? "text-gray-600" : "text-white"}`}>Facebook</div>
          <div className="text-white p-1 bg-green-400 text-center rounded-md md:font-medium cursor-pointer my-1">Link</div>
          <div className="text-white p-1 bg-[#ff5733] text-center rounded-md md:font-medium cursor-pointer my-1 ">Unlink</div>
        </div>
        <div className="grid grid-cols-3 gap-5 md:gap-25">
          <div className={`${lightMode ? "text-gray-600" : "text-white"}`}>GitHub</div>
          <div className="text-white p-1 bg-green-400 text-center rounded-md md:font-medium cursor-pointer my-1">Link</div>
          <div className="text-white p-1 bg-[#ff5733] text-center rounded-md md:font-medium cursor-pointer my-1 ">Unlink</div>
        </div>
        
      </div>


      <div className={`${lightMode ? "bg-white/80 shadow-md" :"bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto`}>
        <p className={`${lightMode? "text-gray-600" : "text-white"} text-center font-bold mb-2`}>Change email</p>
        <form className="flex flex-col gap-4">
          <p className={`${lightMode ? "text-gray-600" :"text-white"} py-2 text-center`}>Current Email: <span className={`${lightMode ? "text-purple-700" :"text-[cyan]"}`}>janedoe@gmail.com</span></p>
          <input className={`${lightMode ? "text-gray-600 border-gray-400":"text-white border-white/30 focus:border-[cyan]"} border  p-2 w-[96%] md:w-[80%] m-auto outline-none `} type="email" autoComplete="off" placeholder="New email"/>
          <input className={`text-green-400 font-bold border  p-2 ${lightMode ? "bg-purple-700 border-purple-700 text-gray-600 " : "bg-gray-600 border-white/30"} cursor-pointer w-4/5 md:w-1/2 m-auto`} type="submit" value={"Save"}/>
        </form>
      </div>

      <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto`}>
      <p className={`${lightMode? "text-gray-600" : "text-white"} text-center font-bold mb-2`}>Change password</p>
        <form className="flex flex-col gap-4">
          <input className={`${lightMode ? "text-gray-600 border-gray-400":"text-white border-white/30 focus:border-[cyan]"} border  p-2 w-[96%] md:w-[80%] m-auto outline-none `} type="email" autoComplete="off" placeholder="You active email..."/>
          <input className={`${lightMode ? "text-gray-600 border-gray-400":"text-white border-white/30 focus:border-[cyan]"} border  p-2 w-[96%] md:w-[80%] m-auto outline-none `} type="password" placeholder="New password..."/>
          <input className={`${lightMode ? "text-gray-600 border-gray-400":"text-white border-white/30 focus:border-[cyan]"} border  p-2 w-[96%] md:w-[80%] m-auto outline-none `} type="password" placeholder="Confirm password..."/>
          <input className={`text-green-400 font-bold border  p-2 ${lightMode ? "bg-purple-700 border-purple-700 text-gray-600 " : "bg-gray-600 border-white/30"} cursor-pointer w-4/5 md:w-1/2 m-auto`} type="submit" value={"Update password"}/>
        </form>
      </div>

      <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto`}>
        <p className={`${lightMode ? "text-gray-600" : "text-white "} text-center font-bold mb-2`}>Two-Factor Authentication</p>
        <p className={`${lightMode ? "text-gray-600" : "text-white"} font-bold text-center`}>2FA </p>
        <p className={`${lightMode ? "text-gray-600" : "text-white"} text-sm mt-6 mb-2 font-bold text-center`}>Scan this QR Code</p>
        <div className="bg-gray-600 h-30 w-30 lg:h-50 lg:w-50 m-auto"></div>
      </div>

      <div className={`${lightMode ? "bg-white/80 shadow-md": "bg-gray-800"} p-4 w-[96%] md:w-[80%] m-auto mb-5`}>
        <p className={`${lightMode ? "text-gray-600":"text-white"} font-bold text-center mb-2`}>Logged in devices</p>
        <div className="grid grid-cols-2 gap-5 my-1">
          <p className={`font-bold ${lightMode ? "text-purple-700" : "text-[cyan]"}`}>Windows PC -</p>
          <p className="text-green-400 ">Active now</p>
        </div>

        <div className="grid grid-cols-2 gap-5 my-1">
          <p className={`font-bold ${lightMode ? "text-purple-700" : "text-[cyan]"}`}>Android 14 -</p>
          <p className="text-green-400 ">5 days ago</p>

        </div>

        <div className="text-[#ff5733] text-sm font-bold cursor-pointer hover:text-[#ef055c] my-2 ">Logout of all devices</div>
      </div>
    </motion.div>
  )
}