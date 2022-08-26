'use strict'

let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");


//Rectangle
ctx.fillStyle = "red";

ctx.fillRect(0,0,150,75);

// Line
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

//Circle

ctx.beginPath();
ctx.arc(200,100,100,0,2 * Math.PI);
ctx.stroke();

//Gradient

let grd = ctx.createLinearGradient(0,0,800,90);
grd.addColorStop(0, "red");
grd.addColorStop(0.25, "blue");
grd.addColorStop(0.5, "green");
grd.addColorStop(0.75, "yellow");
grd.addColorStop(0.8, "white");

// Fill with gradient

ctx.fillStyle = grd;
ctx.fillRect(0,200,600,400);

// Text
ctx.font = "110px Arial";
ctx.fillText("Hello World", 16, 200);
