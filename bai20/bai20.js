console.log('hello20')


//callback
let sum = (a,b, callback) => {
    let tong = a + b;
    //setTimeout
    setTimeout(() => {
        callback(tong); //callback
    },1000)//callback

    let i = 0;  


    //setInterval
    let Timer = setInterval(() => {
        callback(tong);
        i ++;
        if ( i === 5 ){
            clearInterval(Timer)
        }
    },1000)
    
}

let printSum =(message) => { //callback
    console.log('tong a + b = ', message)//callback
}
sum(6,9, printSum)//callback

//setTimeout and setInterval ( độ trễ và lặp vô hạn)