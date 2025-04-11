import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SlBriefcase } from "react-icons/sl";
import { PiChartLineThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { useState } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { GoChevronDown } from "react-icons/go";
import { useStockContext } from "../Context/StockContext";
import {easeIn, easeInOut, easeOut, motion} from 'framer-motion'

const sideTabs = [
  {id: 0, tabIcon: <MdOutlineDashboardCustomize/>, tabName: "Dashboard", page: "Home", path: '/'},
  {id: 1, tabIcon: <SlBriefcase/>, tabName: "Portfolio", page: "Portfolio", subMenu: [
    {id: 0, subTab: "Watchlist"},
    {id: 1, subTab: "News"}

  ], path: '/stock-portfolio'},

  {id: 2, tabIcon: <PiChartLineThin/>, tabName: "Charts",
    subMenu:[
      {id: 0, subTab: "Line"},
      {id: 2, subTab: "Stream" },
      {id: 3, subTab: "Pie"}
    ],
  
 page: "Charts", path: "/fullcharts"},

  {id: 3, tabIcon: <CiSettings/>, tabName: "Settings", page: "Settings", subMenu:[
    {id: 0, subTab: "Normal"},
    {id: 1, subTab: "Profile"},
    {id: 2, subTab: "Account"},
    {id: 3, subTab: "Notifications"},
    {id: 4, subTab: "Themes"},
    {id: 5, subTab: "Region"},
    {id: 6, subTab: "Privacy"},
    {id: 7, subTab: "Security"},
    {id: 8, subTab: "About"},
    
  ], path: "/settings"},
  
]

export const SideBar = ({setsubTabSelected, tabClicked, setTabClicked}) =>{
  const {minimize, sidebarOpen, toggleSidebar, lightMode} = useStockContext()
  const [clicked, setClicked] = useState(false)
  
  
  const handlesubTabs = (sub) => {
    setsubTabSelected(sub)  
    toggleSidebar()  
  }

  const handleTabs = (tab) => {
    setTabClicked(tab)
    toggleSidebar()
  }

  const navigate = useNavigate()  
  const handleBack = () => {
    navigate('/')
    setTabClicked("Dashboard")
  }

  return (
    <motion.div 
      initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.5, ease:easeIn, easings: easeOut}}
      
      className={`fixed h-screen overflow-y-auto md:sticky md:top-0  ${sidebarOpen ? "block w-[80%] ":" hidden lg:block"} ${minimize ? "transform w-[5%] transition-all duration-800 ease-out overflow-x-auto": " md:w-[25%]"} ${lightMode ? "bg-white/80 transition-all duration-900 " : ""} bg-gray-800 z-20 pt-4 p-2`}>

      {!minimize && (
        <div id="photo" className="flex flex-col items-center justify-center gap-5 border-none ">
          <img className="h-20 w-20 rounded-full " src="" alt="" />
          <p className={`${lightMode ? "text-gray-600" :""}italic text-gray-200 text-center text-lg cursor-default`} onClick={() => setClicked(!clicked)}>Jane Doe</p>
          <GoChevronDown className= {` text-xl ${lightMode ? "text-gray-700": ""} text-gray-200 transition-transform duration-300 ${clicked ? "rotate-180" : "rotate-0"}`}/>
          
      </div>
      )}
      
        {!minimize && (
          <hr className={`w-[96%] ${lightMode ? "text-gray-400":"text-white"} m-auto my-2`}/>

        )}

      
      <div className='flex flex-col gap-8 mt-6'>
      {sideTabs.map((tab, index) => (
        <div key={tab.id} className="flex flex-col gap-2">

          {tabClicked === "Dashboard" || tabClicked === tab.tabName? (
            <div  className="flex items-center justify-between gap-5 leading-35 w-[80%] m-auto">
              <NavLink to={tab.path}
                  onClick={() => handleTabs(tab.tabName)}
                    className={` ${lightMode ? "text-gray-500": ""}text-gray-200 text-lg font-normal align-baseline cursor-pointer active:text-purple-700`}
                  >
              <div className="flex justify-between gap-5 ">
                <p className={`h-6 w-6 ${lightMode ? "text-purple-700" : "text-gray-200"}  active:text-purple-700 translate-y-2`}>{tab.tabIcon}</p>
                {!minimize && (
                  <p>{tab.tabName}</p>
                )}
                
              </div>
              </NavLink>

                {!minimize && (
                  <GoChevronRight className={` ${lightMode ? "text-gray-500" : ""}text-white text-xl`}/>

                )}
          </div>

        
          ) : null}    
          
                
          {tab.subMenu && (
            <>
            {tab.subMenu.map((menu) => (
              <ul key={menu.id} className="block gap-5 border-none w-[70%] m-auto pl-8">
                  {tabClicked === tab.tabName?(
                  <li onClick={() => handlesubTabs(menu.subTab)} key={menu.id} className={`list-none py-2 list-inside ${lightMode ? "text-gray-500": ""}text-white text-sm cursor-default hover:text-purple-700`}>{menu.subTab}</li>

                  ):null}
              </ul>

              ))}
              </>
        )} 

      </div>

        
      ))} 

      {tabClicked !== "Dashboard" && (
          <div onClick={handleBack} className={`${minimize ? "w-full" : ""} ${lightMode ? "text-white bg-purple-700" : "text-[cyan] bg-gray-500"} flex gap-5 cursor-pointer  rounded-sm m-auto border p-1 `}>
            {!minimize && (
              <GoArrowLeft className=" text-2xl font-bold"/>

            ) }
            <p className=" align-baseline ">Back</p>
          </div>        
      )}   
  </div>     

      
   </motion.div>
  )
}