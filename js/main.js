// start of document ready
$(document).ready(function(){	

	// object for each type of joke with arrays for joke strength
	var puns = {
		good: [
			'What do you call a pony with a sore throat? A little horse.',
			'Don\’t trust atoms... they make up everything.',
			'If prisoners could take their own mugshots, they\’d be called \"cellfies.\"',
			'I wouldn\’t buy anything with velcro... it\’s a total rip off.',
			'I\’m terrified of elevators. I\’m going to start taking steps to avoid them.',
			'What did the buffalo say to his son when he left for university? Bison.',
			'What did the ocean say to the shore? Nothing, it just waved.',
			'I\’m reading a book on the history of glue. I just can\’t seem to put it down.',
			'Why do so many people with laser hair want to get it removed?',
			'What did the officer molecule say to the suspect molecule? I\’ve got my ion you.'
		],
		bad: [
			'Whoever invented knock knock jokes should get a no bell prize.',
			'Why does a chicken coop only have two doors? Because if it had four, it would be a sedan',
			'Why did the scarecrow win an award? Because she was out standing in her field.',
			'A furniture store keeps calling me. But all I wanted was one night stand.',
			'Why don\’t skeletons ever go trick or treating? Because they have no body to go with.',
			'What do you get when you cross a snowman with a vampire? Frostbite.',
			'I bought shoes from a drug dealer once. I don\’t know what they were laced with, but I was tripping all day.',
			'Is this pool safe for diving? It deep ends.',
			'What did the pirate say on his 80th birthday? Aye matey!',
			'Two satellites decided to get married. The wedding wasn\’t much, but the reception was incredible.'
		],
		dad: [
			'What do you call a fake noodle? An impasta.',
			'Why do trees seems suspicious on sunny days? They\’re a bit shady.',
			'Wanna hear a joke about paper? Never mind, it\’s tearable.',
			'I used to hate facial hair, but then it grew on me.',
			'There\'s a new type of broom out. It\'s really sweeping the nation.',
			'I just watched a show about beavers. It was the best dam show I\’ve ever seen.',
			'Have you heard about the corduroy pillow? It\’s making all the headlines.',
			'Last night I dreamt I was a muffler. I woke up totally exhausted.',
			'Why do crabs never give to charity? Because they\’re shellfish.',
			'Why couldn’t the bicycle stand up by itself? It was two-tired.',
			'Why can’t you hear a pterodactyl going to the bathroom? Because the \"p\" is silent.'
		]
	};

	var tech = {
		good: [
			'!false… it\'s funny \'cause it\'s true.',
			'What is the object-oriented way to become wealthy? Inheritance.',
			'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol.',
			
		],
		bad: [
			'Why did 10 get paid less than \"10\"? There was workplace inequality',
			'Why was the developer unhappy at her job? She wanted arrays.',
			'Why was the function sad after a successful first call? He didn\’t get a callback.',
			'Why did the developer go broke? Because she used up all her cache.',
			'Why did the developers ground their daughter? She wasn\’t telling the truthy.'
		],
		dad: [
			'Have you heard of the band 1023MB? They haven\’t got a gig yet.',
			'The lumberjack loved his new computer... especially logging in.',
			'Why did the developer add body { padding-top: 1000px; } to her Facebook page? She wanted to keep a low profile.',
			'There are 10 types of people in the world: those who understand binary, and those who don\'t.',
			'I tried to install updates on my computer this morning, but it wouldn\'t work. After several attempts, I had that syncing feeling.'
		]
	};

	var bar = {
		good: [
			'A termite walks into a bar and asks, \"Is the bar tender here?\"',
			'A ham sandwich walks into a bar. The bartender says, \"Sorry, we don\'t serve food here.\"',
			'A fish walks into a bar. The bartender asks, \"What do you want?\" The fish croaks, \"Water.\"'
		],
		bad: [
			'A man walked into a bar with some asphalt on his arm. He said, \"Two beers please. One for me, and one for the road.\"',
			'A bear walks into a bar and says to the bartender, \"I\’ll have a whisky and......... soda.\" The bartender says, \"Why the big pause?\" \"Don\'t know,\" says the bear. \"I\’ve always had them.\"',
			'Two people were fighting at the bar. One threw a prawn cocktail. \"And that\’s just for starters\", they said.'
		],
		dad: [
			'Past, present and future walked into a bar... it was tense.',
			'Two people walk into a bar... the third one ducks.',
			'A grasshopper walks into a bar. The barkeeper looks at him and says, \"Did you know there\’s a drink named after you?\" \"Really?\" asked the grasshopper. \"There\’s a drink called Jeremy?\"'
		]
	};

	var food = {
		good: [
			'Where did you learn to make ice cream? Sundae school.',
			'Our wedding was so beautiful, even the cake was in tiers. ',
			'What did the grape do when it got stepped on? It let out a little wine.'
		],
		bad: [
			'Did you hear about the cheese factory that exploded in France? There was nothing left but de Brie.',
			'Did you hear about the restaurant on the moon? Great food. No atmosphere.',
			'Why did the coffee file a police report? It got mugged.',
			'Why did the can crusher quit her job? Because it was soda-pressing.'
		],
		dad: [
			'What do you call cheese that isn\’t yours? Nacho cheese.',
			'You heard the rumour going around about butter? Never mind, I shouldn\’t spread it.',
			'What do you call cheese that\’s all by itself? Provolone.',
			'I hate jokes about German sausages... they\’re just the wurst.',
			'What do you call a fake noodle? An impasta.'
		]
	};

	// end of arrays

	// function to return joke based on answers when form is submitted
	$('form').on('submit', function(evnt) {

		//to prevent page from reloading when submit button is clicked
		evnt.preventDefault();

		// storing the answer to jokeType question
		var answerType = $('input[name=jokeType]:checked').val();
		console.log(answerType);
	
		// storing the answer to jokeStrength question
		var answerStrength = $('input[name=jokeStrength]:checked').val();
		console.log(answerStrength);

		// variable with a value of a random joke that corresponds to the length of an array
		var getRandomJoke = function(jokeArray) {
			var arrayLength = jokeArray.length;
			var randomNumber = Math.floor(Math.random() * arrayLength);
			return jokeArray[randomNumber];
		}; // closes getRandomJoke variable

		// if & else if statements to store random joke in joke variable
		var joke = '';
		if ( answerType === 'puns' && answerStrength === 'good') {
			joke = getRandomJoke(puns.good);
		} else if ( answerType === 'puns' && answerStrength === 'bad') {
			joke = getRandomJoke(puns.bad);
		} else if ( answerType === 'puns' && answerStrength === 'dad') {
			joke = getRandomJoke(puns.dad);
		} else if ( answerType === 'tech' && answerStrength === 'good') {
			joke = getRandomJoke(tech.good);
		} else if ( answerType === 'tech' && answerStrength === 'bad') {
			joke = getRandomJoke(tech.bad);
		} else if ( answerType === 'tech' && answerStrength === 'dad') {
			joke = getRandomJoke(tech.dad);
		} else if ( answerType === 'bar' && answerStrength === 'good') {
			joke = getRandomJoke(bar.good);
		} else if ( answerType === 'bar' && answerStrength === 'bad') {
			joke = getRandomJoke(bar.bad);
		} else if ( answerType === 'bar' && answerStrength === 'dad') {
			joke = getRandomJoke(bar.dad);
		} else if ( answerType === 'food' && answerStrength === 'good') {
			joke = getRandomJoke(food.good);
		} else if ( answerType === 'food' && answerStrength === 'bad') {
			joke = getRandomJoke(food.bad);
		} else if ( answerType === 'food' && answerStrength === 'dad') {
			joke = getRandomJoke(food.dad);
		} else {
			alert('You didn\'t answer the questions. Please select the type of joke you\'d like.');
		}; 
		// end of if, else statements
		
		// creating a variable that holds the joke inside p tags & adds it to HTML
		var answerJoke = $('.dadJoke').html('<p>' + joke + '</p>');
		$('.dadJoke').append(answerJoke);

		// change text on submitJoke button & remove class on resetButton ONLY if questions are answered
		if ( answerType != undefined && answerStrength != undefined) {
			// change text on submitJoke button
			$('.submitJoke').val('Tell me another !');
			// remove class on resetButton so it appears below joke button
			$('.resetButton').removeClass('displayNone');
			// show the joke!
			$('.dadJoke').removeClass('hide');
			// hide the questions
			$('.question').addClass('hide');
			//add animate.css effect
			$('h1').addClass('animated shake')
			//removes animate class when animation ends using callback function
			$('h1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$(this).removeClass('animated shake');
			});	
		};
	}); // end of joke function

}); // end of document ready