let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let N = +lines.shift()

console.log(`1 x ${N} = ${1 * N}`)
console.log(`2 x ${N} = ${2 * N}`)
console.log(`3 x ${N} = ${3 * N}`)
console.log(`4 x ${N} = ${4 * N}`)
console.log(`5 x ${N} = ${5 * N}`)
console.log(`6 x ${N} = ${6 * N}`)
console.log(`7 x ${N} = ${7 * N}`)
console.log(`8 x ${N} = ${8 * N}`)
console.log(`9 x ${N} = ${9 * N}`)
console.log(`10 x ${N} = ${10 * N}`)