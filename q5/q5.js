


function logicalNor(){
    let x,y;
    if(document.getElementById("first").value == "true") x=true;
    else x=false;
    if(document.getElementById("second").value == "true") y = true;
    else y=false;
    let res;
    if(x || y)
        res = false;
    else res = true;
    document.getElementById("result").innerHTML = "<h1>" + res + "</h1>";
}
