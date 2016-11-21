/** The comparitor function for sorting */
type Comparitor<F> = (a: F, b: F) => number;
export default class Sort {    
    public static QuickSort<T>(input:Array<T>, comparitor?:Comparitor<T>) : T[] {        
        return input;
    }

    public static MergeSort<T>(input:Array<T>, comparitor?:Comparitor<T>) : T[] {        
        return input;
    }
}