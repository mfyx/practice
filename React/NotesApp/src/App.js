import React from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import { data } from "./data"
import Split from "react-split"
import {nanoid} from "nanoid"

/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you 
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {
    // const [notes, setNotes] = React.useState([])
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []   //use lazy initialization
    )

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    
    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }
    
    function updateNote(text) {
        // Put the most recent note at the top
        setNotes(oldNotes => {
            const myNotes = oldNotes.map(oldNote => {
                return oldNote.id === currentNoteId
                    ? { ...oldNote, body: text }
                    : oldNote
                    // ? { ...oldNote, body: text }
            });

            const myNote = myNotes.find(note => {
                return note.id === currentNoteId
            });

            return [
                myNote,
                ...myNotes.filter(note => {
                    return note.id !== currentNoteId
                })
            ];
        });

        // anothor way to do that: 
        // setNotes(oldNotes => {
        //     const newArray = []
        //     for(let i = 0; i < oldNotes.length; i++) {
        //         const oldNote = oldNotes[i]
        //         if(oldNote.id === currentNoteId) {
        //             newArray.unshift({ ...oldNote, body: text })
        //         } else {
        //             newArray.push(oldNote)
        //         }
        //     }
        //     return newArray
        // })
    }

    function deleteNote(event, noteId) {
        event.stopPropagation()

        setNotes(prevNotes => {
            return prevNotes.filter(note => {
                return note.id !== noteId
            })
        })

        if (currentNoteId === noteId) {
            if(notes.length > 0) {
                setCurrentNoteId(notes[0].id)
            } else {
                setCurrentNoteId("")
            }
        }
    }
    
    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }
    
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
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()} 
                        updateNote={updateNote} 
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
