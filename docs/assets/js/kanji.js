function display() {

	$("#answer").hide();
	var a = Math.floor(Math.random()*(25-0)+1);
	
	var b = Math.random()*(2-0);
	
	var c = Math.floor(Math.random()*(30-0));
	
	var w1 = ['脳', '員', '道', '囲','合','徐','怒','腰','流','奴','左','堂','唱','祝','州','歴','森','気','座','上','漕','族','早','申','羅','性','講','帳','混','焼'];
	var w2 = ['悩', '買', '導', '回','会','除','努','胸','琉','双','右','掌','晶','況','川','暦','林','氣','坐','止','槽','放','卓','甲','罹','姓','溝','張','温','暁'];
	
    var color = ['#808080', '#0000FF', '#008000', '#00FFFF', '#FF00FF', '#808000', '#800080', '#800000', '#00CCFF', '#3300FF', '#FF3300', '#550000', '#FF5F17', '#9932CC', '#D2691E', '#7CFC00', '#AFEEEE', '#DC143C', '#DC143C', '#FF1A6F', '#00FF3B', '#CC00FF', '#CC9966', '#FF9966', '#FF9900', '#000000'];
	
	var d = Math.floor(Math.random()*(26-0));

	
	if(b > 1){
		var word1 = w1[c]; var word2 = w2[c];
	}else{
		var word1 = w2[c]; var word2 = w1[c];
	}
	
	for (var i = 1; i < 26; i++) {
	document.getElementById("kanji" + i).innerHTML = word1 ;
	document.getElementById("kanji" + i).style.color = color[d];
	}

	document.getElementById("kanji" + a).innerHTML = word2 ;
	document.getElementById("ka").innerHTML = word2 ;
	document.getElementById("kanji" + a).style.color = color[d];

}

function ans(){
		$("#answer").show();
}