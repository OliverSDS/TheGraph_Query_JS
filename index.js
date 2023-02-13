require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const Query = fs.readFileSync('./query.gql', 'utf-8');

const SUBGRAPH_ID = process.env.SUBGRAPH_ID;
const API_KEY =process.env.API_KEY;

const main_fn = async () => {
    try{
    const result = await axios.post(
        `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/${SUBGRAPH_ID}`,
        {
            query: Query
        }
  
    )
    console.log(result.data.data) 
    }catch(error){
        console.log(error)
    }
}

main_fn();