/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Retrieve a random quote from the quotes array ( in quotes.js) by generating a random number and using that as the index to return
function getRandomQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randomNumber];
}
//Creating and building a new string that contains minimally the quote and the source of the quote
function printQuote() {
	let randomQuoteString = getRandomQuote();
	let htmlString = '';
	htmlString += `<p class="quote"> ${randomQuoteString.quote} </p>`;
	htmlString += `<p class="source"> ${randomQuoteString.source}`;

	//Checking if there is a citation and year listed for the current quote and adding it to the string if there is
	if (randomQuoteString.citation !== '') {
		htmlString += `<span class="citation"> ${randomQuoteString.citation}</span>`;
	}

	if (randomQuoteString.year !== '') {
		htmlString += `<span class="year"> ${randomQuoteString.year}</span>`;
	}

	if (randomQuoteString.tags !== '') {
		htmlString += `<p class="tags"> ${randomQuoteString.tags}</p>`;
	}
	htmlString += `</p>`;

	//Grabbing the quote-box div and replacing the html with the formatted quote string
	document.getElementById('quote-box').innerHTML = htmlString;

	//function to generate a random number and build a string to change the background color in rgb format
	function randomRGB() {
		function randNumf() {
			return Math.floor(Math.random() * 257);
		}
		let rgbString = `rgb(${randNumf()},${randNumf()},${randNumf()})`;
		document.body.style.background = `${rgbString}`;
	}
	randomRGB();
}

setInterval(printQuote, 20000);
//When clicking 'Show another quote' button, this calls the printQuote function
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
