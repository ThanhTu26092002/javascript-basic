console.log('bai19hello')

let sum = (a,b) => {
    return a + b;
}
console.log('check: ', sum(9,4))


let obj = {
    name: 'thanhtu',
    address: 'dai loc',
    getname: function(){
        return this.name
    }
}
console.log('name: ', obj.getname())