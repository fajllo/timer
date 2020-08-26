class Timer {
    constructor(durationInput = 0,startBtn,stopBtn, callback){
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
       if (callback){
           this.onStart = callback.onStart;
           this.onTick = callback.onTick;
           this.onComplete = callback.onComplete;
       }

        this.startBtn.addEventListener("click",this.start)
        this.stopBtn.addEventListener("click",this.stop)
        
    }
    start = () =>{
        if (this.onStart){
            this.onStart(this.timeLeft);
        }
        this.tick();
        this.counter = setInterval(this.tick,10);
        

    }
    stop = () => {
        clearInterval(this.counter);
        const h1 = document.createElement("h1");
        h1.innerText = "koniec";
        document.body.appendChild(h1);

    }
    tick = () => {
        if (this.timeLeft <= 0 ){
            this.stop();
            if (this.onComplete){
                this.onComplete();
            }
        }
        else{
            this.timeLeft = this.timeLeft -0.01;
            if (this.onTick){
                this.onTick(this.timeLeft);
            }
        }

    }

    get timeLeft() {
        return parseFloat(this.durationInput.value)
    }

    set timeLeft(time){
        this.durationInput.value = time.toFixed(2);

    }

}