$(document).ready(function() {
    addListener();
});
function addListener() {
    $('.button').click(function() {
        console.log('Bananer är goda');

        //ger ett värde på diceAmount beroende på vad getDiceAmount returnerar
        var diceAmount = getDiceAmount();
        var rollDice = getRollDice(diceAmount);
        console.log(diceAmount);
        //ta bort gamla tärningar ersätt med nya
        $('.dice').remove();
        //lägger till nya tärningarna
        $.each(rollDice, function(index, value) {
            $('#printDice').append('<div class=dice>' + value + '</div>')
        });

    });
}
;
//Tittar vilket value klassen .radio hade och skickar det till functionen
function getDiceAmount() {
    return $('.radio:checked').val();
}
;

function getRollDice(diceAmount) {

    var sum = 0;
    //array innehåller summan och värdena för varje tärning
    var rolledDice = [];
    //summan = 0
    rolledDice[0] = 0;
    //för varje antal tärning ska den loopa
    for (var i = 0; i < diceAmount; i++) {
        console.log("Loop is in the house");
        //randomisera för antalet tärningar, +1 för att bli mellan 1-6
        var rand = Math.floor((Math.random() * 6) + 1);
        console.log('value: ' + rand);
        //Skriver ut nya summan efter att ha rullat
        rolledDice[0] = rolledDice[0] + rand;
        //lägga till i arrayen
        rolledDice.push(rand);
    }
    ;
    console.log("Totalsumma + Summa för tärningar rullade: " + rolledDice);
    return rolledDice;
}
;