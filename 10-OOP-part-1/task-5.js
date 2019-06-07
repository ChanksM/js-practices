function CoffeeMachine(power, capacity) {
	let waterAmount = 0;
	let WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	const cbOnReady = function() {
        timer = void 0;
        onReady();
    }

    function onReady() {
		console.log('Coffee is ready');
    }

    this.setOnReady = function(updateOnReady) {
        onReady = updateOnReady;
    }
    
    let timer;
	this.run = function() {
        timer = setTimeout(cbOnReady, getTimeToBoil());
    };
    
    this.isRunning = function() {
        return !!timer
    }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('Before: ' + coffeeMachine.isRunning()); // Before: false

coffeeMachine.run();

console.log('In progress: ' + coffeeMachine.isRunning()); // In progress: true

coffeeMachine.setOnReady(function() {
	console.log('After: ' + coffeeMachine.isRunning()); // After: false
});