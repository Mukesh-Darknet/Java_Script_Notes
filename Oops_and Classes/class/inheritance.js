// *****This is parent Classs
class person {
    Eat(){
        console.log("Food is life");
    }
    sleep(){
        console.log("proper sleeping is good for health");
    }
}

// ******Here we Inherit the person class in the Engineer class

// ******This is child class
class Engineer  extends person {
    work (){
        console.log("Solve your Problem as soon as possible");
    }
}

let Mukesh = new Engineer()