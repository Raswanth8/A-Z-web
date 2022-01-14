// The word “async” before a function means one simple thing: a function always returns a promise.
// Other values are wrapped in a resolved promise automatically

// await works only inside async functions
// await makes JavaScript wait until that promise settles and returns its result.

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

async function p(){
    await createpost({Title :'2 states', Author : 'Chetan Bhagat'})
    getposts()
}

p()

// Using fetch
async function fetchemp(){
    const res = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const data = await res.json()
    console.log(data)
}
fetchemp()