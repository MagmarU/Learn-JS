function getMaxSubSum( arr ) {
    let sum = 0;
    let maxSum = 0;
    for( let arrElement of arr ) {
        if( arrElement < 0 ) {
            sum = 0;
            continue;
        }
        if( sum == 0 ) sum = arrElement;
        if( arrElement < sum ) sum += arrElement;
        if( maxSum < sum ) maxSum = sum;
    }
    return maxSum;
}

// function getMaxSubSum(arr) {

//     // отсекаем отрицательные числа по краям массива
//     while(arr[0] <= 0 || arr[arr.length - 1] <= 0) {
//     arr[0] <= 0 ? arr.shift() : arr.pop();
//     }
    
//     let maxSum = 0;
//     let num = 0;
    
//     // индексы нужны для дальнейшего вывода подмассива
//     let index1 = 0;
//     let index2 = 0;
    
//     for(let i = 0; i < arr.length; i++) {
//     num = arr[i];
    
//     if(num > maxSum) {
//     maxSum = num;
//     index1 = i;
//     }
    
//     for(let j = i + 1; j < arr.length; j++) {
//     num += arr[j];
    
//     if(num > maxSum) {
//     maxSum = num;
//     index1 = i;
//     index2 = j;
//     }
//     }
//     }
    
//     // определяем переменную для подмассива
//     let newArr = [];
    
//     for(let i = index1; i<= index2; i++) {
//     newArr.push(arr[i])
//     }
    
//     return `subArray = ${newArr}, maxSubSum = ${maxSum}`
// }
    


let arr = [100, -9, 2, -3, 5];


console.log( getMaxSubSum( arr ) );