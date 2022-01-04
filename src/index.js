
// You should implement your task here.
module.exports = function towelSort (matrix) {
    if (matrix == undefined) {return [];}
    var res = matrix.reduce(function (arr, el, i) {
      (i%2 == 0) ? el.reduce(function (arr, ell) {arr.push(ell); return arr;}, arr) 
                 : el.reduceRight(function (arr, ell) {arr.push(ell); return arr;}, arr); return arr;}, []); 
    return res;		
}
