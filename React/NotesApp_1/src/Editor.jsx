import React from "react"
// import R from "react-mde"
// const ReactMde = R.default
import Showdown from "showdown"

import ReactMde from "react-mde"

// export default function Editor({ currentNote, updateNote }) {
export default function Editor({ tempNoteText, setTempNoteText }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    return (
        <section className="pane editor">
            <ReactMde
                // value={currentNote?.body}
                value={tempNoteText}
                // onChange={updateNote}
                onChange={setTempNoteText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
