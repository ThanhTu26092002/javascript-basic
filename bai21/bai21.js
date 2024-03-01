
// let arr = [ 1,2,3,4,5,6,7,8,9,10];
//filer,find
//lọc
let arr = [ 
    {name: 'ABC',age: 22},
    {name: 'DEF',age: 25},
    {name: 'GHK',age: 27},
    {name: 'OIA',age: 29},
    {name: 'AAA',age: 22},
]
// let filter = arr.filter((item, index) => {
//     return item && item.age === 22;
// })
// console.log(filter)
//find, tìm kiếm và ra giá trị đầu tiên thỏa mãn nếu có nhiều hơn 1 thì nó vẫn ra cái giá trị đầu tiên
let filter = arr.find((item, index) => {
    return item && item.age === 22;
})
console.log(filter)