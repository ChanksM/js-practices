function CoffeeMachine(power) {
	this.waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	let self = this;
	
    function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
	
    function onReady() {
        console.log('Coffee is ready');
	}
    
    let timer;
    this.run = function() {
        timer =  setTimeout(onReady, getBoilTime());
    };
    
    this.stop = function(){
        if (timer) {
            clearTimeout(timer);
            timer = void 0;
        }
        console.log("coffee isn't ready");
    }
}

let coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;
coffeeMachine.run();
coffeeMachine.stop(); // coffee isn't ready
