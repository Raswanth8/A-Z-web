// Closures -> The callbacks, event handlers, higher-order functions can access outer scope variables.
// Scope -> Manages Variable accessiblity

// Scopes can be nested
// Example
function outerFunc() {
    // the outer scope
    let outerVar = 'I am outside!';
    function innerFunc() {
      // the inner scope
      console.log(outerVar); // => logs "I am outside!"
    }
    innerFunc();
  }
outerFunc();

// lexical scoping means that inside the inner scope you can access variables of outer scopes.
const myGlobal = 0;
function func() {
  const myVar = 1;
  console.log(myGlobal); // logs "0"
  function innerOfFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal); // logs "1 0"
    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal); // logs "2 1 0"
    }
    innerOfInnerOfFunc();
  }
  innerOfFunc();
}
func();

// The lexical scope of innerOfInnerOfFunc() consits of scopes of innerOfFunc(), func() 
// and global scope (the outermost scope). Within innerOfInnerOfFunc() you can access the lexical scope variables myInnerVar, myVar and myGlobal.

// Closure  - The closure is a function that accesses its lexical scope even executed outside of its lexical scope
function outerFunc() {
  let outerVar = 'I am outside!';
  function innerFunc() {
    console.log(outerVar); // => logs "I am outside!"
  }
  return innerFunc;
}
function exec() {
  const myInnerFunc = outerFunc();
  myInnerFunc();
}
exec();

// innerFunc() still has access to outerVar from its lexical scope, even being executed outside of its lexical scope.
// In other words, innerFunc() is a closure because it closes over the variable outerVar from its lexical scope.


