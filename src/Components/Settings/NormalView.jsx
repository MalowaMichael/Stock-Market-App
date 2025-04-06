import { useStockContext } from "../../Context/StockContext"
import {motion} from 'framer-motion'

export const NormalView = ({subTabSelected}) =>{
  const {lightMode} = useStockContext()
  const settings = [
    {id: 0, setName: "Profile", activity: "Edit profile"},
    {id: 1, setName: "Account", activity: "Manage account"},
    {id: 2, setName: "Notifications", activity: "News & Notifications"},
    {id: 3, setName: "Themes", activity: "Themes & Appearances"},
    {id: 4, setName: "Region", activity: "Language & Region"},
    {id: 5, setName: "Privacy", activity: "Privacy settings"},
    {id: 6, setName: "Security", activity: "Security settings"},
    {id: 7, setName: "About", activity: "About"},
  ]

    const handleSettings = (operation) =>{
      subTabSelected(operation)
    }

  return (
    <motion.div 
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
    className="min-h-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
      {[...Array(14)].map((_, index) => (
        <div key={index} className={`flex flex-col gap-4 ${lightMode ? "bg-white/80 shadow-sm" : "bg-gray-800"} p-2 min-h-30`}>
          {settings[index] ? (
            <>
              <p className={`${lightMode ? "text-gray-500" : "text-white"} text-center font-bold `}>{settings[index].activity}</p>
              <img src="" alt="" />
              <div onClick={() => handleSettings(settings[index].setName)} className={`w-[60%] m-auto text-center text-white ${lightMode ? "bg-purple-700" : "bg-green-400"} p-1 my-1 cursor-pointer`}>Go</div>
              
            </>
          ) : null }
        </div>
      ))}
      
    </motion.div>
  )
}