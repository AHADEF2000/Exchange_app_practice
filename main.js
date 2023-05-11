let theAmount = document.querySelector("#amount-input");
let btn = document.querySelector('button');
let egpSymbol = document.querySelector('.egp-symbol');
let qarSymbol = document.querySelector('.qar-symbol');


fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0e2bda79dd2848fabf4dc2cadbc9c7b1").then(result => {
    let data = result.json();
    return data;
}).then(currency => {
    let egpRate = currency.rates['EGP']
    let qarRate = currency.rates['QAR']
    // console.log(typeof qarRate)   // In the console the type will be a string so, we need to convert it to floating number
    let egpRateSpan = document.querySelector('.egp-rate');
    let qarRateSpan = document.querySelector('.qar-rate');

    egpRateSpan.innerHTML = parseFloat(egpRate).toFixed(2);  // parseFloat to change the from string to floating number 
    qarRateSpan.innerHTML = parseFloat(qarRate).toFixed(2);
});

btn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0e2bda79dd2848fabf4dc2cadbc9c7b1").then(result => {
        let data = result.json();
        return data;
    }).then(currency => {

        let theEgp = document.querySelector('.egp span');
        let theQar = document.querySelector('.qar span');
        theEgp.innerText = (theAmount.value * currency.rates["EGP"]).toFixed(2);
        // we can use innerText to update the value in the span as we did theEgp.innerHTML = .....
        theQar.innerHTML = (theAmount.value * currency.rates["QAR"]).toFixed(2);
        // we can use innerHTML to update the value in the span as we did theQar.innerHTML = .....
        // These lines update the innerHTML property of the selected HTML elements with the currency exchange rates
    });

    qarSymbol.classList.add('Finised-qar')
    egpSymbol.classList.add('Finised-egp')
});

