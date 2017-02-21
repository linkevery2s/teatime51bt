function line(){
	var url = window.location.href;
	location.href = "line://msg/text/"+ url;
}

function mail(){
	var url = window.location.href;
	location.href =  "mailto:?body=Appli URL " + url;
}