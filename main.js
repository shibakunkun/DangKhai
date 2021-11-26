// var arr = [
//     5,
//     2,
//     1,
//     3,
//     4,
//     123,
//     1,
//     123234,
//     31451,
//     457
// ]

// var findIndex = arr.every(function (a){
//     return a === 1
// })
// console.log(findIndex)

// var findNumber = arr.filter(function (find, index) {
//     return find < 2 && find > 0
// })

// console.log(arr.indexOf(457))

// var index = arr.indexOf(1)


// var arr = [1, 2, 4, 6, 33, 77, 88]


// var sum = arr.reduce(function(accumulator, currentVallue){
//     return accumulator +  currentVallue
// }, 0)

// console.log(sum)



// var a = [4, 2]
// var b = [2, 9]
// var c = [3, 4]

// var ac = Math.sqrt(Math.pow(c[0] - a[0], 2) + Math.pow(c[1] - a[1], 2))
// var ab = Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2))
// var bc = Math.sqrt(Math.pow(c[0] - b[0], 2) + Math.pow(c[1] - b[1], 2))


// console.log(Math.round(ab + ac + bc))

// var arr = [1,2,3]

// function sumNumbersLargerAverage(arr){
//     var sumOfarray = sumNumbersLargerAverage.reduce(function(accumulator, currentValue) {
//         return accumulator + accumulator
//     })

//     var Average = sumOfarray/sumNumbersLargerAverage.length

//     var checkNumber = sumNumbersLargerAverage.filter(function(check) {
//         return check > Average
//     })

//     var Sum = checkNumber.reduce(function(accumulator1, currentValue1) {
//         return accumulator1 + currentValue1
//     })

// return Sum

// }
// console.log(sumNumbersLargerAverage)

// var x = 10
// var soMu = x - 1
// var arrSoMu = []

// for(i = 1; i < x; i++){
//     arrSoMu.push(Math.pow(x, i))
// }

// var sum = arrSoMu.reduce(function(a, b){
//     return a + b
// }, 0)

// console.log(sum)