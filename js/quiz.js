function getans(){
	const anslist = [];
	let ans1 = document.getElementById('1c').checked;
	anslist.push(ans1);
	let ans2 = document.getElementById('2b').checked;
	anslist.push(ans2);
	let ans3 = document.getElementById('3c').checked;
	anslist.push(ans3);
	let ans4 = document.getElementById('4d').checked;
	anslist.push(ans4);
	let ans5 = document.getElementById('5b').checked;
	anslist.push(ans5);
	let ans6 = document.getElementById('6c').checked;
	anslist.push(ans6);
	let ans7 = document.getElementById('7a').checked;
	anslist.push(ans7);
	let ans8 = document.getElementById('8c').checked;
	anslist.push(ans8);
	let ans9 = document.getElementById('9b').checked;
	anslist.push(ans9);
	let ans10 = document.getElementById('10d').checked;
	anslist.push(ans10);
	let score = 0;
	for(let i = 0; i < 10; i++){
		if(anslist[i] == true){
			score+=1;
		}
	}
	document.getElementById("quizresult").innerHTML = "Score: "+score + " out of 10";

}

function uncheck(){
	let ans1a = document.getElementById('1a').checked;
	let ans1b = document.getElementById('1b').checked;
	let ans1c = document.getElementById('1c').checked;
	let ans1d = document.getElementById('1d').checked;
	let ans2a = document.getElementById('2a').checked;
	let ans2b = document.getElementById('2b').checked;
	let ans2c = document.getElementById('2c').checked;
	let ans2d = document.getElementById('2d').checked;
	let ans3a = document.getElementById('3a').checked;
	let ans3b = document.getElementById('3b').checked;
	let ans3c = document.getElementById('3c').checked;
	let ans3d = document.getElementById('3d').checked;
	let ans4a = document.getElementById('4a').checked;
	let ans4b = document.getElementById('4b').checked;
	let ans4c = document.getElementById('4c').checked;
	let ans4d = document.getElementById('4d').checked;
	let ans5a = document.getElementById('5a').checked;
	let ans5b = document.getElementById('5b').checked;
	let ans5c = document.getElementById('5c').checked;
	let ans5d = document.getElementById('5d').checked;
	let ans6a = document.getElementById('6a').checked;
	let ans6b = document.getElementById('6b').checked;
	let ans6c = document.getElementById('6c').checked;
	let ans6d = document.getElementById('6d').checked;
	let ans7a = document.getElementById('7a').checked;
	let ans7b = document.getElementById('7b').checked;
	let ans7c = document.getElementById('7c').checked;
	let ans7d = document.getElementById('7d').checked;
	let ans8a = document.getElementById('8a').checked;
	let ans8b = document.getElementById('8b').checked;
	let ans8c = document.getElementById('8c').checked;
	let ans8d = document.getElementById('8d').checked;
	let ans9a = document.getElementById('9a').checked;
	let ans9b = document.getElementById('9b').checked;
	let ans9c = document.getElementById('9c').checked;
	let ans9d = document.getElementById('9d').checked;
	let ans10a = document.getElementById('10a').checked;
	let ans10b = document.getElementById('10b').checked;
	let ans10c = document.getElementById('10c').checked;
	let ans10d = document.getElementById('10d').checked;
	if(ans1a == true){
		document.getElementById("1a").checked = true;
		document.getElementById("1b").checked = false;
		document.getElementById("1c").checked = false;
		document.getElementById("1d").checked = false;
	}
	if(ans1b == true){
		document.getElementById("1a").checked = false;
		document.getElementById("1b").checked = true;
		document.getElementById("1c").checked = false;
		document.getElementById("1d").checked = false;
	}
	if(ans1c == true){
		document.getElementById("1a").checked = false;
		document.getElementById("1b").checked = false;
		document.getElementById("1c").checked = true;
		document.getElementById("1d").checked = false;
	}
	if(ans1d == true){
		document.getElementById("1a").checked = false;
		document.getElementById("1b").checked = false;
		document.getElementById("1c").checked = false;
		document.getElementById("1d").checked = true;
	}

	if(ans2a == true){
		document.getElementById("2a").checked = true;
		document.getElementById("2b").checked = false;
		document.getElementById("2c").checked = false;
		document.getElementById("2d").checked = false;
	}
	if(ans2b == true){
		document.getElementById("2a").checked = false;
		document.getElementById("2b").checked = true;
		document.getElementById("2c").checked = false;
		document.getElementById("2d").checked = false;
	}
	if(ans2c == true){
		document.getElementById("2a").checked = false;
		document.getElementById("2b").checked = false;
		document.getElementById("2c").checked = true;
		document.getElementById("2d").checked = false;
	}
	if(ans2d == true){
		document.getElementById("2a").checked = false;
		document.getElementById("2b").checked = false;
		document.getElementById("2c").checked = false;
		document.getElementById("2d").checked = true;
	}


	if(ans3a == true){
		document.getElementById("3a").checked = true;
		document.getElementById("3b").checked = false;
		document.getElementById("3c").checked = false;
		document.getElementById("3d").checked = false;
	}
	if(ans3b == true){
		document.getElementById("3a").checked = false;
		document.getElementById("3b").checked = true;
		document.getElementById("3c").checked = false;
		document.getElementById("3d").checked = false;
	}
	if(ans3c == true){
		document.getElementById("3a").checked = false;
		document.getElementById("3b").checked = false;
		document.getElementById("3c").checked = true;
		document.getElementById("3d").checked = false;
	}
	if(ans3d == true){
		document.getElementById("3a").checked = false;
		document.getElementById("3b").checked = false;
		document.getElementById("3c").checked = false;
		document.getElementById("3d").checked = true;
	}


	if(ans4a == true){
		document.getElementById("4a").checked = true;
		document.getElementById("4b").checked = false;
		document.getElementById("4c").checked = false;
		document.getElementById("4d").checked = false;
	}
	if(ans4b == true){
		document.getElementById("4a").checked = false;
		document.getElementById("4b").checked = true;
		document.getElementById("4c").checked = false;
		document.getElementById("4d").checked = false;
	}
	if(ans4c == true){
		document.getElementById("4a").checked = false;
		document.getElementById("4b").checked = false;
		document.getElementById("4c").checked = true;
		document.getElementById("4d").checked = false;
	}
	if(ans4d == true){
		document.getElementById("4a").checked = false;
		document.getElementById("4b").checked = false;
		document.getElementById("4c").checked = false;
		document.getElementById("4d").checked = true;
	}


	if(ans5a == true){
		document.getElementById("5a").checked = true;
		document.getElementById("5b").checked = false;
		document.getElementById("5c").checked = false;
		document.getElementById("5d").checked = false;
	}
	if(ans5b == true){
		document.getElementById("5a").checked = false;
		document.getElementById("5b").checked = true;
		document.getElementById("5c").checked = false;
		document.getElementById("5d").checked = false;
	}
	if(ans5c == true){
		document.getElementById("5a").checked = false;
		document.getElementById("5b").checked = false;
		document.getElementById("5c").checked = true;
		document.getElementById("5d").checked = false;
	}
	if(ans5d == true){
		document.getElementById("5a").checked = false;
		document.getElementById("5b").checked = false;
		document.getElementById("5c").checked = false;
		document.getElementById("5d").checked = true;
	}


	if(ans6a == true){
		document.getElementById("6a").checked = true;
		document.getElementById("6b").checked = false;
		document.getElementById("6c").checked = false;
		document.getElementById("6d").checked = false;
	}
	if(ans6b == true){
		document.getElementById("6a").checked = false;
		document.getElementById("6b").checked = true;
		document.getElementById("6c").checked = false;
		document.getElementById("6d").checked = false;
	}
	if(ans6c == true){
		document.getElementById("6a").checked = false;
		document.getElementById("6b").checked = false;
		document.getElementById("6c").checked = true;
		document.getElementById("6d").checked = false;
	}
	if(ans6d == true){
		document.getElementById("6a").checked = false;
		document.getElementById("6b").checked = false;
		document.getElementById("6c").checked = false;
		document.getElementById("6d").checked = true;
	}


	if(ans7a == true){
		document.getElementById("7a").checked = true;
		document.getElementById("7b").checked = false;
		document.getElementById("7c").checked = false;
		document.getElementById("7d").checked = false;
	}
	if(ans7b == true){
		document.getElementById("7a").checked = false;
		document.getElementById("7b").checked = true;
		document.getElementById("7c").checked = false;
		document.getElementById("7d").checked = false;
	}
	if(ans7c == true){
		document.getElementById("7a").checked = false;
		document.getElementById("7b").checked = false;
		document.getElementById("7c").checked = true;
		document.getElementById("7d").checked = false;
	}
	if(ans7d == true){
		document.getElementById("7a").checked = false;
		document.getElementById("7b").checked = false;
		document.getElementById("7c").checked = false;
		document.getElementById("7d").checked = true;
	}


	if(ans8a == true){
		document.getElementById("8a").checked = true;
		document.getElementById("8b").checked = false;
		document.getElementById("8c").checked = false;
		document.getElementById("8d").checked = false;
	}
	if(ans8b == true){
		document.getElementById("8a").checked = false;
		document.getElementById("8b").checked = true;
		document.getElementById("8c").checked = false;
		document.getElementById("8d").checked = false;
	}
	if(ans8c == true){
		document.getElementById("8a").checked = false;
		document.getElementById("8b").checked = false;
		document.getElementById("8c").checked = true;
		document.getElementById("8d").checked = false;
	}
	if(ans8d == true){
		document.getElementById("8a").checked = false;
		document.getElementById("8b").checked = false;
		document.getElementById("8c").checked = false;
		document.getElementById("8d").checked = true;
	}


	if(ans9a == true){
		document.getElementById("9a").checked = true;
		document.getElementById("9b").checked = false;
		document.getElementById("9c").checked = false;
		document.getElementById("9d").checked = false;
	}
	if(ans9b == true){
		document.getElementById("9a").checked = false;
		document.getElementById("9b").checked = true;
		document.getElementById("9c").checked = false;
		document.getElementById("9d").checked = false;
	}
	if(ans9c == true){
		document.getElementById("9a").checked = false;
		document.getElementById("9b").checked = false;
		document.getElementById("9c").checked = true;
		document.getElementById("9d").checked = false;
	}
	if(ans9d == true){
		document.getElementById("9a").checked = false;
		document.getElementById("9b").checked = false;
		document.getElementById("9c").checked = false;
		document.getElementById("9d").checked = true;
	}


	if(ans10a == true){
		document.getElementById("10a").checked = true;
		document.getElementById("10b").checked = false;
		document.getElementById("10c").checked = false;
		document.getElementById("10d").checked = false;
	}
	if(ans10b == true){
		document.getElementById("10a").checked = false;
		document.getElementById("10b").checked = true;
		document.getElementById("10c").checked = false;
		document.getElementById("10d").checked = false;
	}
	if(ans10c == true){
		document.getElementById("10a").checked = false;
		document.getElementById("10b").checked = false;
		document.getElementById("10c").checked = true;
		document.getElementById("10d").checked = false;
	}
	if(ans10d == true){
		document.getElementById("10a").checked = false;
		document.getElementById("10b").checked = false;
		document.getElementById("1c").checked = false;
		document.getElementById("1d").checked = true;
	}

}
