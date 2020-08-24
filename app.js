//class time 
// start()
//stop()
//durationChange
//tick()
class Timer {
    constructor(durationInput,startBtn,stopBtn){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;

        this.startBtn.addEventListener("click",this.start)
        
    }
    start(){
        console.log("count down has began")
    }
}
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const stopBtn = document.querySelector("#duration")

const timer = new Timer(0,startBtn,stopBtn);
