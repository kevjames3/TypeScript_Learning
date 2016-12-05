import Sort from './common/sorting';

let anArray:Array<number> = [];

for(let i:number = 0; i < 25; i++){
    anArray.push(Math.floor(Math.random() * 1000));
} 
let newQuickArray = Sort.QuickSort(anArray, (a: number, b: number) => {return a - b});
let newMergeArray = Sort.MergeSort(anArray, (a: number, b: number) => {return a - b});

console.log(`Old Array: ${anArray}`);
console.log(`New Merge Sort Array: ${newMergeArray}`); 
console.log(`New Quicksort Array ${newQuickArray}`);