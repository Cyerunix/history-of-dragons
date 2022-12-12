//fact generator
function generatebutton(){
		let fact = showfact();
		document.getElementById("factcontainer").innerHTML = ""+fact;
	}

function showfact(){
	let facts = ['Baby dragons are called "dragonets"!','Viking longships were called "drakkar" because of the dragon head on the front of the ship.','In Chinese and Mesopotamian mythology, leaders were the descendants of dragons.','The greek dragon "pyrausta" looks like an insect.','Stories about dragons evolved independently in China and Europe.','Japanese dragons have three toes, and Korean dragons have four.','Chinese dragons can have three, four, or five toes.','In China, the opposite of a dragon is a worm!','Japanese dragons could be appeased with precious metals.','In pop culture, Smaug is a famous Wyvern, Haku is a famous lung dragon, and Maleficent is a famous four-legged dragon.','The fifth year of the Chinese zodiac is the year of the dragon.','Some famous dragonslayers are St. George, Beowulf, Heracles, and Sigurd','China is the country with the most locations named after dragons.','One possible origin for dragons breathing fire is spitting cobras.','Komodo dragons are the animals considered to be most like dragons.'];
	let index = Math.floor(Math.random() * 15)
	return facts[index];
}
