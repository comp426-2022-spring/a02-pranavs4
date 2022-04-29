import { flipACoin, coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args['call'];
const call = args['call'];
var flips = flipACoin(call)


if(call == null || call == undefined) {
    
    console.log("Error: no inputs")
    console.log('Usage: node guess-flip --call=[heads|tails]')

} else if ( call != "tails" && call != "heads" ) {

    console.log("Error: no inputs")
    console.log('Usage: node guess-flip --call=[heads|tails]')

} else if(call == "tails" || call == "heads"){

    console.log(flips);

} 

// else {

//     console.log(flips);

// }