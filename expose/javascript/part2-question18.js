// let d = new Date();
// let time = d.toLocaleTimeString();
// console.log(time);

function disp() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(disp, 1000);