
function zukei(){

	var zukei = ['●', '◎', '▲', '■', '◆', '▼', '★'];
		
	var color = ['#808080', '#0000FF', '#008000', '#00FFFF', '#FF00FF', '#808000', '#800080', '#800000', '#00CCFF', '#3300FF', '#FF3300', '#550000', '#FF5F17', '#9932CC', '#D2691E', '#7CFC00', '#AFEEEE', '#DC143C', '#DC143C', '#FF1A6F', '#00FF3B', '#CC00FF', '#CC9966', '#FF9966', '#FF9900', '#000000'];

	var zk = shuffle(zukei);
	var cl = shuffle(color);

	for (var i = 1; i < 8; i++) {
		document.getElementById("z" + i).innerHTML = zk[i-1];
		document.getElementById("z" + i).style.color = color[i-1];
	}
	
	var a = Math.floor(Math.random()*(7-0));
		document.getElementById("color").style.color = color[a];
}

function shuffle(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}