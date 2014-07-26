// set context
//initialize the diagram
//fill color in circle
//draw circle

var boouncingBallContext;

function setContext()
{  
   
    boouncingBallContext = bouncingBallCanvas.getContext('2d');

    setInterval(drawCen)

    boouncingBallContext.beginPath();

    boouncingBallContext.fillStyle = "#070719";

    boouncingBallContext.arc(100, 100, 20, 0, Math.PI * 2, true);

    boouncingBallContext.closePath();

    boouncingBallContext.fill();
}
