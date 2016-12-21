/** The comparitor function for sorting */
type Comparitor<F> = (a: F, b: F) => number;
export default class Sort {    
    public static QuickSort<T>(input:T[], comparitor:Comparitor<T>) : T[] {  
        if(input.length <= 1){
            return input;
        }
        
        //Choose pivot index, taking the random approach on this one
        let pivotIndex = Math.floor(Math.random() * (input.length - 1));
        let pivotValue = input[pivotIndex];
        let smallerArray = []; //If the comparison is less than zero
        let biggerArray = []; //Otherwise, the comparison is greater than or equal to zero
        input.forEach((value: T, index: number) => {
            if(index == pivotIndex){
                return;
            }

            let comparison = comparitor(value, pivotValue);
            if (comparison < 0){
                smallerArray.push(value);
            } else {
                biggerArray.push(value);
            }
        })
        
        let sortedBiggerArray = Sort.QuickSort(biggerArray, comparitor);
        let sortedSmallerArray = Sort.QuickSort(smallerArray, comparitor);
        return sortedSmallerArray.concat([pivotValue]).concat(sortedBiggerArray);
    }
    
    public static MergeSort<T>(input:T[], comparitor:Comparitor<T>) : T[] {        
        function Merge(a: T[], b: T[]) : T[]{
            let newArray : T[] = [];
            for(let i = 0, j = 0; i < a.length || j < b.length;){
                if(a[i] == undefined && b[j] != undefined){
                    newArray.push(b[j])
                    j++;
                } else if (a[i] != undefined && b[j] == undefined){
                    newArray.push(a[i]);
                    i++;
                } else if (a[i] == undefined && b[j] == undefined) {
                    j++; i++;
                } else {
                    let comparison = comparitor(a[i], b[j]);
                    if(comparison > 0){
                        newArray.push(b[j]);
                        j++;
                    } else if (comparison == 0){
                        newArray.push(a[i]);
                        newArray.push(a[j]);
                        i++ && j++;
                    } else { //comparison > 0
                        newArray.push(a[i]);
                        i++;
                    }
                }
            }
            return newArray;
        }
                
        if(input.length <= 1){
            return input;
        }
        let middle = Math.floor(input.length/2);
        let sortA = Sort.MergeSort(input.slice(0, middle), comparitor);
        let sortB = Sort.MergeSort(input.slice(middle, input.length), comparitor);
        return Merge(sortA, sortB);
    }
}