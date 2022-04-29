import { flipACoin, coinFlip, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args['call'];
const call1 = args['call'];
var flips = flipACoin(call1)


if(call1 == null || call1 == undefined) {
    
    console.log("Error: no inputs")
    console.log('Usage: node guess-flip --call=[heads|tails]')

} else if ( call1 != "tails" && call1 != "heads" ) {

    console.log("Error: no inputs")
    console.log('Usage: node guess-flip --call=[heads|tails]')

} else {

    console.log(flips);

} 

// else {

//     console.log(flips);

// }

