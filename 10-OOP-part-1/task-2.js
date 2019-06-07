function CoffeeMachine(power, capacity) {
	const _power = power;

	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive.");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
    
	this.getWaterAmount = function() {
		return waterAmount;
	};
	
	this.power = function() {
		return _power;
	}
}
let coffeeMachine = new CoffeeMachine(100, 500);
console.log(coffeeMachine.power());
console.log(Object.getOwnPropertyDescriptor(coffeeMachine, 'power'));