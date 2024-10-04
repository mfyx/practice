import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"

export default function Editor({ currentNote, updateNote }) {
    const [selectedTab, setSelectedTab] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    })

    // 定义只显示的工具栏命令
    const toolbarCommands = [
        [
            {
                name: "preview",
                //icon: "eye",
                execute: () => setSelectedTab("preview"),
            },
            {
                name: "write",
                //icon: "pencil",
                execute: () => setSelectedTab("write"),
            },
        ],
    ];

    return (
        <section className="pane editor">
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }

                //toolbarCommands={toolbarCommands}
                // toolbarCommands={[]}

                minEditorHeight={80}
                heightUnits="vh"
            />
        </section>
    )
}
