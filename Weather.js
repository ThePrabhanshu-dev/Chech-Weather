	const apiKey="df6f70a7c8caa4ddfbca784b84a34fb1";
	const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
	
	const searchBox = document.querySelector(".search input");
	const searchBtn = document.querySelector(".search button");


	async function CW(city){
		const response = await fetch(apiUrl  + city + `&appid=${apiKey}`);
		var data = await response.json();


		document.querySelector(".city").innerHTML = data.name;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

		document.querySelector(".weather").style.display = "block";
	}

searchBtn.addEventListener("click",()=>{
	CW(searchBox.value);
})