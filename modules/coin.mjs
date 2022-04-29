/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {

  let flip = Math.random();
  // var outcome = "";
  if (flip > 0.5) {
    // outcome =  "heads";
    return "heads";
  }
  else {
    // outcome = "tails";
    return "tails";
  }
  // return outcome;
}

//console.log(coinFlip))

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {

  const flipArray = [];

  for(var x = 0; x < flips; x++) {
    let flip1 = Math.random();
    if(flip1 < 0.5){
      flipArray[x] = "heads"
    } else {
      flipArray[x] = "tails"
    } 
  }
  return flipArray
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {

  var headCount = 0; 
  var tailCount = 0;

  for(var x = 0; x < array.length; x++) {
    if(array[x] == "tails"){
      tailCount ++;
    } else {
      headCount ++;
    }
  }
  return {
    "heads": headCount,
    "tails": tailCount
  }
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {

  var output = coinFlip();
  if(output == call) {
    return{ call:call, flip: output, output : "win"}
  }
  else {
    return{call:call, flip:output, output:"lose"}
  };
}



/** Export 
 * 
 * Export all of your named functions
*/

export {coinFlip};
export {coinFlips};
export {countFlips};
export {flipACoin};