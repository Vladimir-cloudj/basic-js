const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr2 = a;
  arr2=arr2.filter((el)=>{
    if(el != -1){
      // console.log(el);
      return el;
    }
  }).sort((a,b)=>{
    return a-b;
  })
  // console.log(arr2);
  var indexVal=0;
  for(var i=0;i<a.length;i++){
    if(a[i] != -1){
      a[i]=arr2[indexVal]
      indexVal++
    }
  }
  return a;
  // let arr=a.slice().filter(v=>v!==-1).sort((a,b)=>a-b);
  // let j=0;
  // for (let i=0;i<a.length;i++){
  // if (a[i]!==-1){
  // a[i]=arr[j];
  // j++
  // }
  // }
  // return a
}

arr = [-1, 150, 190, 170, -1, -1, 160, 180]
sortByHeight(arr)


module.exports = {
  sortByHeight
};
