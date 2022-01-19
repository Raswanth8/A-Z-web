// When a website is loaded, 2 things happen -> HTML parsing and script loading.

// Normal Script tag -> HTML parsing is rendered till it encounter a script tag. After
// encountering one it pauses HTML parsing, fetches the js part from network and waits till the javascript part is done.

// Script tag with async attribute -> HTML parsing and js fetching from network is done parallely till it encounter a script tag. 
// After encountering one it pauses HTML parsing it waits till the javascript part is done.

// Script tag with defer attribute -> HTML parsing and js fetching from network is done parallely and the scripts are executed 
// only after HTML parsing is fully done.


// Defer maintains order of execution, hence id there is any dependancy in scripts we should use this.
// If we are loading any external scripts, we should use async.

