import { Note } from './note'
const note = new Note();

interface IAppStorage {
    title: String;
    description: String;
}

export class AppStorage implements IAppStorage {
    title: String;
    description: String;

    constructor(title: string, description: string){
        this.saveData(title, description)
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
            return {};
        }
    }
}

