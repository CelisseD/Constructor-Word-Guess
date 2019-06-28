// Letter.js: Contains a constructor, Letter. This constructor should be able to either display a secret character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

function Letter(value) {

    this.letter = value;
    this.guessed = false;

    this.toString = function(){
        
        // A boolean value that stores whether that letter has been guessed yet
        if(this.letter === " ") {
            this.guessed = true;
            return " ";
        }else{
            // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
            if (this.guessed === false) {
                return "_";
            }else{
                
                return this.letter;
            }
        }
    };

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guess = function(guess) {
        if (guess === this.letter) {
            this.guessed = true;
        }
    }

};

module.exports = Letter;
