const Bard = require('bard-ai');
require("dotenv").config();

// Set the Bard API key
process.env.BARD_API_KEY = 'eQhZX8BEfF_6hDZq_k6Ya8AmpX0wJyOaVFG3OtDQxRKhuPIjA-qen2xOJpmr8QHuryxqsg.';

// Create a new Bard instance
const bard = new Bard();

// Send a request to the Bard API
const response =  bard.ask('What is the meaning of life?').then((result) => {
    console.log(result);
}).catch((err) => {
    
});;

// Get the Bard response
const bardResponse = response.data;

// Print the Bard response
console.log(bardResponse);