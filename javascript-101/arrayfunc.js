// Javascript Array Functions
const cars = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
      },
      {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
      {
        "color": "blue",
        "type": "SUV",
        "registration": new Date('2014-05-03'),
        "capacity": 6
      },
]

const ages =  [11,22,3,4,5,23,45,65,23,19,90,89,40,2,1]

// for loop
for(let i =0;i<cars.length;i++){
    console.log(cars[i])}
for(let i =0;i<ages.length;i++){
    console.log(ages[i])} 

//forEach = same as for loop (To iterate the array)
cars.forEach(function(car){ // Synchronus Function
   console.log(car.color)})
ages.forEach(function(age){console.log(age)})

// filter - creates a new array with all elements that pass the test implemented by the provided function.

// The main difference between forEach and filter is that forEach just loop over the array and executes the callback but 
// filter executes the callback and check its return value. filter does not update the existing array it will return a new filtered array every time.

// first method (Traditional way)
const drink= []
for(let i =0; i<ages.length;i++){
   if(ages[i]>=21){
       drink.push(ages[i])
   }
}

//second method (Using filter)
const drink = ages.filter(function(age){
   if(age>=21){
       return true
   }
})

// Third Method (Using Arrow func and filter)
const drink = ages.filter(age => age >=21)
console.log(drink)

const redcar = cars.filter(car => car.color === 'red'|| car.color === 'blue')
console.log(redcar)

// map  = creates a new array populated with the results of calling a provided function on every element in the calling array
// Map like filter & foreach takes a callback and run it against every element on the array but whats makes it unique is 
// it generate a new array based on your existing array. The provided callback to map modifies the array elements and save them into the 
// new array upon completion that array get returned as the mapped array.

const cartypes = cars.map(car => car.type) 
console.log(cartypes)

const newages = ages.map(age => age*2).map(age => Math.sqrt(age))
console.log(newages)

// sort = sorts the elements of an array in place and returns the sorted array.

const sortcap = cars.sort((c1,c2) => c1.capacity > c2.capacity ? 1 : -1)
console.log(sortcap)

const sortages = ages.sort((a,b)=> a -b) // to handle both single digit and doubl digit
console.log(ages)

// reduce = reduce method of the array object is used to reduce the array to one single value.

const agesum = ages.reduce((total,age) => total+age, 0)
console.log(agesum)

const totalcap = cars.reduce((total,cap)=> total+cap.capacity,0)
console.log(totalcap)

const combined = ages.map(age => age*2).filter(age => age> 20).sort((a,b)=> a-b).reduce((total,age) =>total+age,0 )
console.log(combined)

// Add or remove items
ages.push(24) // Adds an element to last
console.log(ages)
ages.pop(24) // Pops an element to last
console.log(ages) 
const firstele = ages.shift() // Pops an element from the first
console.log(ages)
console.log(firstele)
ages.unshift(11) // Adds an element to first
console.log(ages)

// splice = changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// delete keyword removes a value by the key. It’s all it does. Fine for objects. But for arrays we usually want the 
// rest of elements to shift and occupy the freed place. Hence use splice (eg with length)

let nums = ['Mon','Tue','Thurs'] 
nums.splice(2,0,'Wed') //splice(start, deleteCount, item)
console.log(nums)
nums.splice(3,1,'Fri')
console.log(nums)

// slice = returns a new array copying to it all items from index start to end (not including end)
let nums = ['Mon','Tue','Thurs'] 
console.log(nums.slice(1,3))
console.log(ages.slice(-3))

console.log(nums.indexOf('Mon'))
console.log(nums.indexOf(null))
console.log(nums.lastIndexOf('Thurs')) // right to left
console.log(nums.includes('Tue'))
console.log(nums.reverse())

// split and join

let name = 'Raswanth'
const arr = name.split('')
console.log(arr)
let names = "Rachoo,Kendall,roman"
let newarr = names.split(',')
console.log(newarr)
let str = newarr.join(";")
console.log(str)
