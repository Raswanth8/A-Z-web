const mongoose = require('mongoose')

const addressSchema = mongoose.Schema({
    street : String,
    city : String
})

// Schema - defines the structure of the Objects (Key- value pair)
const userSchema = mongoose.Schema({
    name : String,
    age : {
        type : Number,
        min : 0,
        max : 50,
        validate : {
            validator : v => v %2 === 0,
            message : props => `${props.value} is not a number`
        }
        // These validation will work only on save() and create() methods (other methods will directly work on the mongodb)
    },
    email : {
        type : String,
        minLength : 10,
        required : true,
        lowercase : true
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : () => Date.now()
    },
    updatedAt : {
        type : Date,
        default : () => Date.now()
    },
    bestfriend : {type : mongoose.SchemaTypes.ObjectId,
        ref : 'User'
    }, // Schema Types - configuration object for an individual property.
    hobbies : [String],
    address : addressSchema // comes along with a id in this format
})

userSchema.methods.sayName = function(){
    console.log(`Hey, its ${this.name}`)
}

userSchema.query.findName = function(){
    return this.where({name : new RegExp(name,"i")})
}

userSchema.statics.findbyName = function(){
    return this.where({name : new RegExp(name,"i")})
}

userSchema.virtual('namedEmail',function(){
    console.log(`${this.name} and <<${this.email}>>`)
})

//Middleware
// pre - before save & post - after save
userSchema.pre('save',function(next){
    this.updatedAt = Date.now()
    next()
})

userSchema.post('save',function(doc,next){
    doc.sayName()
    next()
})
// Model - provides an interface to the database for creating, querying, updating, deleting records, etc.

module.exports =  mongoose.model("User",userSchema)