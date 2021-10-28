// spreading & destructuring 
let array = [10,20,700,2]
let array2 = [100,200,300,400]
let profile = {
    nameAt:'John Doe' ,
    nameAt : "jhonny",
    age: 37 , 
    hobbies : ['one','two']
}


// let newArray = array.concat(array2)
// console.log(newArray)
// let anotherArr = [...array ,1000,2000]
// console.log(anotherArr)

const{nameAt} = profile

console.log(nameAt)