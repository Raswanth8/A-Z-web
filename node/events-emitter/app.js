var events = require('events')
var util = require('util')

var Person = function(name){
    this.name = name
}

util.inherits(Person,events.EventEmitter)

var john = new Person('john')
var finch = new Person('finch')
var kendall = new Person('kendall')
var people = [john,finch,kendall]

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said : ',+ `${msg}`)
    })  
})

john.emit('speak',"Hey there")