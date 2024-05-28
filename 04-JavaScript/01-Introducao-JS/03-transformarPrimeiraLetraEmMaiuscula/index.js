var nome = 'lucAs'

var firstChar = nome.slice(0, 1)

var upperCaseFirstChar = firstChar.toUpperCase()

var restOfName = nome.slice(1, nome.length)
restOfName = restOfName.toLocaleLowerCase()

var capitalisedName = upperCaseFirstChar + restOfName

console.log(`Hello, ${capitalisedName}!`) // Hello, Lucas!