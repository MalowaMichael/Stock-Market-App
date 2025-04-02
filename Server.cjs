const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config();

const app = express()
const port = 5002

app.use(cors());

app.get("/api/stocks", async (req, res) =>{
  try {
    const response = await axios.get(
      "https://query1.finance.yahoo.com/v7/finance/quote?symbols=AAPL"
    );
    //res.json(response.data);
    res.json({message: "Stock data retrieved successfully"})

  } catch (error) {
        res.status(500).json({ error: "Failed to fetch stock data" });

  }
})
app.listen(port, () => console.log(`Proxy server running on port ${port}`));
