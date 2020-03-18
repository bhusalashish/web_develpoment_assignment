// Q2.Write a JavaScript function to convert an amount to coins.
// Sample function :amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output : 25, 10, 10, 1

function coinChange(val, arr){
    let n = arr.length;
    if(val==0 || n==0) return [];
    let res = [];
    arr.sort(function(a,b){
        return b-a;
    });
    for(let i=0; i<n; i++){
        while(val>=arr[i]){
            val-=arr[i];
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(coinChange(93, [1, 2, 5, 10, 20, 50, 100, 500, 1000]));
