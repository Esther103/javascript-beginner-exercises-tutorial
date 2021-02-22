var total = prompt('How many km are left to go?');

// Your code below:
if (Number(total)> 100){

console.log (" Are there yet?");
}else if ( Number(total) > 50) {
    console.log ("We'll be there in 5 minutes");
}else if( Number( total) <= 50){
    console.log("I'm parking, I see you right now" );
}