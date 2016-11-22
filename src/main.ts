import Sort from './common/sorting';

let anArray:Array<number> = [];

for(let i:number = 0; i < 10; i++){
    anArray.push(Math.floor(Math.random() * 100));
} 
//Sort.QuickSort(anArray, (a: number, b: number) => {return a - b});
let newArray = Sort.MergeSort(anArray, (a: number, b: number) => {return a - b});

console.log("Old Array: " + anArray);
console.log("New Array: " + newArray); 