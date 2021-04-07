function range(start,end){
    let arr = [];
    for(let i = start; i <= end; i++){
    arr.push(i);
    }
    return arr
  }
  
  function rangeIntervall(start,end,intervall){
    if (intervall == null){
      intervall = 1;
    }
    let arr = [];
    for(let i = start; i <= end; i +=  intervall){
      
      arr.push(i);
    }
    return arr
  }
  
  let arrNormale = range(1,10);
  console.log('array: ' + arrNormale);
  
  let arrIntervall = rangeIntervall(1,10,2);
  console.log('array intervall: ' + arrIntervall);
  
  function sum(arr){
    let totale = 0;
    for(let i = arr[0]; i <= arr.length; i++){
      totale += i;
      console.log(totale);
    }
    return totale
  }
  
  console.log('somma degli elementi dell array: ' + sum(arrNormale))
  console.log('somma degli elementi dell arrayIntervall: ' + sum(arrIntervall))