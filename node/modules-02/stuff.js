var counter = function(arr){
    return "There are " + arr.length + " elements"
}

var adder = function(a,b){
    return `The sume is ${a+b}`
}

var pi = 3.14

module.exports = {
    adder : adder,
    counter : counter,
    pi : pi
}