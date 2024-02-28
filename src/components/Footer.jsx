import React from "react";

function Footer(){
    const date = new Date();
    const Year = date.getFullYear();
    return (
    <footer>
        <p>Copyright@ {Year}</p>
    </footer>
    );
}

export default Footer;