const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () =>{
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2);
    //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test('One dolar should be 372.75 yen ', function(){
    const { fromDollarToYen} = require('./app.js')

    expect(fromDollarToYen(3.5)).toBe(372.75);

})

test('One yen should be 559.3000000000001', function(){
    const {fromYenToPound} = require('./app.js')

    expect(fromYenToPound(3.5)).toBe(559.3000000000001);

})