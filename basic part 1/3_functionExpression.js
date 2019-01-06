/**
 * Function expression :::::
 * 
 * make function expression
 * pass function as parameter
 */

const greet = (funct) => {
    console.log(`Hello folks!!!`);
    funct()
}

const adios = () => {
    console.log(`Bye Folks!!!`);
}

greet(adios);