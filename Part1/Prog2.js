//How to write functions using Commomn JS syntax
//Now since we have placed the names in the names.js file so the sayHi has no access to these names
//So to make these names available to the SayHi function we need to set up modules
//So using this require method helps us to import objects and functions from differnet files and us them in our current file
const names=require('./Names')
const sayHi=require('./utils')
const data=require('./alternative')
//console.log(names)
//sayHi('Subhrodip')
//console.log(data)
//sayHi(gourav)
require('./expectionalcase')