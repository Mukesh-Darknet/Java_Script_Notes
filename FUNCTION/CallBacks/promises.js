function creatPromises(){
    return new Promise(function exec(resolve,reject) {
        // code goes here
        setTimeout(function fn(){
            console.log("time is done");
        },3000);

    })
}


console.log("Start");
let x=creatPromises();
console.log("get a new promises");
x.then(function f()
{
    console.log("promises is done");
});
