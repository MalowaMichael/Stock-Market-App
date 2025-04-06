import { useStockContext } from "../../Context/StockContext"
import {motion} from 'framer-motion'
import { ToggleButton } from "../ToggleButton"
import { useState } from "react"

export const NewsNotification = () =>{
  const {lightMode, } = useStockContext()  

  const [toggleStates, setToggleStates]  = useState({})

  const handleBtnToggle = (id) =>{
    setToggleStates((prev) => prev === id? {} :id)
  }

  const newsNotify = [
    {id: 0, name: "Manage News", subMenu: [
      {id: 0, subName: "Manage all"},
      {id: 1, subName: "Breaking news"},
      {id: 2, subName: "Stock market news"},
      {id: 3, subName: "Financial updates"}
    ] },
    {id: 1, name: "Manage Notifications", subMenu: [
      {id: 0, subName: "Manage all"},
      {id: 1, subName: "Email subscribe"},
      {id: 2, subName: "Messages"},
      {id: 3, subName: "Comments"},
      {id: 4, subName: "Likes"}
    ]}
  ]
  return (
    <motion.div
    initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
     className="flex flex-col gap-5">

        {newsNotify.map((data) => (
          <div className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} flex flex-col gap-5 w-[96%] md:w-[80%] m-auto p-4`}>
            <p className={`${lightMode ? "text-gray-600" : "text-white"} text-center font-bold mb-2`}>{data.name}</p>
            
              {data.subMenu.map((sub) =>{
               return (
                <div key={sub.id} className="flex justify-between gap-5">          
                  <div className={`${lightMode ? "text-gray-500":"text-white"}`}>{sub.subName}</div>
                  <ToggleButton onClick = {() => handleBtnToggle(sub.id)}/>
                </div>
               ) 
              })}
        
          </div>
        ))}        
            
    </motion.div>
  )
}