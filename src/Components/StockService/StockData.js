import axios from "axios"
  import debounce from 'lodash.debounce'
  
  
  //const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY

  const getStockData = debounce (async() => {
    try {
      const response = await axios.get("http://localhost:5002/api/stocks");
    console.log("Stock Data:", response.data);
    return response.data;
      /*const response = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/quotes?ticker=AAPL%2CMSFT%2C%5ESPX%2C%5ENYA%2CGAZP.ME%2CSIBN.ME%2CGEECEE.NS', {
        headers : {
          "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        }
      })

      console.log("Retrieved stocks data: ", response.data)
      const stocks = response.data?.body || [];

      /*console.log("Full API response: ", response.data)
      const timeSeriesKey = Object.keys(response.data).find((key) => key.includes("Time Series"));

      const stocks = response.data[timeSeriesKey] || null

      if(!stocks){
        console.log("No stocks data/history retrieved")
        return null
      }
      return stocks;*/

    } catch (error) {
      console.log("Error retrieving stocks: ", error)
    }
  }, 2000)

  

  //export default getStockData

  const stock_data = [
    {
      "symbol": "AAPL",
      "name": "Apple Inc.",
      "price": 175.23,
      "change": "+1.32",
      "percent_change": "+0.76%",
      "volume": 56234000,
      "market_cap": "2.9T",
      "day_high": 157,
      "day_low":123,
      "week_high":570,
      "week_low": 490
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft Corporation",
      "price": 310.67,
      "change": "-0.54",
      "percent_change": "-0.17%",
      "volume": 28345000,
      "market_cap": "2.4T",
      "day_high": 197,
      "day_low":143,
      "week_high":450,
      "week_low": 300
    },
    {
      "symbol": "GOOGL",
      "name": "Alphabet Inc.",
      "price": 129.85,
      "change": "+0.91",
      "percent_change": "+0.71%",
      "volume": 15423000,
      "market_cap": "1.6T",
      "day_high": 167,
      "day_low":113,
      "week_high":417,
      "week_low": 360
    },
    {
      "symbol": "AMZN",
      "name": "Amazon.com Inc.",
      "price": 135.12,
      "change": "+2.44",
      "percent_change": "+1.84%",
      "volume": 34156000,
      "market_cap": "1.4T",
      "day_high": 117,
      "day_low":93,
      "week_high":266,
      "week_low": 197
    },
    {
      "symbol": "TSLA",
      "name": "Tesla Inc.",
      "price": 256.44,
      "change": "-3.28",
      "percent_change": "-1.26%",
      "volume": 74320000,
      "market_cap": "0.8T", 
      "day_high": 327,
      "day_low":133,
      "week_high":670,
      "week_low": 460
    },
    {
      "symbol": "NFLX",
      "name": "Netflix Inc.",
      "price": 402.56,
      "change": "+5.76",
      "percent_change": "+1.45%",
      "volume": 12945000,
      "market_cap": "0.2T",
      "day_high": 2417,
      "day_low":223,
      "week_high":455,
      "week_low": 309
    }

  ]

  export default stock_data