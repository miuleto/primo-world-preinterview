
export function merge(collection_1:number[],collection_2:number[],collection_3:number[]){
    const a:number = collection_1.length;
    const b:number = collection_2.length;
    const c:number = collection_3.length;
    
    let i:number = 0, j:number = 0, k:number = 0;
    let minimum : number;

    let resultcollection: number[] = [];
    while(i < a && j < b && k < c){
        minimum = Math.min(Math.min(collection_1[i],collection_2[j]),collection_3[c-k-1])
        resultcollection.push(minimum);
        if (minimum === collection_1[i]){
            i++;
        } else if (minimum === collection_2[j]){
            j++;
        } else {
            k++;
        }
    }
    // went through collection_1
    while(j < b && k < c){
        minimum = Math.min(collection_2[j],collection_3[c-k-1]);
        resultcollection.push(minimum);
        if (minimum === collection_2[j]){
            j++;
        } else {
            k++;
        }
    }

    // went through collection_2
    while(i < a && k < c){
        minimum = Math.min(collection_1[i],collection_3[c-k-1]);
        resultcollection.push(minimum);
        if (minimum === collection_1[i]){
            i++;
        } else {
            k++;
        }
    }

    // went through collection_3
    while(i < a && j < b){
        minimum = Math.min(collection_1[i],collection_2[j]);
        resultcollection.push(minimum);
        if (minimum === collection_1[i]){
            i++;
        } else {
            j++;
        }
    }

    //check for any remaining
    while (i < a){
        resultcollection.push(collection_1[i]);
        i++;
    }
    while (j < b){
        resultcollection.push(collection_2[j]);
        j++;
    }
    while (k < c){
        resultcollection.push(collection_3[c-k-1]);
        k++;
    }

    return resultcollection
}