import { useStockContext } from '../../../Context/StockContext'
import symbolImg from '../../../assets/symbol.png'

export const NormalView = ({stock}) => {
  const {lightMode} = useStockContext()
  const percentVol = ((stock.volume / 100000000) * 100).toFixed(3)
  return (
    
    <div className="grid grid-cols-4 gap-4 w-[94%] border-none border-white m-auto mt-2">
      <div id="symbol" className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2  h-[120px]`}>
        <p className='text-green-400 text-lg font-bold my-2'>{stock.name}</p>
          <div className='flex justify-start gap-8'>
            <img src={symbolImg} className='h-6 w-6' alt="stock symbol icon" />
            <p className='text-purple-700 font-bold text-md'>{stock.symbol}</p>
          </div>
      </div>

      <div id="price" className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 h-[120px]`}>
      <p className='text-green-400 text-lg font-bold my-2'>{stock.symbol}</p>
      <div className='flex justify-start gap-8'>
        <p className={`${lightMode ? "text-gray-600" : "text-white"} text-md font-medium`}>Price: </p>
        <p className='text-xl font-medium text-green-400'>{stock.price}</p>
      </div>

      </div>

      <div id = "change" className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 h-[120px]`}>
        <p className='text-green-400 text-lg font-bold my-2'>{stock.symbol}</p>
        <div className='flex justify-start gap-8'>
          <p className={`${lightMode ? "text-gray-600" : "text-white"} text-md font-medium`}>Change </p>
          <p className='text-xl font-medium text-green-400'>{stock.change}</p>
        </div>
        <div className='flex justify-start gap-8 mt-2'>
          <p className={`${lightMode ? "text-gray-600" : "text-white"} text-md font-medium`}>% Change </p>
          <p className='text-sm font-medium text-green-400'>{stock.percent_change}</p>

        </div>
      </div>

      <div id="volume" className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 h-[120px]`}>
        <p className='text-green-400 text-lg font-bold my-2'>{stock.symbol}</p>
          <div className='flex justify-start gap-8'>
            <p className= {`${lightMode ? "text-gray-600" : "text-white"} text-md font-medium`}>Volume </p>
            <p className='text-sm font-medium text-green-400'>{stock.volume}</p>
          </div>
          <div className='flex justify-start gap-8 mt-2'>
            <p className= {`${lightMode ? "text-gray-600" : "text-white"} text-md font-medium`}>% Volume </p>
            <p className='text-sm font-medium text-green-400' >{percentVol}%</p >

          </div>
      </div>
      <div id="market cap" className={`${lightMode ? "bg-white/80 shadow-md" : "bg-gray-800"} p-2 h-[120px]`}>
        <p className='text-green-400 text-lg font-bold my-2'>{stock.symbol}</p>
          <div className='flex justify-start gap-8'>
            <p className= {`${lightMode ? "text-gray-600" : "text-white"} text-md font-medium`}>Mkt capitalization </p>
            <p className='text-xl font-medium text-green-400'>{stock.market_cap}</p>
          </div>
          
      </div>
    </div>
  )
}