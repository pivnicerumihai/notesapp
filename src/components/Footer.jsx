import React from 'react';

let date = new Date();
let currentYear = date.getFullYear();



const style = {
    position:"fixed",
    bottom:"0",
    left:"0",
    backgroundColor:"black",
    color:"white",
    width:"100%",
    textAlign:"center",
    
}

function Footer(props){
    return (
    <footer style={style}>
        <h3>Copyright Mihai-Claudiu Pivniceru {`${currentYear}`}</h3>
    </footer>
    )}
export default Footer;