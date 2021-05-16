export class App {
    apiKey = 'a4cb374648481f3247013e5f9ead66e2'
    btnAdd: HTMLButtonElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    cityName: string;
    data: string;
    weaterBox: HTMLDivElement;
    data1: string;
    constructor() {
        this.getInput();
        this.getData();
    }

    saveData(title: string, description: string) {
        let keys = Object.keys(localStorage).length - 1;
        let json = JSON.stringify({title,description});
        localStorage.setItem('Note' + keys, json);
        const parseData = JSON.parse(json);
        this.createBox(parseData, 'Note' + keys)
    }

    

    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('Note' + i);
                const localStorageName = 'Note' + i;
                const parseData = JSON.parse(data);
                this.createBox(parseData, localStorageName)
            }
        } else {
            return {};
        }
    }

    getInput() {
        this.btnAdd = document.querySelector(".btn-add")
        this.titleInput = document.querySelector("#titleInput");
        this.descriptionInput = document.querySelector("#descriptionInput");
        this.btnAdd.addEventListener("click", () => this.showData())
        
    }


    showData() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        this.saveData(title, description);
    }


    createBox( data: any, localStorageName: string) {
        const title = data.title;
        const description = data.description;
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const buttonElement = document.createElement("button")
        buttonElement.addEventListener("click", function () {
            divElement.parentElement.removeChild(divElement)
            localStorage.removeItem(localStorageName);
        })
        buttonElement.innerText = "Remove";
        divElement.classList.add("city_card");
        this.createCountry(divElement, title)
        this.createWeather(divElement, description)        
        weaterBox.appendChild(divElement)
        divElement.appendChild(buttonElement)
    }
    createCountry(elem: HTMLDivElement, title: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city__box--top-country");
        spanElement.innerText = title;
        elem.appendChild(spanElement)
    }
    createWeather(elem: HTMLDivElement, weatherType: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city__box--top-weater");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }

}
