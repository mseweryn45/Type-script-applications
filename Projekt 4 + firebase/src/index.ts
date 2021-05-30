import { App } from './app';
import './main.scss';
import firebase from "firebase"
import { firebaseConfig } from "./config"


const app = new App();

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const note = {
    title: "Second note",
    content: "Second note content"
}

// addNote(note)
async function addNote(note: any) {
    const res = await db.collection('notes').add(note);
}

// deleteNote("AF6PUweCrc3LFrNNfM3l")
async function deleteNote(id: string) {
    const res = await db.collection('notes').doc(id).delete();
}

// updateNote("ZWQpkg4K1k1pouhwuhIl",
//     {
//         title: "Update Note",
//         content: "Update Content"
//     })
async function updateNote(id: string, note: any) {
    const res = await db.collection('notes').doc(id).update(note);
}


// getNote("ZWQpkg4K1k1pouhwuhIl").then(res => console.log(res))
async function getNote(id: string) {
    return await db.collection('notes').doc(id).get().then(res => ({id: res.id,data: res.data()}))
}


getNotes().then(res => console.log(res))
async function getNotes() {
    return await db.collection('notes').get().then(res => ({size: res.size,docs: res.docs}))
}