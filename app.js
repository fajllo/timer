//class time 
// start()
//stop()
//durationChange
//tick()
class Timer {
    constructor(durationInput = 0,startBtn,stopBtn){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;

        this.startBtn.addEventListener("click",this.start)
        this.stopBtn.addEventListener("click",this.stop)
        
    }
    start = () =>{
      
        console.log("count down has began")
        console.log(this.durationInput.value)

    }
    stop(){
        console.log("stop")
    }

}
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const duration = document.querySelector("#duration")

const timer = new Timer(duration,startBtn,stopBtn);
