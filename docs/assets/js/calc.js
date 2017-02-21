function masss(){

	$("#answer").hide();

	//記号の挿入
	var word = '＋－×';

	word = word.split('');
	var kigou = '';

	for (var i = 0; i < 1; i++) {
	
		kigou += word[Math.floor(Math.random() * word.length)];
	
	}

	document.getElementById("kigou").innerHTML = kigou;

	//数字の挿入
	var a,b,c,d,e,f;

		a = Math.floor(Math.random()*(9-0));
		b = Math.floor(Math.random()*(9-0));
		c = Math.floor(Math.random()*(9-0));
		d = Math.floor(Math.random()*(9-0));
		e = Math.floor(Math.random()*(9-0));
		f = Math.floor(Math.random()*(9-0));

		document.getElementById("a").innerHTML = a;
		document.getElementById("b").innerHTML = b;
		document.getElementById("c").innerHTML = c;
		document.getElementById("d").innerHTML = d;
		document.getElementById("e").innerHTML = e;
		document.getElementById("f").innerHTML = f;
	
	//答え
	document.getElementById("kigou1").innerHTML = kigou;

		document.getElementById("a1").innerHTML = a;
		document.getElementById("b1").innerHTML = b;
		document.getElementById("c1").innerHTML = c;
		document.getElementById("d1").innerHTML = d;
		document.getElementById("e1").innerHTML = e;
		document.getElementById("f1").innerHTML = f;
		
	if (kigou == "＋"){

		document.getElementById("an1").innerHTML = d + a;
		document.getElementById("an2").innerHTML = d + b;
		document.getElementById("an3").innerHTML = d + c;

		document.getElementById("an4").innerHTML = e + a;
		document.getElementById("an5").innerHTML = e + b;
		document.getElementById("an6").innerHTML = e + c;

		document.getElementById("an7").innerHTML = f + a;
		document.getElementById("an8").innerHTML = f + b;
		document.getElementById("an9").innerHTML = f + c;

	}else if (kigou == "－"){

		document.getElementById("an1").innerHTML = d - a;
		document.getElementById("an2").innerHTML = d - b;
		document.getElementById("an3").innerHTML = d - c;

		document.getElementById("an4").innerHTML = e - a;
		document.getElementById("an5").innerHTML = e - b;
		document.getElementById("an6").innerHTML = e - c;

		document.getElementById("an7").innerHTML = f - a;
		document.getElementById("an8").innerHTML = f - b;
		document.getElementById("an9").innerHTML = f - c;

	}else{

		document.getElementById("an1").innerHTML = d * a;
		document.getElementById("an2").innerHTML = d * b;
		document.getElementById("an3").innerHTML = d * c;

		document.getElementById("an4").innerHTML = e * a;
		document.getElementById("an5").innerHTML = e * b;
		document.getElementById("an6").innerHTML = e * c;

		document.getElementById("an7").innerHTML = f * a;
		document.getElementById("an8").innerHTML = f * b;
		document.getElementById("an9").innerHTML = f * c;

	}

}

function masst(){

	$("#answer").hide();

	//記号の挿入
	var word = '＋－×';

	word = word.split('');
	var kigou = '';

	for (var i = 0; i < 1; i++) {
	kigou += word[Math.floor(Math.random() * word.length)];
	}

	document.getElementById("kigou").innerHTML = kigou;

	//数字の挿入
	var a,b,c,d,e,f;

		a = Math.floor(Math.random()*(99-10)+10);
		b = Math.floor(Math.random()*(99-10)+10);
		c = Math.floor(Math.random()*(99-10)+10);
		d = Math.floor(Math.random()*(99-10)+10);
		e = Math.floor(Math.random()*(99-10)+10);
		f = Math.floor(Math.random()*(99-10)+10);

		document.getElementById("a").innerHTML = a;
		document.getElementById("b").innerHTML = b;
		document.getElementById("c").innerHTML = c;
		document.getElementById("d").innerHTML = d;
		document.getElementById("e").innerHTML = e;
		document.getElementById("f").innerHTML = f;
	
	//答え
	document.getElementById("kigou1").innerHTML = kigou;

		document.getElementById("a1").innerHTML = a;
		document.getElementById("b1").innerHTML = b;
		document.getElementById("c1").innerHTML = c;
		document.getElementById("d1").innerHTML = d;
		document.getElementById("e1").innerHTML = e;
		document.getElementById("f1").innerHTML = f;
		
	if (kigou == "＋"){

		document.getElementById("an1").innerHTML = d + a;
		document.getElementById("an2").innerHTML = d + b;
		document.getElementById("an3").innerHTML = d + c;

		document.getElementById("an4").innerHTML = e + a;
		document.getElementById("an5").innerHTML = e + b;
		document.getElementById("an6").innerHTML = e + c;

		document.getElementById("an7").innerHTML = f + a;
		document.getElementById("an8").innerHTML = f + b;
		document.getElementById("an9").innerHTML = f + c;

	}else if (kigou == "－"){

		document.getElementById("an1").innerHTML = d - a;
		document.getElementById("an2").innerHTML = d - b;
		document.getElementById("an3").innerHTML = d - c;

		document.getElementById("an4").innerHTML = e - a;
		document.getElementById("an5").innerHTML = e - b;
		document.getElementById("an6").innerHTML = e - c;

		document.getElementById("an7").innerHTML = f - a;
		document.getElementById("an8").innerHTML = f - b;
		document.getElementById("an9").innerHTML = f - c;

	}else{

		document.getElementById("an1").innerHTML = d * a;
		document.getElementById("an2").innerHTML = d * b;
		document.getElementById("an3").innerHTML = d * c;

		document.getElementById("an4").innerHTML = e * a;
		document.getElementById("an5").innerHTML = e * b;
		document.getElementById("an6").innerHTML = e * c;

		document.getElementById("an7").innerHTML = f * a;
		document.getElementById("an8").innerHTML = f * b;
		document.getElementById("an9").innerHTML = f * c;

	}

}

function massj(){

	$("#answer").hide();

	//記号の挿入
	var word = '＋－×';

	word = word.split('');
	var kigou = '';

	for (var i = 0; i < 1; i++) {
	kigou += word[Math.floor(Math.random() * word.length)];
	}

	document.getElementById("kigou").innerHTML = kigou;

	//数字の挿入
	var a,b,c,d,e,f;

		a = Math.floor(Math.random()*(999-100)+100);
		b = Math.floor(Math.random()*(999-100)+100);
		c = Math.floor(Math.random()*(999-100)+100);
		d = Math.floor(Math.random()*(999-100)+100);
		e = Math.floor(Math.random()*(999-100)+100);
		f = Math.floor(Math.random()*(999-100)+100);

		document.getElementById("a").innerHTML = a;
		document.getElementById("b").innerHTML = b;
		document.getElementById("c").innerHTML = c;
		document.getElementById("d").innerHTML = d;
		document.getElementById("e").innerHTML = e;
		document.getElementById("f").innerHTML = f;
	
	//答え
	document.getElementById("kigou1").innerHTML = kigou;

		document.getElementById("a1").innerHTML = a;
		document.getElementById("b1").innerHTML = b;
		document.getElementById("c1").innerHTML = c;
		document.getElementById("d1").innerHTML = d;
		document.getElementById("e1").innerHTML = e;
		document.getElementById("f1").innerHTML = f;
		
	if (kigou == "＋"){

		document.getElementById("an1").innerHTML = d + a;
		document.getElementById("an2").innerHTML = d + b;
		document.getElementById("an3").innerHTML = d + c;

		document.getElementById("an4").innerHTML = e + a;
		document.getElementById("an5").innerHTML = e + b;
		document.getElementById("an6").innerHTML = e + c;

		document.getElementById("an7").innerHTML = f + a;
		document.getElementById("an8").innerHTML = f + b;
		document.getElementById("an9").innerHTML = f + c;

	}else if (kigou == "－"){

		document.getElementById("an1").innerHTML = d - a;
		document.getElementById("an2").innerHTML = d - b;
		document.getElementById("an3").innerHTML = d - c;

		document.getElementById("an4").innerHTML = e - a;
		document.getElementById("an5").innerHTML = e - b;
		document.getElementById("an6").innerHTML = e - c;

		document.getElementById("an7").innerHTML = f - a;
		document.getElementById("an8").innerHTML = f - b;
		document.getElementById("an9").innerHTML = f - c;

	}else{

		document.getElementById("an1").innerHTML = d * a;
		document.getElementById("an2").innerHTML = d * b;
		document.getElementById("an3").innerHTML = d * c;

		document.getElementById("an4").innerHTML = e * a;
		document.getElementById("an5").innerHTML = e * b;
		document.getElementById("an6").innerHTML = e * c;

		document.getElementById("an7").innerHTML = f * a;
		document.getElementById("an8").innerHTML = f * b;
		document.getElementById("an9").innerHTML = f * c;

	}

}

function ans(){
		$("#answer").show();
}

function insyo(){

	var a, b;
	b = 0;

		a = Math.floor(Math.random()*(9-0));

		document.getElementById("suji").innerHTML = a;
		
		//alert(a);
		
		b = b + a;
		

}

function doSomethingLoop(maxCount, i) {
  if (i <= maxCount) {
    insyo();
    setTimeout(function(){doSomethingLoop(maxCount, ++i)}, 1000);
  }
}