import {coinFlips} from "./modules/coin.mjs";
import {countFlips} from "./modules/coin.mjs";

import { createRequire } from 'module';

const req = createRequire(import.meta.url);
// import minimist from 'minimist';

const arg = require('minimist')(process.argv.slice(2));
// arg["num"]
const num = arg.num['num'] || 1

var flip = coinFlips(num);

console.log(flip)
console.log(countFlips(flip))