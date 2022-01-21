// Traditional Import
import User from './user.js'

const user = new User('Kendall', 32)

console.log(user)

// Dynamic Import 

import('./user.js').then(({default: User})=>{  // Destructuring
    const user = new User('Kendall', 32)
    console.log(user)
})

// Make sure to add type = 'Module' and defer in script tag 
// Advantages of Dynamic Import -> Code Spliting, Reduced Memory Usage, Increased Performance