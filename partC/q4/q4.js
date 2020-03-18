// Q4. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function secondls(a){
    let n = a.length;
    if(n<2){
        console.log("No such Elements");
        return;
    }
    let min = a[0], max =a[0], smax=a[0], smin=a[0];
    for(let i=1; i<n; i++){
        if(a[i] < min){
            smin = min;
            min = a[i];
        }
        else if(a[i] < smin) smin = a[i];
        else if(a[i] > max){
            smax = max;
            max = a[i];
        }
        else if(a[i] > smax) smax =a[i];
    }
    console.log("Second Min = "+smin);
    console.log("Second Max = "+smax);
    
}

secondls([3,1,2,5,4,6,20,7,8]);