import { Note } from './note'
import { db } from "./app"
const noteElement = new Note();


interface IAppStorage {
    title: String;
    description: String;
    color: string;
    date: string;
}

export class AppStorage implements IAppStorage {
    title: String;
    description: String;
    color: string
    date: string

    constructor(title: string, description: string, color: string, date: string) {
        this.addNote(title, description, color, date)
    }


    async addNote(title: string, description: string, color: string, date: string) {
        const noteLenght = await (await db.collection('notes').get()).docs.map(doc => doc.data()).length;
        const note = {
            title: title,
            description: description,
            color: color,
            date: date,
            id:noteLenght
        }
        await db.collection('notes').add(note);
        //upadate id
        const col = await db.collection('notes').get();        
        const noteList = col.docs.map(doc=>doc.id)
        const noteID = noteList[0]
            await db.collection('notes').doc(noteID).update(
                {
                    id: noteID
                }
            );
       
        noteElement.createBox(note, noteID);
    }
}

