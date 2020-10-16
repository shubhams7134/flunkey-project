import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div class="footer">
    <br/>
      <p>Copyright FLUNKEY ⓒ {year} </p>
    </div>
  );
}

export default Footer;