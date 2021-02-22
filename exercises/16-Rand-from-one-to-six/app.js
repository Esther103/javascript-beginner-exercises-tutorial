function getRandomInt()
{
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    //var randomNumber = Math.floor(Math.random() * 10);
	return randomNumber;
}
console.log(getRandomInt());