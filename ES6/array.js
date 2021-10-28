// array methods
// map()
// forEach
// filter
// find
// reduce
// slice
// join , toString 
// Math()

// let newArray = array.map(num => num +10)
// console.log(newArray)

// array.forEach(add)
// function add(item ,index , arr){
//    arr[index]=  item + 10
// }
// console.log(array)
// let tab = [min , max]
// let min =array[0]
// let max=array[0]
// for(let i = 1 ; i<array.length ; i++){
//     if(min>array[i]){min =array[i]}
//     if(max<array[i]){max=array[i]}
// }
// tab.push(min)
// tab.push(max)
// console.log(tab)
// let min = Math.min(...array)
// let max = Math.max(...array)
// // let tab=[min , max]
// console.log(tab)
let array = [15, 24, 15, 26, 1, 8, 45];
// let test = array.filter(element =>element >8)
// console.log(test)
// let sum = 0
// for(let i = 0 ; i<array.length ; i++){
//     sum+=array[i]
// }
// console.log(sum)
let test = array.reduce((sum , number)=>sum + number)
console.log(test)