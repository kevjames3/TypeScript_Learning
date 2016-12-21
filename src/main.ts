import { MaxHeap, MinHeap } from './common/heap';
import Sort from './common/sorting';

let anArray:Array<number> = [];
let intComparitor = (a: number, b: number) => {return a - b};

//Make some random numbers
for(let i:number = 0; i < 25; i++){
    anArray.push(Math.floor(Math.random() * 1000));
}

let newQuickArray = Sort.QuickSort(anArray, intComparitor);
let newMergeArray = Sort.MergeSort(anArray, intComparitor);

console.log(`Old Array:\n${anArray}\n`);
console.log(`New Merge Sort Array: ${newMergeArray}`); 
console.log(`New Quicksort Array ${newQuickArray}`);

let maxHeap = new MaxHeap(intComparitor);
let minHeap = new MinHeap(intComparitor);

anArray.forEach((val) => { maxHeap.insert(val); minHeap.insert(val); })

console.log(`first element in MaxHeap is ${maxHeap.peek()}`);
console.log(`first element in MinHeap is ${minHeap.peek()}`);

for(var i = 0; i < 3; i++){ //yes, I know I am using var here.
    maxHeap.delete(); minHeap.delete();
}

console.log(`after ${i} deletes, MaxHeap is ${maxHeap.peek()}`);
console.log(`after ${i} deletes, MinHeap is ${minHeap.peek()}`);
