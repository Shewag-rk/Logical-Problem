// 1.Find the first bigest 
// 2.second bigest value;
// let array = [20, 90, 50, 12, 3];
// let firstLargest = 0, secondLargest = 0;
// for(let i = 0; i< array.length; i++){
    // if(array[i] > firstLargest){
        // secondLargest = firstLargest;
        // console.log(secondLargest);
        // firstLargest = array[i]
        // console.log(firstLargest);      
    // }
    // else if(array[i] > secondLargest && array[i] < firstLargest){
        // console.log(array[i]);
//         secondLargest = array[i]
//     }
// }
// console.log(firstLargest);
// console.log(secondLargest);

// --------------------------------------------------- //

// 3.Reverse the array:
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=arr.length-1; i >= 0; i--){
//     console.log(arr[i]);
// }

// --------------------------------------------------- //

// 4. Find the vowles in the Array:
// let str = 'enginerring', char = str.toLowerCase(), count = 0;
// for(let char of str){
//     // console.log(string);
//     if(char  == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u'){
//         count++   
//     }
// }
// console.log(count);

// --------------------------------------------------- //

// 5. Sort asscending and pick the unique value.
// let arr = [2,3,2,4,2,1,3,5,6,7], empty = [], newArr = []
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i] === arr[j]){
//             arr[j]= '@'
//         }

//         if(arr[i] > arr[j]){
//             newArr = arr[i];
//             arr[i] = arr[j];
//             arr[j] = newArr
//         }
//     }
// }
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] !== '@'){
//         empty[empty.length] = arr[i]
//     }
// }

// console.log(empty);

// --------------------------------------------------- //

// 6 Finding the missing numbers in the array:
// function findMissingNumber(arr){
//     let index = 0, missingNum = []
//     for(let i = arr[0]; i <= arr[arr.length - 1]; i++){
//         if(arr[index] == i){
            
//             index++
//         }else{
//             missingNum[missingNum.length] = i
//         }
//     }
//     console.log(missingNum);
// }

// let array  = [1 ,12 ,10];
// findMissingNumber(array);

// --------------------------------------------------- //

// 7. Need to count value after the decimal point.
// let num = 3489.2345, num2 = ''+num , count = 0, temps = 0;
// console.log(num2);

// for(let i=0; i<num2.length; i++){
//     if(num2[i] == '.'){
//         temps = i
//     }
// }
// count = num2.length-temps-1
// console.log(count);

// --------------------------------------------------- //

// 8. Finding count of max value:
// let array = [2,5,1,4,2,1,9], newArr = [];
// for(let i=0; i<array.length; i++){
//     newArr[array[i]] = (newArr[array[i]] || 0) + 1;
// }
// console.log(newArr);

// --------------------------------------------------- //

// 9. Search string in the array:
// function searchFunc(arr, searchStr){
//     // console.log(arr, searchStr); 
//     for(let i=0; i<arr.length; i++){
//         // console.log(arr);
//         if(arr[i] === searchStr){
//             return 1;
//         }
//     }
//     return -1
// }

// let array = ["orgination", "abb", "hello"];
// console.log(searchFunc(array, "abb"));

// --------------------------------------------------- //

// 10. Need to count the each string:
// let obj = {};
// let str = "enginering";

// for(let char of str){
//     obj[char] = (obj[char] || 0) + 1;
// }
// console.log(obj);