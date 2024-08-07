import React from 'react'
import "../../style/Navbar.css"
const Progress = () => {
    window.onscroll = function () {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
      };
  return (
    <div id="progressBar"></div>
  )
}
export default Progress
