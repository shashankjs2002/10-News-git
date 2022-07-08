let arr = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ];

// "a < b OR (c == d AND e != f)"\
let str = ""

const getAns = (array) => {
    if(typeof(array) === "object"){
    let temp = array[0];
    array[0] = array[1];
    array[1] = temp;
    // console.log(array)
    for (let index = 0; index < array.length; index++) {
         getAns(array[index])
        }

    }
    // console.log(array)
    
}

const printAns = (array) => {
        // await getAns(array)
        // console.log(array)
        for (let index = 0; index < array.length; index++) {
        if(typeof(array[index]) === "object"){
            printAns(array[index])
        } else {
            
            // console.log(array[index])
            str= str.concat( array[index]+ " ")
        }
     }

 
}

getAns(arr)
// console.log(arr)
printAns(arr)

console.log(str)