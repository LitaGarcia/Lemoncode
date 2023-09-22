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