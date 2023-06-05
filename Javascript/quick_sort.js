const testArray = [4,7,1,9,0,2,3,6,5,8]

const quickSort = (arr) => {
    if(arr.length <=1){
        return arr;
    }
    let i=0;
    let j=arr.length-1;
    let pivot = Math.floor(Math.random() * arr.length)
    const sortedArr= [];
    while(i!=j){
        while(i != pivot){
            if(arr[i] > arr[pivot]){
                break;
            }
            i++;
        }
        while(j != pivot){
            if(arr[j] < arr[pivot]){
                break;
            }
            j--;
        }
        [arr[i],arr[j]] = [arr[j],arr[i]];
        if(i==pivot){
            pivot=j;
        }else if(j==pivot){
            pivot=i;
        }
    }
    const smaller = quickSort(arr.slice(0,pivot))
    const larger = quickSort(arr.slice(pivot+1))
    for(const element of smaller){
        sortedArr.push(element);
    }
    sortedArr.push(arr[pivot])
    for(const element of larger){
        sortedArr.push(element)
    }
    return sortedArr
}


console.log(quickSort(testArray))