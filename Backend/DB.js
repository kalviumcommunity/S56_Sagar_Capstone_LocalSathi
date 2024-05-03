require("dotenv").config();
const mongoose = require("mongoose");

const max_try = 4;
const initial_interval_retry = 3000;

const connection = async (retry) => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        if (retry <= max_try) {
          
          
            const exponentialBackoff = Math.pow(2, retry - 1);
            const delay = initial_interval_retry * exponentialBackoff;
            setTimeout(() => connection(retry + 1), delay);
        } else {
            console.error("Max retry attempts reached. Exiting...");
            process.exit(1);
        }
    }
};

const connected = async () => {
    await connection(1);
};

const isConnected = () => {
    return mongoose.connection.readyState === 1;
};

module.exports = {
    connected,
    isConnected
};
