let str = "mukeshyadav"
let anostr = "mukesh      "
let anme = "     "

// console.log(string.length);
// console.log(anostring.length);

String.prototype.trulenght = function() {
    // console.log(`${this}`);
    console.log(`True lenght is : ${this.trim().length}`);

}
str.trulenght()
anostr.trulenght()
"mukesh".trulenght