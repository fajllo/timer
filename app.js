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
let offset;
const timer = new Timer(duration,startBtn,stopBtn, {
    onStart(totalDuration){
        offset = totalDuration
    },
    onTick(timeLeft){
        circle.setAttribute('stroke-dashoffset', circleLen*timeLeft/offset - circleLen)

    },
    onComplete(){
        console.log("complete")

    }
});
