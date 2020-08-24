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
        this.stopBtn.addEventListener("click",this.stop)
        
    }
    start(){
        const {durationInput} = this;
        console.log("count down has began")
        console.log(durationInput)
    }
    stop(){
        console.log("stop")
    }

}
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const duration = document.querySelector("#duration")

const timer = new Timer(duration.value,startBtn,stopBtn);
