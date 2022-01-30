// Amazon Interview Problem
// Sum(1)(2)(3)..(n)

let sum = (a) => {
    return (b) =>{
        return b ? sum(a+b) : a
    }
}
console.log(sum(1)(4)(3)())