import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoContrast } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { SearchBar } from "./SearchBar";
import { useStockContext } from "../../Context/StockContext";
import { IoSearchCircleOutline } from "react-icons/io5";

export const Header = () => {
  const {minimize, toggleSidebar, setMinimize, lightMode, toggleThemeMode} = useStockContext() 


  const handleMinimize = () =>{
    setMinimize(!minimize)
  }

  

  return (
    <div className={`fixed z-20 top-0 left-0 right-0 h-[70px] flex-1 py-4 flex justify-between border-b md:border-none border-white ${lightMode ? "bg-white/80" : "bg-black"}  md:gap-[5%] md:px-8 `}>
      
      <div id="left" className="border-none border-white w-[20%] md:w-[10%] flex justify-between">
        <IoReorderThreeOutline onClick={handleMinimize} className={` hidden md:block h-7 w-7 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full active:ring-gray-800  hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-800`} />
        <IoReorderThreeOutline id="open side bar" onClick={toggleSidebar} className={`h-7 w-7 ${lightMode ? "text-purple-700":"text-[cyan]"} block md:hidden`}/>
        <Link to={'/faq'}>
          <IoHelpCircleOutline className={`h-7 w-7 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full active:ring-gray-800  hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-800 hover:ring-offset-2 hover:ring-offset-gray-800`}/>

        </Link>
      </div>
      
      <SearchBar/>
      <span className={`block md:hidden  font-bold ${lightMode ? "text-purple-700":"text-[cyan]"}`}>
        <IoSearchCircleOutline className="h-7 w-7"/>
      </span>

      <div id="right" className="border-none w-[30%] md:w-[15%] flex justify-between">
        <IoContrast onClick={toggleThemeMode} className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-700 hover:ring-offset-2 hover:ring-offset-gray-800`} />
        <IoNotificationsOutline className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-700 hover:ring-offset-2 hover:ring-offset-gray-800`} />

        <Link to={'/login'}>
          <IoPersonOutline className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-[cyan]"} rounded-full hover:transition-all hover:duration-300 hover:ring-6 hover:ring-gray-700 hover:ring-offset-2 hover:ring-offset-gray-800`} />

        </Link>
      </div>
    </div>
  )
}