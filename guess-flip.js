import { flipACoin, coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args['call'];
const call = args['call'];

if(call == "tails" || call == "heads"){

    console.log(flipACoin(call));

} 

else{

    console.log("Error: no inputs.");

}