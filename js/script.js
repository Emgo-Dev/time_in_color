(function(){
	var interval = setInterval(refreshTime, 1000);
	function refreshTime(){
		var now = new Date();
		var now_hours = now.getHours();
		var now_minutes = now.getMinutes();
		var now_seconds = now.getSeconds();
		hours_color=Math.floor(now_hours*11);
		minutes_color=Math.floor(now_minutes*4.25);
		seconds_color=Math.floor(now_seconds*4.25);
		
		if(now_hours<10){
			now_hours="0"+now_hours;
		}
		if(now_minutes<10){
			now_minutes="0"+now_minutes;
		}
		if(now_seconds<10){
			now_seconds="0"+now_seconds;
		}
		
		if(seconds_color<10){
			seconds_color="0"+seconds_color;
		}
		if(minutes_color<10){
			minutes_color="0"+minutes_color;
		}
		if(hours_color<10){
			hours_color="0"+hours_color;
		}
		
		/*$(".date").text(now_hours+":"+now_minutes+":"+now_seconds+" Uhr");*/
		now_color="rgb("+hours_color+","+minutes_color+","+seconds_color+")";
			
		$(".bg").css("background-color",now_color);
		function componentToHex(c) {
			var hex = c.toString(16);
			return hex.length == 1 ? "0" + hex : hex;
}

		function rgbToHex(r, g, b) {
			return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}
		$("#time").text(now_hours+":"+now_minutes+":"+now_seconds);
		$("#hex").text(rgbToHex(hours_color,minutes_color,seconds_color));
		$("#rgb").text(now_color);
	}
})();