let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if(Number(guests <= 50){
        cost = 4000;
    }else if (Number(guests > 50 && guests<= 100){
        cost = 10000;
    }else if (Number(guests > 200){
        cost = 20000;
    }




    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
