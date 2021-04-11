export class App {
    apiKey = 'a4cb374648481f3247013e5f9ead66e2'
    cityInput: HTMLInputElement;
    cityName: string;
    data: string;
    constructor() {
        this.getInput();
    }
    
    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather.name);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        
        return weatherData;
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            const parseData = JSON.parse(data);
            return parseData
        } else {
            return {};
        }
    }

    getInput(){
        this.cityInput = document.querySelector("#cityInput");
        this.cityInput.addEventListener("input", () => this.showData())
    }

    showData(){
        const data = this.cityInput.value;
        this.getCityInfo(data);
    }
}