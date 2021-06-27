import { Notes } from "./notes"
const notes = new Notes();
import { db } from "./app"

//create box
export class Note {
    
    createBox(data: any, localStorageName: string) {
        const title = data.title;
        const description = data.description;
        const color = data.color;
        const date = data.date;
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const buttonElement = document.createElement("button")
        buttonElement.addEventListener("click",async function () {
            divElement.parentElement.removeChild(divElement)
            await db.collection('notes').doc(localStorageName).delete();
        })
        const buttonElementPin = document.createElement("button")
        buttonElementPin.addEventListener("click", function () {
            divElement.classList.add("pinned")
            notes.changeOrder();
        })
        buttonElement.innerText = "X";
        buttonElementPin.innerText = "✔";
        divElement.classList.add("note");
        divElement.style.backgroundColor = color;
        this.createDate(divElement, date)
        this.createTitle(divElement, title)
        this.createDescription(divElement, description)        
        weaterBox.appendChild(divElement)
        divElement.appendChild(buttonElement)
        divElement.appendChild(buttonElementPin)
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

