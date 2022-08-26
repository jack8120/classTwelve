'use strict'

let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");


//Rectangle//
ctx.fillStyle = "red";

ctx.fillRect(0,0,150,75);

// Line//
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

//Circle//

ctx.beginPath();
ctx.arc(200,100,100,0,2 * Math.PI);
ctx.stroke();