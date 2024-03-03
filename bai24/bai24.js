console.log('24 hello')


const arr = [1,40,5,200000];
arr.sort((a, b) => {
    if ( a > b ) arr.push(a);
    
});
console.log(arr)