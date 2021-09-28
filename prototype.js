"use strict";
import * as d3 from "d3";

/* 
** Elena Ryan
** Lenape History Project
** Prototyping Lenape Timeline Vis
** On mouse over, shows information window
** On click, pop up
** init 8/20/21
*/

function displaymessage()
{
  alert("Hello World!");
}
/** 

function pop(e) { //function called by first hotspot

    var popupID = document.getElementById("rootpop");
    console.log("ok");
    popupID.style.left = e.clientX + 'px';
    popupID.style.top = e.clientY  + 'px';

    if (popupID.display === "none"){
        popupID.disply = "absolute";
        console.log("ugh");
        window.alert(popupID.innerHTML);
    } else {
        popupID.display = "none";
        
        console.log("UGH AGAIN");
    }

    //var thing = document.getElementById("popup");

    //thing.style.left = e.clientX + 'px';
    //thing.style.top = e.clientY  + 'px';
    //$("#popup").toggle();

    return true;
 }

 function writeText(txt) {
    document.getElementById("rootpop").innerHTML = txt;
}**/