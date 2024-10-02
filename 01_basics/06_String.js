const name="Varuni Balodhi"
const Age=20

//console.log(name +" Age is "+ Age)

//console.log(`Hello my name is ${name} and my age is ${Age}`)

const city = new String('Dehradun@@248007')
console.log(city[0])
console.log(city.__proto__)
console.log(city.charAt(1))
console.log(city.length)
console.log(city.toUpperCase())
console.log(city.toLowerCase())

const newCity=city.substring(5,16)
console.log(newCity)
//does not obeys negetive values
//slice obeys negetive values starts from the last of the string

const str= city.slice(-15,8)
console.log(str)

const fruit="   Apple   "
console.log(fruit.trim())

const veggie="Carrot"
console.log(veggie.replace('o','a'))
console.log(veggie.includes('Car'))

//Splits the string

console.log(veggie.split('r'))

