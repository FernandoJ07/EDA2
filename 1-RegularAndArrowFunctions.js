function OddEvenRegular(x){
    return  x % 2 === 0 ? `${x} es par` : `${x} es impar`;
}

let OddEvenArrow = (...args) => {
    let [x] = args 
    return  x % 2 === 0 ? `${x} es par` : `${x} es impar`;
}

console.log(`Usando regular function: ${OddEvenRegular(5)}`); // --> Es impar
console.log(`Usando arrow function: ${OddEvenArrow(8)}`); // --> Es par