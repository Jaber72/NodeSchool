function convertToChange (payment) {
   
console.log("In convert to change");
    var quarter = 25;
    var dime = 10;
    var nickel = 5;
    var penny = 1;

    var coinMix = [quarter, dime, nickel, penny];
    var dispenedCoins = [];
    var dispenedCoinsCount = 0;
    var coinMix = [quarter, dime, nickel, penny];
        
    for(var coinIndex=0; coinIndex <= 3; coinIndex++) {
            
            while (payment/coinMix[coinIndex] >= 1) {
                console.log("B4 rpc doit payment=" + payment + "\t\tcoinMix[i]=" + coinMix[coinIndex] );
                payment-= coinMix[coinIndex];
                console.log("af rcp doit payment=" + payment + "\t\tcoinMix[i]=" + coinMix[coinIndex] );
                dispenedCoins.push(coinMix[coinIndex]);
                console.log("dispenedCoinsCount" + dispenedCoinsCount);
            }             

            for(var i=0; i<dispenedCoins.length ; i++ ){


            }
        
    }

    for(var i=0; i < dispenedCoins.length ; i++) {
        if(dispenedCoins[i] == 1) {
            dispenedCoins[i] = 'p';
        }

        if(dispenedCoins[i] == 5) {
            dispenedCoins[i] = 'n';
        }

        if(dispenedCoins[i] == 10) {
            dispenedCoins[i] = 'd';
        }

        if(dispenedCoins[i] == 25) {
            dispenedCoins[i] = 'q';
        }
    }
        
    

    console.log(dispenedCoins);
    return dispenedCoins;
}
console.log("Starting");
var myChange1 = convertToChange(34);
console.log(myChange1);
var myChange2 = convertToChange(99);
console.log(myChange2);