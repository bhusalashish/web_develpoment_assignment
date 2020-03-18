// Q1. Write a JavaScript program to check whether a matrix is a diagonal matrix or not.
// In linear algebra, a diagonal matrix is a matrix in which the entries outside the main
// diagonal are all zero (the diagonal from the upper left to the lower right). 
// Example: 
// [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
// [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false


function diagonalMatrix(){
    let a = [[1, 0, 0],[0, 2, 0],[0, 0, 3]];
    let flag = 0;
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a[i].length; j++){
            if(i!=j && a[i][j]!=0){
                flag = 1;
                break;
            }
        }
    }
    if(!flag)
        console.log("true");
    else console.log("false");
        
}

diagonalMatrix();