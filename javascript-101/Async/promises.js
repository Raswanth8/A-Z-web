// Promise = object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// then() method returns a Promise
// The catch() method returns a Promise and deals with rejected cases only. 
// .then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and 
// the second argument is a callback function for the rejected case.



let books = [
    {Title :'Do epic shit', Author : 'Ankur Warikoo'},
    {Title :'Atomic Habits', Author : 'James Clear'}
]
function getposts(){
    setTimeout(() => {
    books.forEach((book) => console.log(book.Title))
    }, 1000);
}

function createpost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            books.push(post)
            const error = false; // true will return the error

            if (!error){
                resolve()
            }
            else{
                reject("Error")
            }
        }, 2000);
    })
    
}

// getposts()
// createpost({Title :'2 states', Author : 'Chetan Bhagat'}).then(getposts).catch(err => console.log(err))

// Promise.all

const promise1 = Promise.resolve('Kendall Roy')
const promise2 = 20
const promise3 = new Promise((resolve)=>{
    setTimeout(resolve,2000,'Roman Roy')
})
//const promise4 = fetch('http://dummy.restapiexample.com/api/v1/employees').then(res => res.json()) // formatting

Promise.all([promise1,promise2,promise3]).then(values => console.log(values)) // returns array of values.