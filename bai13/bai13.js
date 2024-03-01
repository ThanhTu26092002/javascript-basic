

let arrTop4 = ['MU','MCI','REAL','LIVER'];
//while kết hợp if else
let i = 0;
while ( i < arrTop4.length) {
    //if - else
    // if (arrTop4[i].length === 2) {
    //     console.log('Top4: ', i + 1, arrTop4[i]);
    // } else if (arrTop4[i].length === 4) {
    //     console.log('top 1:', i + 1, arrTop4[i])
    // }
    // i++;

    // break; dừng khi được kết quả như mong đợi
    i++;
    if ( arrTop4[i] === 'LIVER'){
        console.log('two item:', arrTop4[i])
        continue;
    }
    console.log('check i: ', i)
    
}