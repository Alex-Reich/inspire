function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		var tempF = Math.floor((9/5)*(weather.main.temp)-459.67)
		var template =`
		<h3>${tempF}°</h3>
		<h3>${weather.name}</h3>
		`
		document.getElementById("weather").innerHTML = template
		//What can you do with this weather object?
	})
}
