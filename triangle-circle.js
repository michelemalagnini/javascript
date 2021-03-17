// ho creato un triangolo con gli asterischi ciclando con il for un asterisco
// - prima dichiaro una variabile con un asterisco all interno let line = '#'
// - eseguo il ciclo sin che la linghezza della stringa line rimane minore di 10 line.length < 10 
// - ad ogni passaggio del ciclo incremento di un asterisco  

// incremento NORMALE 
// line = line + '#' 

// incremento sintetico line += '#'  

for (let line = '#'; line.length < 10; line = line + '#'){
    console.log(line);
}
