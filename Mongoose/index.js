const mongoose =  require('mongoose')
const User = require('./user')


// Connecting to the database
// We can ignore the 2 parameters as the query works after establishment of a connection.
mongoose.connect("mongodb://localhost/testdb", ()=>{
    console.log("Database Connected")
}, e => console.error(e))

run()
async function run(){
    const user = await User.where('name').equals('Roman').gt(12).select('age')
    console.log(user.namedEmail)
    // const user = await User.create({
    //     name : 'Kendall', 
    //     age : 30,
    //     email : 'kendall@waystar.com',
    //     hobbies : ['Code','Coffee'],
    //     address : {
    //         street : 'ChurcH St',
    //         city : 'Bangalore'
    //     }
    // })
    // user.name = 'Roman'
    // await user.save()
    // const user = new User({name : 'Kendall', age : 30})
    // await user.save()
    console.log(user)
}
