// Problem - 1 : Remove BMW 
// function removeBMW(str) {
//     let removeArr=[];
//     for (let i = 0; i < str.length; i++) {
//         if(str[i]!='B' && str[i]!='M' && str[i]!='W' && str[i]!='b' && str[i]!='m' &&str[i]!='w'){
//             removeArr.push(str[i]);
//         }
//     }
//     return removeArr.join('');
// }

// console.log(removeBMW('bmwvolvoBMW'));

// Problem-2 : Highest & Lowest 
// function highAndLow(numbers) {
//     let numberArray = numbers.split(' ');
    
//     return `${Math.max(...numberArray)} ${Math.min(...numberArray)}`;
// }

// console.log(highAndLow('1 2 3 4 5'));

// Problem-3 : Fly as fast as you can
// function flyTime (dist, train, fly) {
//     return train == 0 ? null : dist/(2*train) * fly;
// }

// console.log(flyTime(100,50,30))

let obj = {"Java": 10, "Ruby": 80, "Python": 65} 
let arr=[]


// for (const key in obj) {
//     if(obj[key]>60){
//         if(obj[key]>arr[arr.length-1])
//         arr.push(key)
//     }
// }
// console.log(arr);

function matrixSquareUp(b) {
    const mat = [];
    for (let i = 1; i <= b; i++) {
        const row = [];
        for (let j = b; j > 0; j--) row.push(i < j ? "x" : `${j}`);
        mat.push(row);
    }
    return mat;
}
