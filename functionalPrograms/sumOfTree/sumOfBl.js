/**
* @Execution default cmd>node.js
* @purpose :read in integers and counts the  number of triples that sum to exactly 0
*/
exports.sumthreeint = () => {
  let arr = [0, -1, 2, -3, 1];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        try {
          if (arr[i] + arr[j] + arr[k] == 0) {
            console.log("[" + arr[i], arr[j], arr[k] + "]");
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};