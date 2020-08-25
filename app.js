//class time 
// start()
//stop()
//durationChange
//tick()

const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const duration = document.querySelector("#duration")

const timer = new Timer(duration,startBtn,stopBtn, {
    onStart(){
        console.log("start")
    },
    onTick(){
        console.log("-1")
    },
    onComplete(){
        console.log("complete")

    }
});
