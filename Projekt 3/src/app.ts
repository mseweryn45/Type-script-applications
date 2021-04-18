export class App {
    apiKey = 'a4cb374648481f3247013e5f9ead66e2'
    btnAdd : HTMLButtonElement;
    cityInput: HTMLInputElement;
    cityName: string;
    data: string;
    weaterBox: HTMLDivElement;
    data1:string;
    constructor() {
        this.getInput();
        this.getData();
    }

    async saveCityInfo(city: string) {
        
        const weather = await this.getWeather2(city);
        
        if (weather.cod !== "404"){
            this.saveData(weather.name);
        }
    }

    async getWeather2(city: string ): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }

    async createWeatherElement(city: string , localStorageName : string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();          
        const temp = Math.round(parseInt(weatherData["main"].temp, 10) - 273.15);
        const weatherType =  weatherData.weather[0].main;
        this.createBox(temp , weatherType, city, localStorageName);
        return weatherData;
    }

    saveData(data: any) {
        let keys = Object.keys(localStorage).length - 1;
        localStorage.setItem('weatherData' + keys, JSON.stringify(data));
        this.createWeatherElement(data, 'weatherData' + keys)
    }

    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('weatherData' + i);
                const localStorageName = 'weatherData' + i;
                const parseData = JSON.parse(data); 
                console.log('weatherData' + i)  
                this.createWeatherElement(parseData, localStorageName)
            }
        } else {
            return {};
        }
    }

    getInput(){
        this.btnAdd = document.querySelector(".btn-add")
        this.cityInput = document.querySelector("#cityInput");
        this.btnAdd.addEventListener("click", () => this.showData())
    }

    showData(){
        const data = this.cityInput.value;
        this.saveCityInfo(data);
    }

    createElement(){
        // this.createBox()

    }
    createBox(temp : number , weaterType : string, city : string, localStorageName: string){
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const buttonElement = document.createElement("button")
        buttonElement.addEventListener("click", function(){
            divElement.parentElement.removeChild(divElement)
            localStorage.removeItem(localStorageName);
        })
        buttonElement.innerText = "Remove";
        divElement.classList.add("city_card");
        this.createTemp(divElement, temp)
        this.createWeather(divElement , weaterType)
        this.createCountry(divElement, city)
        weaterBox.appendChild(divElement)
        divElement.appendChild(buttonElement)
    }
    createCountry(elem : HTMLDivElement, city : string){
        const spanElement = document.createElement("span"); 
        spanElement.classList.add("city__box--top-country");
        spanElement.innerText = city;
        elem.appendChild(spanElement)
    }
    createTemp(elem : HTMLDivElement, temp : number){
        const spanElement = document.createElement("span"); 
        spanElement.classList.add("city__box--top-temp");
        spanElement.innerHTML = temp.toString() + "&#x2103";
        elem.appendChild(spanElement)
    }
    createWeather(elem : HTMLDivElement, weatherType : string){
        const spanElement = document.createElement("span"); 
        spanElement.classList.add("city__box--top-weater");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }
    
}
