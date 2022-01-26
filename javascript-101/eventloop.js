/*
JavaScript is a synchronus single-threaded language.
Every js code executes inside callstack and this call stack resides under JS V8 Engine.
Whenever a js code is executed, GEC (Global execution context) is pushed into stack & code is executed line by line.
When a function is seen, a executable context is created and pushed into stack (And func contents will be executed).
After completion execution context and GEC is popped.
 */

function a(){
    console.log("A")
}
a()
console.log('Ended')

// Time,Tide and JS waits for none XD

// Browser -> JS Engine -> Call Stack -> Code

/*
To communicate b/w various things, Browser use Web APIs
Window (Global Object) -> Provides access to below APIs
Web APIs : (below are accessed by browsers)
- setTimeout() -> Timer
- DOM APIs -> To render DOM objects in the UI
- fetch() -> To fetch data from external references
- local storage -> Temp storage
- console -> logs the data to console 
- location -> URL
 */

// Event Loop and Callback queue

console.log("Start")
setTimeout(function cb(){
    console.log("Callback")
},5000)
console.log("End")

/*
In the above program, first GEC will be created in the call stack and code will be execut3ted after that.
So, first it will log 'Start' and, next function will start execution and timer starts.
But as JS doesn't wait, it will move next line and logs 'End'

Now to push the cb() into call stack , Callback queue and event loop comes into place.
cb() will be pushed into callback queue and later event loop will check if call stack is empty or not.
If its not empty, then cb() will be pushed into the call stack and logs 'Callback'.

func -> Callback queue [func1(), func2(),...] -> Event loop -> Call Stack.
 */

// Event loop monitors call stack and callback queue. Event loop sends the func one by one to the call stack.

console.log("Start")
setTimeout(function cbT(){
    console.log("Callback Timer")
},5000)

fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    function cbF(){
        console.log("Callback Fetch")
    }
)
console.log("End")

/*
In the above program, first GEC will be created in the call stack and code will be execut3ted after that.
So, first it will log 'Start' and, next function will start execution and timer starts.
Next it moves to fetch and fetches data from API
But as JS doesn't wait, it will move next line and logs 'End'

the cbF() will be pushed to micro task queue (For microservices and higher priority than CBQ).
cbT() will be pushed into callback queue and later event loop will check if call stack is empty or not.
As MTQ has priority, cbF() will be pushed into the call stack and logs 'Callback Fetch'
then cbT() will be pushed into the call stack and logs 'Callback Timer'.

func -> Callback queue [func1(), func2(),...] -> MicroTask queue [func1(), func2(),...] -> Event loop -> Call Stack.

 */

// All the callbacks from promises and Mutation Observer will go inside MTQ.

// There will be starvation in CBQ if the numbers of tasks in MTQ > numbers of tasks in CBQ.