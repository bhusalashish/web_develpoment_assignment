// Q5. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n){
    if(n==0) return [[]]
    let arr = [];
    for(let i=0; i<n; i++){
        let temp = [];
        for(let j=0; j<n; j++){
            if(i!=j) temp.push(0);
            else temp.push(1);
        }
        arr.push(temp);
    }
    return arr;
}

console.log(identityMatrix(5));

//OUTPUT
// [ [ 1, 0, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0 ],
//   [ 0, 0, 1, 0, 0 ],
//   [ 0, 0, 0, 1, 0 ],
//   [ 0, 0, 0, 0, 1 ] ]
