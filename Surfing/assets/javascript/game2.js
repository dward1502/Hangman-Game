//Global arrays
//============================================
//used to record how many times a letter was pressed
var doubleLetter = ['a','b','c','d','e','f',
					'g','h','i','j','k','l',
					'm','n','o','p','q','r',
					's','t','u','v','w','x',
					'y','z',];
//array that contains the words
var wordBank =['sunset','mavericks','pipeline','jaws',];
// holds chosenword
var chosenword = "";
//holds letters in word
var lettersInWord = [];
//holds number of blanks in word
var numBlanks = 0;
//holds blanks and successful guesses 
var underScores =[];
//holds wrong guesses
var wrongLetters =[];
//Counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 10;
var rightGuess = 0;
//Functions
//=======================================
function reset()
{
	//chooses random word from wordBank
	chosenword = wordBank[Math.floor(Math.random() * wordBank.length)]
	console.log(chosenword);
	//splits choosen word into individual letters
	//lettersInWord = chosenword.split('');
	// get the number of blanks
	//numBlanks = lettersInWord.length;
	numBlanks = chosenword.length;
	//RESET
	//==============
	
	rightGuess = 0;
	guessesLeft = 9;
	wrongLetters =[];
	underScores =[];
	/*doubleLetter = ['a','b','c','d','e','f',
					'g','h','i','j','k','l',
					'm','n','o','p','q','r',
					's','t','u','v','w','x',
					'y','z'];*/
	test = false;
	startGame();
}
function startGame()
{
	//chooses random word from wordBank
	chosenword = wordBank[Math.floor(Math.random() * wordBank.length)]
	console.log(chosenword);
	//splits choosen word into individual letters
	//lettersInWord = chosenword.split('');
	// get the number of blanks
	//numBlanks = lettersInWord.length;
	numBlanks =  chosenword.length;

	//RESET
	//==============
	//letterGuessed = 0;
	rightGuess = 0;
	guessesLeft = 9;
	wrongLetters =[];
	underScores =[];
	/*doubleLetter = ['a','b','c','d','e','f',
					'g','h','i','j','k','l',
					'm','n','o','p','q','r',
					's','t','u','v','w','x',
					'y','z'];*/
	//populate the blanks
	for(var i = 0; i< numBlanks; i++){
		underScores.push('_');
		
	}
	//HTML changes
		document.getElementById('word-blanks').innerHTML = underScores.join(' ');
		document.getElementById('guessRemain').innerHTML = guessesLeft;
		document.getElementById('wins').innerHTML = winCount;
		//document.getElementById('loss').innerHTML = loseCount;
		document.getElementById('wrongGuess').innerHTML = wrongLetters;
}
function compareLetters(userGuess)
{
	console.log('WORKING');
	//if user key exist in chosen word then perform this function
	if(chosenword.indexOf(userGuess) > -1){
		//Loop depending on amount of blanks
		for(var i = 0; i < numBlanks; i++){
			//fills in correct index with userkey
			if(lettersInWord[i] === userGuess){
				rightGuess++;
				underScores[i] === userGuess;
				document.getElementById('wordGuess').innerHTML = underScores.join(' ');
			}
		}
		//debug
		console.log(underScores);
	}
	//wrong keys
	else{
		wrongLetters.push(userGuess);
		guessesLeft--;
		//HTML changes
		document.getElementById('guessRemain').innerHTML = guessesLeft;
		document.getElementById('wrongGuess').innerHTML = wrongLetters;
		//debug
		console.log('Wrong Letters = ' + wrongLetters);
		console.log('Guesses Left are ' + guessesLeft);
	}
}
function winLose()
{
	//when number of blanks are filled in you win
	if(rightGuess === numBlanks){
		//counts win
		winCount++;
		//test
		
		//HTML changes
		document.getElementById('wins').innerHTML = winCount;
		alert('You win');
		reset();
	}
	//when # of guesses reach 0 you lose
	else if( guessesLeft === 0){
		//counts loss
		loseCount--;
		//HTML changes
		document.getElementById('losses').innerHTML = loseCount;
		alert('You lose');
		reset();
	}
}//MAIN
//==================================
startGame();

document.onkeyup = function(event)
{
	test = true;
	 userGuess = event.key;
	console.log(userGuess);

	if(chosenword.indexOf(userGuess) > -1)
	{
		for(var i = 0; i < chosenword.length; i ++)
		{
			if(chosenword[i] === userGuess)
			{
				underScores[i] = userGuess;
				document.getElementById('word-blanks').innerHTML = underScores.join(' ');
					console.log(underScores);
					compareLetters(userGuess);
					winLose();

			}
		}
	}
	else
		{
			wrongLetter.push(userGuess);
			guessesLeft--;
			//send guessesLeft to HTML
			document.getElementById('guessRemain').innerHTML = guessesLeft;
			document.getElementById('wrongGuess').innerHTML = wrongLetter;
			console.log("Guess left" + guessesLeft);	
			winLose();
				
		}
	/*for(var i = 0; i < doubleLetter.length; i++)
	{
		if(userGuess === doubleLetter[i] && test === true)
		{
			var spliceDword = doubleLetter.splice(i,1);
			//debug
			console.log('Double letter is = ' + doubleLetter[i]);
			console.log('Spliced word is = ' + spliceDword);
			
			compareLetters(userGuess);
			winLose();
		}
	}*/
}
