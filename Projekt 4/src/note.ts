

export class Note {
    
    createBox(data: any, localStorageName: string) {
        const title = data.title;
        console.log(title)
        const description = data.description;
        const color = data.color;
        const date = data.date;
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const buttonElement = document.createElement("button")
        buttonElement.addEventListener("click", function () {
            divElement.parentElement.removeChild(divElement)
            localStorage.removeItem(localStorageName);
        })
        buttonElement.innerText = "X";
        divElement.classList.add("note");
        divElement.style.backgroundColor = color;
        this.createDate(divElement, date)
        this.createTitle(divElement, title)
        this.createDescription(divElement, description)        
        weaterBox.appendChild(divElement)
        divElement.appendChild(buttonElement)
    }

    createTitle(elem: HTMLDivElement, title: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("note-title");
        spanElement.innerText = title;
        elem.appendChild(spanElement)
    }
    createDescription(elem: HTMLDivElement, weatherType: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("note-description");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }
    createDate(elem: HTMLDivElement, weatherType: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("note-date");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }

}

