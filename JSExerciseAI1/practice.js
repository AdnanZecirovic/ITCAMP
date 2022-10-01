// function addTwo(num){
//     return num + 2;
// }
// function forEach(array, callback){
//     for(let i = 0; i < array.length; i++){
//         callback(array[i]);
//     }
// }
// function mapWith(array, callback){
//     const newArray = [];
//     const addToArray = (num) => newArray.push(callback(num));
//     forEach(array, addToArray){
//         return newArray;
//     }
// }
// const result = mapWith([1,2,3], addTwo);
// console.log(result);\

// const i let su block scope, var nije block scope

//lexical scope, ako ne nadje neku funkciju u lokalnoj memoriji, trazice u globalnoj posle
// const niz = [1,2,3,4];

// function addTwo(num){
//     return num + 2;
// }

// const noviNiz = niz.map(addTwo);
// const ultraNoviNiz = niz.filter((num) => num > 2); ///ovo je funkcija koja prima niz, num po num, i vraca nam svaki num koji je veci od 2
// const megaNoviNiz = niz.reduce((prev, curr) => {
//     if(curr>2){
//         prev.push(curr);
//     }
//     return prev;
// }[])
