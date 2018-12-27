/**
 * various ways to export modules
 */

const add = (a, b) => {
    return (`sum of numbers are ${a + b}`)
}

const sub = (a, b) => {
    return (`sum of numbers are ${a - b}`)
}

const mul = (a, b) => {
    return (`sum of numbers are ${a * b}`)
}

const div = (a, b) => {
    return (`sum of numbers are ${a / b}`)
}

const pow = (a, b) => {
    return (`sum of numbers are ${a ** b}`)
}


// exporting in form of Object
module.exports = {add, sub, mul, div, pow};

//since I'm using ES6 no need to write objects as {add:add, sub:sub, mul:mul, etc}

/**
 * We can also use module.exports.variable_name = variable_name;
 * We can directly write  module.exports.variable_name instead of const variable_name
 */
