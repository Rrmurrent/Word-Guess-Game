//List of Possible Answers
var wordPool = ["dragon","unicorn", "mermaid","centaur","troll","fairy"];
var imgLink = ["Dragon.jpg","unicorn.jpg","mermaid.jpg","centaur.jpg","troll.jpg","fairy.jpg"]
//Randomized Selection
var selector = Math.floor((Math.random() * wordPool.length));
var word = wordPool[selector];
var linkImg = imgLink[selector];
var wordLength = word.length;
var lives = 5;
var tally = 0;
var rejectedLetters = [];
// var resetgame = 
// var closing= 

console.log(word);
console.log(wordLength);
console.log(linkImg);
console.log(linkImg[selector]);

var fxn = function (tally, lives){    
    while ( tally === wordLength){
        console.log("tally = " + tally + "!")
        tally = 0;
        lives = 5;
        var display = document.getElementById("display");
        var pic = document.createElement("IMG");
        var result = document.createElement("P")
        var win = document.createTextNode( "You Win!" );
        result.appendChild(win)
        result.id = "ResultText";
        // pic.id = "winImg";
        pic.setAttribute("src", imgLink);
        // pic.setAttribute("width","50%");
        pic.setAttribute("src", linkImg);
        // display.appendChild(result);
        display.appendChild(pic);
        return tally;
    }
    
    // while
     if ( lives < 1 ){
        // var endNote = Boolean:"Would you like to play again?"];
            // if boolean === True{}
        lives = 5;
        tally = 0;
        // var result = document.createElement("P");
        // var closing = document.createTextNode("Would you like to play again?");
        // var lose = document.createTextNode("Sorry, You Lose. Better Luck Next Time!");
        result.appendChild(lose);
        result.id = "ResultText"
        // getElementById = "ResultText"
        document.write
        greeting ="Sorry, You Lose. Better Luck Next Time!"
        return lives;
        
        }

        
    };

// };

//for loop -- creating letterBox
for( i = 0 ; i < wordLength; i++){
    var gDiv = document.getElementById("gameDiv");
    // var gDiv = document.getElementById("mainDiv");

    var letterBox = document.createElement("div");
    var placeHolder = document.createTextNode("_");
    // shows the letters as they are guessed
    letterBox.id = "LB" + [i];
    // separate letter boxes created
    letterBox.classList.add("letterBoxes");
    // makes letter boxes visible with underscore placeholders utilized from var stated above
    letterBox.appendChild(placeHolder);
    gDiv.appendChild(letterBox);
};

//Keypress Listener
document.addEventListener("keydown", function(e){
    console.log("you pressed: " + e.key);
    var match = false;
    //for loop
    for( i = 0; i < wordLength; i++){
        var mark = word.charAt([i]);
        var shortWordLength = wordLength - 1;
        var key = e.key;
        console.log(mark);

            if ( ([i] < shortWordLength) && (e.key === mark) ){
                var transform = document.getElementById("LB" + [i]);
                match = true;
                tally++;
                transform.innerHTML = mark;
                console.log("looks great!");
                fxn(tally, lives);
            }

            else if ( ( [i] < shortWordLength) && (e.key != mark || match == false) ){
                console.log("Nope. Keep looking.");
                fxn(tally, lives);
            }

            else if ( ( [i] == shortWordLength) && (e.key === mark) ){
                var transform = document.getElementById("LB" + [i]);
                match = true;
                tally++;
                transform.innerHTML = mark;
                console.log("looks great(finally)!");
                fxn(tally, lives);
                return match;
            }

            else if( ([i] == shortWordLength) && (match === false) ) {
                var sDiv = document.getElementById("tries");
                lives--;
                var triesMessage = "Tries left: " + lives;
                var rejLetters= document.getElementById("rejects");
                var RLBox = document.createElement("div");
                sDiv.innerHTML = triesMessage;
                rejectedLetters.push(key)
                RLBox.innerHTML= e.key;
                RLBox.classList.add("RLetterBoxes");
                rejLetters.appendChild(RLBox);
                console.log("no match found");
                console.log(rejectedLetters)
                fxn(tally, lives);
                break;
            }
            // var lose = function(){
                // alert("You Lose");
                // document.location.reload()
           //inside forloop 
        }
        //outside forloop
    
});

console.log("tally = " + tally);
// function.resetgame{}


/*  1)losing conditions not triggering
    2)no duplicates in reject letter array
*/