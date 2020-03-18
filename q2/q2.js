function primeFactors(num){
    let n = parseInt(num);
    let res = [];
    while(n%2 == 0){
        res.push(2);
        n = n/2;
    }
    for(let i=3; i*i <= n; i+=2){
        while(n%i == 0){
            res.push(i);
            n = n/i;
        }
    }
    if(n>2)
        res.push(n);
    document.getElementById("root").innerHTML  = "The prime factors are:- " +res;
    // console.log(res);
}

var input = prompt("Enter number");
primeFactors(input);