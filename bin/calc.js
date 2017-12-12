#! /usr/bin/env node


var calc = require('./calculadora')

//console.log(calc)




var args = process.argv.splice(2)
console.log(args[0])
console.log(args[1])
console.log(args[2])


var operator = calc[args[0]]
var x = parseInt( args[1] )
var y = parseInt( args[2] )

if(!operator){
    return console.log('Operação indisponivel')
}

if(operator == 'square'){
    return console.log(operator(x))
}


return console.log(operator(x,y))
