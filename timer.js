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
            this.onStart();
        }
        this.tick();
        this.counter = setInterval(this.tick,1000);
        

    }
    stop = () => {
        clearInterval(this.counter);
        const h1 = document.createElement("h1");
        h1.innerText = "koniec";
        document.body.appendChild(h1);

    }
    tick = () => {
        console.log(this.durationInput.value)
        if (this.timeLeft <= 0 ){
            this.stop();
            if (this.onComplete){
                this.onComplete();
            }
        }
        else{
            this.timeLeft = this.timeLeft -1;
            if (this.onTick){
                this.onTick();
            }
        }

    }

    get timeLeft() {
        return parseFloat(this.durationInput.value)
    }

    set timeLeft(time){
        this.durationInput.value = time

    }

}