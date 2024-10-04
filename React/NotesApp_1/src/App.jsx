import React from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import Split from "react-split"
// import { nanoid } from "nanoid"

import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"

export default function App() {
    const [notes, setNotes] = React.useState([])
    // const [notes, setNotes] = React.useState(
    //     () => JSON.parse(localStorage.getItem("notes")) || []
    // )
    const [currentNoteId, setCurrentNoteId] = React.useState(
        ""
        // (notes[0]?.id) || ""
        // (notes[0] && notes[0].id) || ""
    )
    const currentNote = 
        notes.find(note => note.id === currentNoteId)
        || notes[0];

    const [tempNoteText, setTempNoteText] = React.useState("");

    React.useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, (snapshot) => {
            // console.log("Snapshot received!")
            const notesArray = snapshot.docs.map(doc => ({
                ...doc.data(),
                 id: doc.id
            }))
            setNotes(notesArray)
        });
        return unsubscribe;
    }, [])

    React.useEffect(() => {
        if(!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    React.useEffect(() => {
        if(currentNote) {
            setTempNoteText(currentNote.body)
        }
    }, [currentNote])

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (tempNoteText !== currentNote?.body) {
                updateNote(tempNoteText)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [tempNoteText])

    async function createNewNote() {
        const newNote = {
            // id: nanoid(),
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
        // setNotes(prevNotes => [newNote, ...prevNotes])
        // setCurrentNoteId(newNote.id)
    }

    async function updateNote(text) {
        const docRef = doc(db, "notes", currentNoteId);
        await setDoc(docRef, { 
            body: text,
            updatedAt: Date.now()
        }, { merge: true });
    }

    async function deleteNote(noteId) {
        // event.stopPropagation()
        // setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
        const docRef = doc(db, "notes", noteId);
        await deleteDoc(docRef);
        
    }

    const sortedNotes = [...notes].sort((a, b) => b.updatedAt - a.updatedAt);
    // const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt);

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={sortedNotes}
                            // notes={notes}
                            currentNote={currentNote}
                            // currentNote={findCurrentNote()}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNote}
                        />
                        {
                            // currentNoteId &&
                            // notes.length > 0 &&
                            <Editor
                                tempNoteText={tempNoteText}
                                setTempNoteText={setTempNoteText}
                                // currentNote={currentNote}
                                // updateNote={updateNote}
                            />
                        }
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                </button>
                    </div>

            }
        </main>
    )
}
