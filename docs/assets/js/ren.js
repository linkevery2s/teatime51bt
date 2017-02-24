function k1(){

	var a1, kai;
	kai = 0;
	for (var i = 0; i < 5; i++) {
		a1 = Math.floor(Math.random()*(9-0));
		alert(a1);
		kai = kai + a1;
	}
	
	var ans;
		ans = window.prompt("答えは？","");
		
		if (ans == kai){
			alert("正解です！");
		}
		else{
			alert("残念。答えは" + kai + "です。");
		}
}

function k2(){

	var a1, kai;
	kai = 0;
	for (var i = 0; i < 5; i++) {
		a1 = Math.floor(Math.random()*(99-10)+10);
		alert(a1);
		kai = kai + a1;
	}

	var ans;
		ans = window.prompt("答えは？","");
		
		if (ans == kai){
			alert("正解です！");
		}
		else{
			alert("残念。答えは" + kai + "です。");
		}

}

function k3(){

	var a1, kai;
	kai = 0;
	for (var i = 0; i < 5; i++) {
		a1 = Math.floor(Math.random()*(999-100)+100);
		alert(a1);
		kai = kai + a1;
	}

	var ans;
		ans = window.prompt("答えは？","");
		
		if (ans == kai){
			alert("正解です！");
		}
		else{
			alert("残念。答えは" + kai + "です。");
		}

}