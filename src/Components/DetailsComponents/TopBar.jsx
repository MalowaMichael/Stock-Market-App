import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { useStockContext } from "../../Context/StockContext";
import { GoChevronDown } from "react-icons/go";

export const TopBar = ({viewSelected, setviewSelected, chartSelected, setChartSelected}) =>{

  const {lightMode} = useStockContext()

  const [dropDown, setDropDown] = useState(null)
  const [chartClicked, setchartClicked] = useState(false)

  const toggleDropDown = (id) => {
    setDropDown((prevID) => prevID === id ? null : id)
  }

  const handleDetailsSelect = (view) =>{
    setviewSelected(view)
    setChartSelected("")
  }
  const handleChartSelect = (chart) => {
    setChartSelected(chart)
    setviewSelected("")
  }

  const topSections = [
    {id:0 , name: "More details", subMenu:[
      {id:0 , subName: "Normal view"},
      {id:1 , subName: "Table view"}
    ]},

    {id:1 , name: "View charts", subMenu:[
      {id:0 , subName: "Line"},
      {id:1 , subName: "Bar"},
      {id:2 , subName: "Doughnut"}
    ]}
  ]

  return (
    <div className={`relative flex gap-8 ${lightMode ? "bg-white/80 shadow-md" : 'bg-gray-800'} h-[80px] p-4 w-[70%] rounded-xs`}>
      {topSections.map((section) => (
        <>
      <div key={section.id} className={`relative flex justify-between w-[30%] mb-10`}>
        <div className={`${lightMode ? "text-purple-700" : "text-green-400"}  text-lg text-left cursor-default `}>{section.name}</div>
        <GoChevronDown onClick={() => toggleDropDown(section.id)}
          className= {`transition-transform text-2xl duration-300 ${dropDown === section.id ? "rotate-180":"rotate-0"} ${lightMode ? "text-gray-600" : "text-white"} `}
          />   


      </div>

      <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8 }}
          className=' absolute text-white top-[100] leading-10 bg-gray-700 block transition-transform duration-300 translate-y-0 mt-6'
        >
          
          {dropDown === section.id && (
              <>        
                {section.subMenu.map((menu) => (
                  <p key={menu.id} className={`cursor-default`}>{menu.subName}</p>

                ))}
              </>


          )}
          
        </motion.div>
      </AnimatePresence>

      </>
      ))}
      
      
      
      
    
    </div>
  )
}