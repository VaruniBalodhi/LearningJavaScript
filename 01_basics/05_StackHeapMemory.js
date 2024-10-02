//Stack(Primitive): Copy of variable is passed.changes are not reflected
//Heap(Non Primitive): Original object is passed that is changes made are also reflected in the original object

let city="Dehradun"
let yourcity=city
yourcity="Haridwar"
console.log(city)
console.log(yourcity)

//changes are not reflected because changes are made in the copy

let userOne = {
    email:"balodhi@gmail.com",
    upi: "Var@sbi"
}
let userTwo=userOne
userTwo.email="Varu@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)