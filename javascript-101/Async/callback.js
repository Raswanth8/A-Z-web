// A callback function is a function passed into another function as an argument, which is then invoked inside the outer 
// function to complete some kind of routine or action.
let books = [
    {Title :'Do epic shit', Author : 'Ankur Warikoo'},
    {Title :'Atomic Habits', Author : 'James Clear'}
]
function getposts(){
    setTimeout(() => {
    books.forEach((book) => console.log(book.Title))
    }, 1000);
}

function createpost(post,callback){
    setTimeout(() => {
        books.push(post)
        callback()
    }, 2000);
}

getposts()
createpost({Title :'2 states', Author : 'Chetan Bhagat'},getposts)

// In the above program, without callback function new post(3) will not be relflected due to larger
// timeout time. But using callback functions we are trying to call the getposts functions to invoke the 
// get post again along with newly added post.