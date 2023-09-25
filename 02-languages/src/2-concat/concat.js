//2.CONCAT
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const numbers1 =['1', '2', '3']
const numbers2 = ['4', '5', '6']
const numbers3 = ['7','8','9']

const concat = (a, b) => {

    const concatArrays = [...a, ...b]
    console.log(concatArrays);
    return concatArrays

}

concat(numbers1, numbers2)

//Opcional
//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).


const concatMultiplesArrays = (...arrays) => {
    const concatArrays = [...arrays].flat();
    console.log(concatArrays);

}

concatMultiplesArrays(numbers1, numbers2, numbers3)