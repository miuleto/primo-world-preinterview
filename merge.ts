
export function merge(collection1:number[],collection2:number[],collection3:number[]){
    const a:number = collection1.length;
    const b:number = collection2.length;
    const c:number = collection3.length;
    
    let i:number = 0, j:number = 0, k:number = 0;
    let minimum : number;

    let resultcollection: number[] = [];
    while(i < a && j < b && k < c){
        minimum = Math.min(Math.min(collection1[i],collection2[j]),collection3[c-k-1])
        resultcollection.push(minimum);
        if (minimum === collection1[i]){
            i++;
        } else if (minimum === collection2[j]){
            j++;
        } else {
            k++;
        }
    }
    // went through collection1
    while(j < b && k < c){
        minimum = Math.min(collection2[j],collection3[c-k-1]);
        resultcollection.push(minimum);
        if (minimum === collection2[j]){
            j++;
        } else {
            k++;
        }
    }

    // went through collection2
    while(i < a && k < c){
        minimum = Math.min(collection1[i],collection3[c-k-1]);
        resultcollection.push(minimum);
        if (minimum === collection1[i]){
            i++;
        } else {
            k++;
        }
    }

    // went through collection3
    while(i < a && j < b){
        minimum = Math.min(collection1[i],collection2[j]);
        resultcollection.push(minimum);
        if (minimum === collection1[i]){
            i++;
        } else {
            j++;
        }
    }

    //check for any remaining
    while (i < a){
        resultcollection.push(collection1[i]);
        i++;
    }
    while (j < b){
        resultcollection.push(collection2[j]);
        j++;
    }
    while (k < c){
        resultcollection.push(collection3[c-k-1]);
        k++;
    }

    return resultcollection
}