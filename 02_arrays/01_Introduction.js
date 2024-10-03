const arr=[1,2,3,4,5]
const arr2=['Computer','Science']
console.log(arr)

const myarr=new Array(1,2,3,4)
console.log(myarr[0])

//Array Methods

myarr.push(6)
myarr.push(7)
myarr.pop()

console.log(myarr)
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(4))

//converts array to string

const newarr=myarr.join()
console.log(myarr)
console.log(newarr)

//slice and splice

//slice extracts array from starting to end-1
//splice extracts array from start to end.It removes the extracted array from the original array.

const nums=new Array(1,2,3,4,5)
console.log('A' , nums)

const num=nums.slice(1,3)
console.log(num)
console.log('ChangedA' , nums)

const nums2=new Array(1,2,3,4,5,6)
console.log('B' , nums2)
const num2=nums2.splice(1,3)
console.log(num2)
console.log('ChangedB',nums2)