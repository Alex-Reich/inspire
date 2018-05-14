function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		var tempF = Math.floor((9/5)*(weather.main.temp)-459.67)
		var template =`
		<h2>It is currently ${tempF}°F in ${weather.name}</h2>
		`
		document.getElementById("weather").innerHTML = template
		//What can you do with this weather object?
	})
}
