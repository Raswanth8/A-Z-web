// Debouncing : used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page.
//  In other words, it limits the rate at which a function gets invoked.

let count = 0

const getData = () =>{
    console.log("Fetching Data.." + count++)
}

function magicfunc(fn,d){
    let timer
    return function(){
        args = arguments
        context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, d);
    }
}

const getData2 = magicfunc(getData,400)