//HEAD
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.


const persons = ['Ana', 'Paula', 'Mikel', 'Manuela'];

const head = (array) => {
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