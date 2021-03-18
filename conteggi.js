
function countChar(stringa,carattereDaContare) {
    let counter = 0;
    for(let i = 0; i< stringa.length; i++){
        if(stringa.charAt(i) === carattereDaContare){
            counter = counter + 1;
        }
    }
    console.log(counter);
}

function countB(string) {
    countChar(string, 'B')
} 


// function countB (stringa) {
//     let counter = 0;
//     for(let i = 0; i< stringa.length; i++){
//         if(stringa.charAt(i) === 'B'){
//             counter = counter + 1;
//         }
//     }
//     console.log(counter);
// }

countB('BaBilon');
countChar('XamaXiXiXim', 'X');