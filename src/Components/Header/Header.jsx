import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoContrast } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { SearchBar } from "./SearchBar";
import { useStockContext } from "../../Context/StockContext";

export const Header = () => {
  const {minimize, setMinimize, lightMode, toggleThemeMode} = useStockContext() 


  const handleMinimize = () =>{
    setMinimize(!minimize)
  }

  

  return (
    <div className={`${lightMode ? "bg-white/80" : "bg-black"} h-[70px] flex-1 p-4 sticky top-0 flex justify-between gap-[5%] px-8 z-10 `}>
      <div id="left" className="border-none w-[10%] flex justify-between">
        <IoReorderThreeOutline onClick={handleMinimize} className={`h-7 w-7 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full active:ring-gray-800  hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-800`} />
        
        <Link to={'/faq'}>
          <IoHelpCircleOutline className={`h-7 w-7 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full active:ring-gray-800  hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-800`}/>

        </Link>
      </div>
      
      <SearchBar/>

      <div id="right" className="border-none w-[15%] flex justify-between">
        <IoContrast onClick={toggleThemeMode} className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-700 hover:ring-offset-2 hover:ring-offset-gray-800`} />
        <IoNotificationsOutline className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-700 hover:ring-offset-2 hover:ring-offset-gray-800`} />

        <Link to={'/login'}>
          <IoPersonOutline className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-700 hover:ring-offset-2 hover:ring-offset-gray-800`} />

        </Link>
      </div>
    </div>
  )
}