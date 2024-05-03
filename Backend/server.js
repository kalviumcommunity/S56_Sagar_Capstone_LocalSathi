const express = require('express')
const { connected, isConnected } = require('./DB'); 
const cors = require("cors");
const {router} = require("./Routes.js")

const port = 3200

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    try{
        res.json({
            database : isConnected() ? 'connected' : 'disconnected'}
        )
    }
    catch (err) {
        console.error('Error in main server route:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.use(router)

if (require.main === module) {
    try{

        connected()
        app.listen(port, async () => {
          console.log(` server running on PORT: ${port}`);
        });
    }
    catch (error) {
        console.error('Failed to connect to the database:', error);
    }
  }