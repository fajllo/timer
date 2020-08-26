//class time 
// start()
//stop()
//durationChange
//tick()

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const duration = document.querySelector("#duration")
const circle = document.querySelector("circle")

const circleLen = circle.getAttribute("r") * 2 *Math.PI;
circle.setAttribute('stroke-dasharray',circleLen)
let currentOffsset = 0;

const timer = new Timer(duration,startBtn,stopBtn, {
    onStart(){
        console.log("start")
    },
    onTick(){
        circle.setAttribute('stroke-dashoffset',currentOffsset)
        currentOffsset = currentOffsset - 1;
    },
    onComplete(){
        console.log("complete")

    }
});
