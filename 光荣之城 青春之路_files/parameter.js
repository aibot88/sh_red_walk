function text(parameter) {
	var arr;
	var obj;
	var typewriter = {
		str: parameter.str || "在迎接党的二十大胜利召开，结合庆祝中国共青团成立100周年之际，中共上海市委党史研究室、共青团上海市委员会策划，中国社会主义青年团中央机关旧址纪念馆、上海师范大学监制，上海市测绘院编制，共同推出《光荣之城 青春之路——党领导青年运动上海红色史迹地图》。该图所选目录以最新复核的红色史迹为基础，以党领导青年运动红色资源的历史意义、地址分布和点位条件等为依据，整理出32处代表党领导青年运动上海红色史迹，并配有史实简介，收录时限为五四运动至上海解放。同时综合出行者多元需求，精心梳理多条推荐线路，旨在清晰呈现青年在党的领导下一串串红色足迹。一图随身，为您准确导航党领导下青年运动红色地标。",
		effect: parameter.effect || "upBig",
		speed: parameter.speed || 200,
		box: parameter.conBox || "#text",
	}
	arr = [];
	for (var i = 0; i < typewriter.str.length; i++) {
		if (arr[i] == "") {
			arr[i] = " ";
		}
		arr[i] = typewriter.str[i];
	}
	console.log(arr);
	var num = 0;
	obj = setInterval(function () {
		var randomN = Math.floor(Math.random() * 4) + 1;
		var eff = null;
		if (randomN === 1) {
			eff = "fadeInRightBig";
		}
		if (randomN === 2) {
			eff = "fadeInLeftBig";
		}
		if (randomN === 3) {
			eff = "fadeInUpBig";
		}
		if (randomN === 4) {
			eff = "fadeInDownBig";
		}
		if (typewriter.effect === "normal") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip">' + arr[num] + '</span>');
		} else if (typewriter.effect === "rightBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInRightBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "right") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInRight">' + arr[num] + '</span>');
		} else if (typewriter.effect === "leftBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInLeftBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "left") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInLeft">' + arr[num] + '</span>');
		} else if (typewriter.effect === "downBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInDownBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "down") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInDown">' + arr[num] + '</span>');
		} else if (typewriter.effect === "upBig") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInUpBig">' + arr[num] + '</span>');
		} else if (typewriter.effect === "up") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated fadeInUp">' + arr[num] + '</span>');
		} else if (typewriter.effect === "random") {
			$(typewriter.box).append('<span style="display: inline-block;" class="tip animated ' + eff + '">' + arr[num] + '</span>');
		}
		num++
		if (num === arr.length) {
			clearInterval(obj);
		}
	}, typewriter.speed);
	return obj;
}