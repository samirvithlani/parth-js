const fetchWeather = async () => {

    const q = "Ahmedabad";
    const appid = "fe4feefa8543e06d4f3c66d92c61b69c";
  const url =
    //"https://api.openweathermap.org/data/2.5/weather/?q=Ahmedabad&appid=fe4feefa8543e06d4f3c66d92c61b69c";
    `https://api.openweathermap.org/data/2.5/weather/?q=${q}&appid=${appid}`;

    const response = await fetch(url,{
        method: 'GET',
    })
    const data = await response.json()
    console.log(data)
    console.log(data.main.temp_min-273.15)
};

fetchWeather();
