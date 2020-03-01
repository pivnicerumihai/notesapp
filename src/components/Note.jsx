import React from 'react';



function Note(props) {
    
    const style = {
        fontSize: "20px",
        position: "relative",
        width: "250px",
        height: "250px",
        marginTop: "100px",
        border: "0.5px solid black",
        paddingLeft: "15px",
        backgroundColor: "rgb(19, 19, 55)",
        fontFamily: 'Pacifico',
        borderRadius:"20px",
        transform:"rotate(-2deg)"
    }
    const addButtonStyle = {
        position:"absolute",
        bottom:"10px",
        left:"35%"
    }

   
    return (
        <div style={style}>
            <form onSubmit={props.submit}>
                <textarea required  className="title" onChange={props.change}  name="title" placeholder="Enter Note Title Here" autoComplete="off" type="text"/>
                <textarea required className="content" onChange={props.change} name="content" placeholder="Enter Note Content Here" autoComplete="off" type="text"/>
                <button style={addButtonStyle} type="submit"><b>Add Note</b></button>
                
                </form>
        </div>
    )
}

export default Note;