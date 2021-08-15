console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
 let partsNeeded = 40; 
//    & console.log the variable
            // '1. Number of partsNeeded:'
console.log( partsNeeded );

// 2. Create a variable call 'supplyChanges' set it to an array containing
let supplyChanges = [ 3, 5, -6, 0, 7, 11 ];
//    the following numbers: 3, 5, -6, 0, 7, 11
            // 2. Array of supplyChanges:
console.log( 'supplyChanges', supplyChanges );

// 3. Console log the value of the second item in the 'supplyChanges' array
            // 3. Second supplyChange is:
console.log( supplyChanges[1] );

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
let removedItem = supplyChanges.pop( '11' );{
    console.log( 'removed item:', removedItem );
}
//    array & console.log the value removed.


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
supplyChanges.push( 25 );{
console.log( 'supplyChanges', supplyChanges );
}
            // 5. Adding 25 to supplyChanges.
// console.log( '25' );

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
let x = supplyChanges;
for( let i=0; i<x.length; i++){
    console.log( 'supplyChanges', x[i] );
    if( x[i] === 0 ){
        console.log( 'no change') ;
    }
    if( x[i] > 0 ){
        console.log( 'added', x[i], 'parts' );
    }
    if( x[i] < 0  ){
        console.log( 'Removed', x[i], 'parts')
    }
}
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');


// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
