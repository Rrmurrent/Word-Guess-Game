$(document).ready(function() {

	// Pick a category and secret word
    var categories = [
        ["cat", "dog", "caterpillar", "deer", "butterfly", "cricket", "eagle", "zebra", "monkey", "horse"],
        ["pikachu", "snorlax", "mewtwo", "eevee", "celebi", "ditto", "charizard", "mew", "bulbasaur"],
        ["france", "mexico", "brazil", "italy", "canada", "kazakhstan", "china", "hungary", "iraq"]
    ];
    var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];
    var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();
    console.log(randomWord);
    var randomWordArray = randomWord.split("");


    // Instructions
    // $('.instructions').text("Welcome to the game of Hangman! Guess the correct word in 7 guesses or less to win!");

    // Print category name
    if ($.inArray("cat", randomCategoryArray) > -1) {
        $(".category").text("Category is animals");
    } else if ($.inArray("pikachu", randomCategoryArray) > -1) {
        $(".category").text("Category is Pokemon");
    } else {
        $(".category").text("Category is countries");
    }


	// Draw squares for secret word & hide letters
	for(var i = 0; i < randomWord.length; i++) {
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
        $(".letter").css("color", "black");
    }

	// Button click function
    var wrongGuesses = 0;
    $("button").on("click", function(){
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        // Check if clicked letter is in secret word
        var userGuess = $(this).text();
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
                matchFound = true;
            }
        }

        //Check for winner
        var goodGuesses = [];
        $(".letter").each(function( index ) {
            if ( $(this).hasClass("winner") ) {
                goodGuesses.push(index);
                if (goodGuesses.length === randomWordArray.length) {
                    $("#container").hide();
                    $("button").prop("disabled", "true");
                    $(".category").text("Great job you guessed the secret word!");
                    $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
                }
            }
        });

        // If no match, increase count and add appropriate image
        if (matchFound === false) {
            wrongGuesses += 1;
            $("#hangman").attr("src", "img/" + wrongGuesses + ".png");
            $(".category").text("Your total number of wrong guesses is  " + wrongGuesses);
        }

        // If wrong guesses gets to 7 exit the game
        if (wrongGuesses === 7) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("Sorry you lost! The secret word was " + randomWord);
            $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
        }

        // Play again button
        $(".play-again").on("click", function(){
            location.reload();
        });

    }); // End button click

}); // End document.ready