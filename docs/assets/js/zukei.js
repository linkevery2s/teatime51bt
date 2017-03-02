function syoki(){$("#toi").hide();$("#kbun").hide();}

function zukei1(){
	$("#mon").show();
	$("#toi").hide();
	$("#kbun").hide();
	var zukei = ['●', '◎', '▲', '■', '◆', '▼', '★'];
		
	var color = ['#000000', '#0000FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF0000', '#FF00FF'];

	var zk = shuf(zukei);
	var cl = shuf(color);

	for (var i = 1; i < 8; i++) {
		document.getElementById("z" + i).innerHTML = zk[i-1];
		document.getElementById("z" + i).style.color = color[i-1];
	}
	
	var a = Math.floor(Math.random()*(7-0));
	document.getElementById("color").style.color = color[a];
	
	setTimeout(countup, 3000);

	document.getElementById("kai").innerHTML = zk[a];
	document.getElementById("kai").style.color = color[a];
}

function zukei2(){
	$("#mon").show();
	$("#toi").hide();
	$("#kbun").hide();
	var zukei = ['●', '◎', '▲', '■', '◆', '▼', '★'];
		
	var color = ['#000000', '#0000FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF0000', '#FF00FF'];

	var zk = shuf(zukei);
	var cl = shuf(color);

	for (var i = 1; i < 8; i++) {
		document.getElementById("z" + i).innerHTML = zk[i-1];
		document.getElementById("z" + i).style.color = color[i-1];
	}
	
	var a = Math.floor(Math.random()*(7-0));
	document.getElementById("color").style.color = color[a];
	
	setTimeout(countup, 1500);

	document.getElementById("kai").innerHTML = zk[a];
	document.getElementById("kai").style.color = color[a];
}

function zukei3(){
	$("#mon").show();
	$("#toi").hide();
	$("#kbun").hide();
	var zukei = ['●', '◎', '▲', '■', '◆', '▼', '★'];
		
	var color = ['#000000', '#0000FF', '#00FF00', '#00FFFF', '#FFFF00', '#FF0000', '#FF00FF'];

	var zk = shuf(zukei);
	var cl = shuf(color);

	for (var i = 1; i < 8; i++) {
		document.getElementById("z" + i).innerHTML = zk[i-1];
		document.getElementById("z" + i).style.color = color[i-1];
	}
	
	var a = Math.floor(Math.random()*(7-0));
	document.getElementById("color").style.color = color[a];
	
	setTimeout(countup, 500);

	document.getElementById("kai").innerHTML = zk[a];
	document.getElementById("kai").style.color = color[a];
}

function countup(){
	$("#mon").hide();
	$("#toi").show();
}

function shuf(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}

function ans(){
	$("#kbun").show();
}