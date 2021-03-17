for (let line = 1 ; line <= 8; line ++ ){
    if (line % 2 === 0 ){
        console.log('####');
    } else {
        console.log('    ####');
    }
}

// risolto con una funzione
function myFunc(n1,n2,figura1, figura2) { // start function
  
    for (let line = n1 ; line <= n2; line ++ ){
      if (line % 2 === 0 ){
          console.log(figura1);
      } else {
          console.log(figura2);
      }
    }
    
  }// end function
  
  myFunc(1,8,'####','    ####'); 