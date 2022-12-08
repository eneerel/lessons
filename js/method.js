
let firstLet = ( massive ) => {
    let firstLetter = prompt ( '... ' );
    i = 0;
    sireeen = [];
    while ( i < massive.length) {
        if ( massive[i][0].charAt(0).toUpperCase() == firstLetter.toUpperCase() ) {
            sireeen.push(massive[i]) ;
        } 
        i++
    }
    return sireeen;
}
carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];
console.log(firstLet( carBrands ));

// let country = (massive) => {
//     let b =prompt ("...");
//     i=1;
    
// }