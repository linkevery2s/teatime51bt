function k1(){

	var a1, kai;
	kai = 0;
	for (var i = 0; i < 5; i++) {
		a1 = Math.floor(Math.random()*(9-0));
		alert(a1);
		kai = kai + a1;
	}

alert("答えは" + kai + "です。");

}