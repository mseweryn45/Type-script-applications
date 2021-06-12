

export class Note {
    
    createBox(data: any, localStorageName: string) {
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

