// Higher order function -> A function which takes a func as argument or returns a function from it.

function x(){
    console.log("Kendall Roy")
}

function y(x){
    x()
    console.log("Waystar")
}
y(x)
// y -> higer order function, x -> callback functions
// Higher order functions helps us to optimize code by reusabiltiy and modularity.
