import { useImperativeHandle, useRef, useState } from "react";


export const SearchBar = ({ref, props}) => {
  /*const searchRef = useRef()
  const searchFocus = useRef()*/
  const searchRef = useRef(null)

  const [clearBtn, setClearBtn] = useState(false)
  
  const handleClear = () => {
    searchRef.current.value = "";
    setClearBtn(false)
  }
  const handleFocus = () => {
    searchFocus.current.focus()
  }
  
  useImperativeHandle(ref, () => ({
    focus: () => searchRef.current.focus(),
    clear: () => searchRef.current.value = "",
  }), [])

  return <div className="bg-purple-400 w-[40%] pr-2 rounded-4xl m-auto flex items-center justify-between gap-[5%] ">
    <div>
      <input onChange= {() => setClearBtn(true)} {...props} ref = {searchRef} ype="text" className="p-2 rounded-tl-4xl rounded-bl-4xl w-[200%] m-auto bg-white text-gray-500 border border-blue-500 text-md outline-none focus:border-blue-400 border-indigo-500 focus:outline-none"/>
    </div>

    <div className="flex justify-between bg-[transparent] w-[15%] ">
      <div onClick={handleClear} className={`${clearBtn ? "block" : "hidden"} -translate-y-1 text-4xl cursor-default text-white/90`}>&times;</div>
      <div className="text-2xl cursor-default text-white/90 ">&#9776;</div>
  
    </div>
  </div>
}