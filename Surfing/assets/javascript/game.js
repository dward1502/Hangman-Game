	//Globabl Variables
	//array that includes the hangman words
	var words = ['pipeline','sunset','mavericks','windnsea','teahupoo','cloudbreak','swamis','trestles']
	var	wins = 0;
	var	loss = 0;
	var	guessesLeft = 10;
	var	wrongLetter =[];
	var rightLetter =[];
	var	underScores =[];
	var	userGuesses =[];
	var	randWord;
	var winCounter = 0;

	//Function
	//===========================


	//pick random word using math.random function
	function startGame()
	{
		randWord = words[Math.floor(Math.random()* words.length)]
		
		console.log(randWord);
		underScores = [];

		for(var i = 0; i < randWord.length; i ++){
				underScores.push('_');
		}
		//printing underscores to screen with blanks spaces in between		
		document.getElementById('word-blanks').innerHTML = underScores.join(" ");
		document.getElementById('guessRemain').innerHTML = guessesLeft;

		//reset
		wrongLetter =[];
		guessesLeft =10;
				
	}
	function reset(){
		underScores = [];	
		wrongLetter =[];
		guessesLeft = 10;
		winCounter = 0;
		
	}
	function checkLetter(){
		if(wrongLetter = userGuess){

		}
	}
	function winLose()
	{
		if(winCounter === randWord.length){
			alert('Winner');
			wins ++;
			document.getElementById('wins').innerHTML = wins;
			reset();

		}else if(guessesLeft === 0){
			alert('You Lose');
			loss ++;
			reset();
		}
	}
	//userInput
	document.onkeyup = function(event)
	{
		userGuess = event.key;
	//	console.log(userGuess);

		//checks if user word matches guesses
		if(randWord.indexOf(userGuess) > -1)
		{
			for(var i = 0; i < randWord.length; i++)
			{
				if(randWord[i] === userGuess)
				{
					underScores[i] = userGuess;
					document.getElementById('word-blanks').innerHTML = underScores.join(' ');
					console.log(underScores);
					winCounter++;
					console.log(winCounter);
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
	}

	


	//Main
	//============================

	