type Comparitor<F> = (a: F, b: F) => number;
class Heap<T> { //This cannot be accessed outside this class
    private comparitor: Comparitor<T>;
    public structure: [T];
    
    private readonly ROOT_INDEX = 1;
    private leftIndex = (index: number) => {return index * 2;};
    private rightIndex = (index: number) => {return index * 2 + 1};
    private parentIndex = (index: number) => {return Math.floor(index/2)}

    constructor(comparitor: Comparitor<T>){ 
        //At this point, I am not worrying about initing with data
        this.comparitor = comparitor;
        this.structure = [undefined]; //Starting with an undefined as the first element
    } 

    public insert(item: T){
        if(this.structure[this.ROOT_INDEX] === undefined){
            this.structure[this.ROOT_INDEX] = item;
        } else {
            //add to the end of the array
            let currentIndex = this.structure.push(item) - 1;
            let parentIndex = this.parentIndex(currentIndex);
            while(currentIndex != this.ROOT_INDEX &&
                this.comparitor(this.structure[currentIndex], this.structure[parentIndex]) < 0
            ){
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex
                parentIndex = this.parentIndex(currentIndex);
            }
        }
    }

    public delete(): T{
        let deletedValue = this.peek();
        let lastItemIndex = this.structure.length - 1;
        let lastItem = this.structure[lastItemIndex];
        
        let currentIndex = this.ROOT_INDEX;
        this.structure[currentIndex] = lastItem;  //Move the last item to the top of tree
        this.structure.splice(lastItemIndex, 1); //Remove the last item since it was swapped to top
        do {
            let leftChildIndex = this.leftIndex(currentIndex);
            let rightChildIndex = this.rightIndex(currentIndex);
            let rightChild = this.structure[rightChildIndex];
            let leftChild = this.structure[leftChildIndex];
            let leftComparison = this.comparitor(this.structure[currentIndex], leftChild);
            let rightComparison = this.comparitor(this.structure[currentIndex], rightChild);
            if(leftComparison > 0 || rightComparison > 0){
                if(leftComparison > rightComparison){
                    this.swap(currentIndex, leftChildIndex);
                    currentIndex = leftChildIndex;
                } else {
                    this.swap(currentIndex, rightChildIndex);
                    currentIndex = rightChildIndex;
                }
            } else {
                break;
            }
        } while(currentIndex < this.structure.length - 1); //if it is the last index, we are done
        
        return deletedValue;
    }

    public peek(): T{
        return this.structure[this.ROOT_INDEX];
    }

    public size(): number{
        return this.structure.length - 1; //We are not counting the first element
    }

    private swap(indexA: number, indexB: number){
        let temp = this.structure[indexA];
        this.structure[indexA] = this.structure[indexB];
        this.structure[indexB] = temp;
    }
}

export class MinHeap<T> extends Heap<T> {
    constructor(comparitor: Comparitor<T>){
        super(comparitor);
    }
}

export class MaxHeap<T> extends Heap<T> {
    constructor(comparitor: Comparitor<T>){
        super((a: T, b: T) => {
            return -1 * comparitor(a, b); //Reverse the order
        });
    }
}

