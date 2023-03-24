// store values 
let h = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");


// call the arrow function  with interval
setInterval( () => {
    let date = new Date();
    //  The code multiplies the current hour by 30, it is converting the hour into degrees on a clock face.
    let hour = date.getHours() * 30;
    // The code multiplies the current minute by 6, it is converting the minute into degrees on a clock face. 
    let minute = date.getMinutes() * 6;
    // The code multiplies the current second by 6, it is converting the second into degrees on a clock face.
    let second = date.getSeconds() * 6;
    

    //   design the rotate clock hands 
    h.style.transform = `rotateZ(${(hour) + (minute/12) }deg)`
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${second}deg)`;
} );