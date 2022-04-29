import {coinFlips} from "./modules/coin.mjs";
import minimist from 'minimist';
import {countFlips} from "./modules/coin.mjs";

// import { createRequire } from 'module';

// const req = createRequire(import.meta.url);

const args = minimist(process.argv.slice(2));
args ["number"]
const number = args.number || 1

var flip = coinFlips(number);

console.log(flip)
console.log(countFlips(flip))