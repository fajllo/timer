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
        this.tick();
        this.counter = setInterval(this.tick,1000);
        

    }
    stop = () => {
        clearInterval(this.counter);
    }
    tick = () => {
        const timeRemaining = this.timeLeft;
        this.durationInput.value = timeRemaining -1;
    }

    get timeLeft() {
        return parseFloat(this.durationInput.value)
    }
}
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const duration = document.querySelector("#duration")

const timer = new Timer(duration,startBtn,stopBtn);
