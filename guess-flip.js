import { flipACoin, coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args['call'];
const call = args['call'];
var flips = flipACoin(call)


if(call == null || call != "heads" || call!= "tails") {
    
    console.log("Error: no inputs.")

}
if(call == "tails" || call == "heads"){

    console.log(flipACoin(call));

} 

else{

    console.log(flips);

}