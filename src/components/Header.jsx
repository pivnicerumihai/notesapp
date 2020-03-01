import React from 'react';

const style = {
    fontFamily:"Arial",
    position:"fixed",
    top:"0",
    left:"0",
    width:"100%",
    backgroundColor:"rgb(19, 19, 55)",
    color:"white",
    paddingLeft:"10px",
    zIndex:"1"
}

function Header(){
    return(
    <header style={style}>
        <h3>Notes Application</h3>
    </header>
    )}

export default Header;