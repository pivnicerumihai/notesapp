import React,{useEffect,useRef,createRef} from 'react';

function Notes(props) {

    const note = useRef();
    const noteTitle = createRef();
    const noteContent = createRef();

    useEffect(()=>{
        let x = Math.random() *10 - 5;
        note.current.style.transform=`rotate(${x}deg)`;
    },[])

    
    const style = {

        display: "inline-block",
        marginLeft: "20px",
        position: "relative",
        width: "250px",
        height: "250px",
        marginTop: "100px",
        border: "0.5px solid black",
        borderRadius: "20px",
        paddingLeft: "15px",
        backgroundColor: "rgb(19, 19, 55)",
        color: "whitesmoke",
        marginBottom:"60px"
    }

    const deleteButtonStyle = {
        position: "absolute",
        backgroundColor: "red",
        color: "white",
        bottom: "10px",
        right: "15px"

    }
    const editButtonStyle = {
        position: "absolute",
        bottom: "10px",
        left: "15px",
    }



    return (

        <form style={style} ref={note} onSubmit={props.deleteNote}>
            <h2 ref={noteTitle}>{props.title}</h2>
            <p ref={noteContent}>{props.content}</p>
            <button
                className="editButton"
                style={editButtonStyle}
                index={props.index}
                onClick={props.editNote}
                type="submit" >Edit Note</button>
            <button
                style={deleteButtonStyle}
                type="submit"
                index={props.index} ><b>Delete Note</b></button>
            <button
                type='button'
                className="saveButton"
                style={{ display: "none" }}
                index={props.index}
                onClick={props.saveNote}>Save Note</button>
        </form>

    )
}

export default Notes;