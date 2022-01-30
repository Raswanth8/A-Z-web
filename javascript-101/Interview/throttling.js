// Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. 
// (ex: browser resizing)
// Let’s take an example of a shooting game, where user pulls the trigger of a weapon continuously. 
// We need to take care the Rate of Fire for different type of weapons.

const handlerTrigger = () => {
    fireShot();      // Expensive call
  }

const optimisedTriggerHandler = throttleFunc(handlerTrigger, 100);
  const throttleFunc = (func, interval) => {
       let shouldFire = true;
     return function() {
           if (shouldFire) {
               func();
               shouldFire = false;
               setTimeOut(() => {
                 shouldFire = true;
                }, interval)
            }
         }
    }

// Even though both debouncing and throttling seems like similar, both have their own use-cases. 
// It’s not recommended to use throttling logic in search bar and we we cannot use debouncing in shooting game scenario or
//  browser resizing or onScroll events.
