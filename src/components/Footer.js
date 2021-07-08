import React from "react";
var d = new Date();
var n = d.getFullYear();
var style = {
    backgroundColor: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>

            <div style={style}>
            <span style={{color:"white"}}>
            Copyright © {n}. Developed with ❤️ by <span style={{color:"#ffd700"}}><a href="https://shubhamkumarsingh.me/"  target="_blank" style={{textDecoration :'none',color:"#ffd700"}}>Shubham Kumar Singh</a></span></span>
            </div>
        </div>
    )
}

export default Footer;