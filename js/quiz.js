$(function() {


	$("#submit-button").on("click", function() {
		getans();
	})
});

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
