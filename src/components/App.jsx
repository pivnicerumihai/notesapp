import React, { useState} from "react";
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import Notes from './Notes';


function App(props) {



    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [finalNote, setFinalNote] = useState(
        [{
            title: [],
            content: []
        }])



    const handleChange = (e) => {
        let inputValidator = e.target.name;
        let newItem = e.target.value;
        if (inputValidator === "title") {
            setNote(prevState => {
                return ({
                    title: newItem,
                    content: prevState.content
                })
            })
        }
        else {
            setNote(prevState => {
                return ({
                    title: prevState.title,
                    content: newItem
                })
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let title = e.target.children[0];
        let content = e.target.children[1];
        if (title.value.length === 0) {
            alert("Insert a value in the title input")
        }
        else if (content.value.length === 0) {
            alert("Insert a value in the content input")

        }
        else {

            setFinalNote(function (prevState) {
                return ([...prevState, {

                    title: note.title,
                    content: note.content
                }])
            },
            )
        }
    }
   
    const handleDelete = (e) => {
        let index = e.target.children[2].getAttribute("index");
        setFinalNote(prevState => {

            prevState.splice(index, 1);

            return ([...prevState])
        });
        e.preventDefault();
    }

    const handleEdit = (e) => {
        e.preventDefault();
        let index = e.target.getAttribute("index") - 1;
        var x = document.getElementsByTagName("h2")[index];
        var y = document.getElementsByTagName("p")[index];

        x.setAttribute("contenteditable", "true");
        y.setAttribute("contenteditable", "true");



        var editButton = document.getElementsByClassName("editButton");
        editButton[index].classList.toggle("displayNone");
        var saveButton = document.getElementsByClassName("saveButton");
        saveButton[index].style.display = "inline";
    }


    const handleSave = (e) => {
        e.preventDefault();
        let index = e.target.getAttribute("index") - 1;
        var x = document.getElementsByTagName("h2")[index];
        var y = document.getElementsByTagName("p")[index];

        setFinalNote((prevState) => {
            prevState.splice(index + 1, 1, { title: x.innerText, content: y.innerText })

            return ([...prevState])
        })
        x.removeAttribute("contenteditable");
        y.removeAttribute("contenteditable");
        var editButton = document.getElementsByClassName("editButton");
        editButton[index].classList.toggle("displayNone");
        var saveButton = document.getElementsByClassName("saveButton");
        saveButton[index].style.display = "none";
        
    }


    return (
        <div>
            <Header />
            <Note change={handleChange} submit={handleSubmit} />
            {finalNote.map((el, index) => {
                if (index > 0) {
                    return <Notes
                        key={index}
                        title={el.title}
                        content={el.content}
                        deleteNote={handleDelete}
                        index={index}
                        editNote={handleEdit}
                        saveNote={handleSave} />
                        
                    } else {
                    return null
                };
            })}
            <Footer />

        </div>
    )
}

export default App;