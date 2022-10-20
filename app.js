const rating_cards = [$(".ratings span")];
var randomInts = [];
var numArray = [];

function randomIntFromInterval(min, max) {
        let numCheck = true;
        while (numCheck) {
                const randomInt = Math.floor(Math.random() * (max - min + 1) + min);
                if (randomInts.includes(randomInt)) {
                        numCheck = true;
                } else {
                        numCheck = false;
                        randomInts.push(randomInt)        
                        return randomInt;
                }
        }
    };

    $(".submit_btn").click(function () {
        randomInts = [];
        numArray = rating_cards[0];
        Array.from(numArray).forEach((item, idx, array) => {
                const rating_card = array[idx];
                const randomInt = randomIntFromInterval(1,60);
                $('#' + rating_card.id).text(randomInt);
        });  
});

