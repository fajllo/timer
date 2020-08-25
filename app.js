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
        if (this.timeLeft <= 0 ){
            this.stop();
        }
        else{
            this.timeLeft = this.timeLeft -1;
        }

    }

    get timeLeft() {
        return parseFloat(this.durationInput.value)
    }

    set timeLeft(time){
        this.durationInput.value =time

    }
}
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const duration = document.querySelector("#duration")

const timer = new Timer(duration,startBtn,stopBtn);
