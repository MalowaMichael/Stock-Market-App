import {useRef, useState } from "react";
import stock_data from "../StockService/StockData";
import { IoSearchCircleOutline } from "react-icons/io5";
import { SlClose } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { useStockContext } from "../../Context/StockContext";

export const SearchBar = () =>{
  const{lightMode} = useStockContext()
  const searchRef = useRef(null)
  const [clearBtn, setClearBtn] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchList, setSearchList] = useState(false)
  
  const handleFocus = () =>{
    searchRef.current.focus();
  }
  const handleClear = () =>{
    setClearBtn(false)
    setSearchQuery("")
    setSearchList(false)
  }

  const handleSearch = (e) =>{
    setClearBtn(true)
    setSearchList(true)
    const query = e.target.value.toLowerCase();
    setSearchQuery(query)

    const output = stock_data.filter((stock) =>(
      stock.name.toLowerCase().includes(query) || stock.symbol.toLowerCase().includes(query)
    ))

    setFilteredItems(output)
  }

  const navigateFromSearch = () => {
    setSearchQuery("")
    setSearchList(false)
    setClearBtn(false)
  }
  
  return (
      <div>
        <div id="middle" className="relative flex justify-between gap-2 bg-purple-700 rounded-sm border-none border-yellow-700  ">
            <input value={searchQuery} ref={searchRef} onChange={handleSearch} className={`${lightMode ? "focus:border focus:border-gray-400" : ""} w-md rounded-tl-sm rounded-bl-sm bg-white outline-none p-2`} type="text" placeholder="Search here..."/>
            <SlClose onClick={handleClear} className={`${clearBtn ? "block" : "hidden"} absolute left-[85%] translate-y-2 text-purple-700 cursor-default w-6 h-6 `}/>
            <IoSearchCircleOutline onClick={handleFocus} className="rotate-90 h-8 w-8 translate-y-1 text-white/50" />

            
      </div> 
        {searchList && (
          <ul className={`top-[100] absolute text-black bg-white cursor-default ` }>
          {filteredItems.map((item) => (
            <Link to={`/details/${item.symbol}`}>
                <li onClick={navigateFromSearch} key={item.symbol}>{item.name} ({item.symbol})</li>

            </Link>
          ))}
        </ul>
        )}
        

  </div>

     )
}