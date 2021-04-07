

function range(start,end){
    let arr = [];
    for(let i = start; i <= end; i++){
        arr.push(i);
    }
    return arr
}

function rangeStep(start,end, step){
    let arr = [];
    if(step == null){
        step = 1;
    }
    if(step > 0){
        for(let i = start; i <= end; i +=  step){
            arr.push(i);
        }   
    }
    if(step < 0){
        for(let i = start; i >= end; i +=  step){
            arr.push(i);
        }   
    }
    
    return arr
}




function sum(arr){
    let totale = 0;
    for(let i = 0; i < arr.length; i++){
        totale = totale + arr[i]
    }
    return totale
}


console.log(range(1,10));
console.log(rangeStep(5,2,-1));

console.log(sum(range(1,10)));
console.log(sum(rangeStep(5,2,-1)));