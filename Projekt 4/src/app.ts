import { Note } from './note'
const note = new Note();

export class App {
    btnAdd: HTMLButtonElement;
    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    data: string;
    weaterBox: HTMLDivElement;

    constructor() {
        this.getInput();
        this.getData();
    }

    saveData(title: string, description: string) {
        let keys = Object.keys(localStorage).length - 1;
        let json = JSON.stringify({ title, description });
        localStorage.setItem('Note' + keys, json);
        const parseData = JSON.parse(json);
        note.createBox(parseData, 'Note' + keys)
    }

    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('Note' + i);
                const localStorageName = 'Note' + i;
                const parseData = JSON.parse(data);
                note.createBox(parseData, localStorageName)
            }
        } else {
            console.log("tal")
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

}
