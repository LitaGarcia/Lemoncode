//HEAD
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.


const persons = ['Ana', 'Paula', 'Mikel', 'Manuela'];

const head = (array) => {
    //añadir todas las posibles casuisticas futuras
    const [firstElement] = array;
    console.log(firstElement);
    return firstElement
}; 

head(persons);


//TAIL
//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const numbers = ['1', '2', '3'];

const tail = (arrayToExcludeFirstElement) => {
    
const [, ...copiedArrayWithouthFirstElement] = arrayToExcludeFirstElement;

console.log(copiedArrayWithouthFirstElement);

return copiedArrayWithouthFirstElement

}

tail(numbers)

//INIT 
//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.


const elementsArray = ['first element', 'second element', 'last element'];

const init = (arr) => {

    const newArray = arr.slice(0, -1);

    console.log(newArray);

    return newArray

}

init(elementsArray)


//LAST
//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.


const last = (arr) => {
    const lastElement = arr.slice(-1)[0]
    console.log(lastElement);
}

last(elementsArray)

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

//2.Opcional
//Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).


const concatMultiplesArrays = (...array) => {
    const concatArrays = [...array].flat();
    console.log(concatArrays);
}

concatMultiplesArrays(numbers1, numbers2, numbers3)


// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:


const student = {
    name: 'Manuela',
    age: '29'
}

function clone(source) {
  const clonedSource = {...student}
  console.log(clonedSource);
}

clone(student)

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
   const newObject = {...b, ...a}
   console.log(newObject);
}

merge(a,b)