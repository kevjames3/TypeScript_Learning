/** The comparitor function for sorting */
type Comparitor<F> = (a: F, b: F) => number;
export default class Sort {    
    public static MergeSort<T>(input:T[], comparitor:Comparitor<T>) : T[] {        
        function Merge(a: T[], b: T[]) : T[]{
            let newArray : T[] = [];
            if (a.length > 0 && b.length == 0){
                newArray = a;
            } else if (b.length > 0 && a.length == 0){
                newArray = b;
            } else {
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