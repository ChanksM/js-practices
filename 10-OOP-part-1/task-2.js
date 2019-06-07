function CoffeeMachine(power, capacity) {
	//...
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
    
    Object.defineProperty(this, 'power', {
		get(){
			return power;
		},

		set() {
			throw new Error('power can\'t be changed');
		}
	})

}
let coffeeMachine = new CoffeeMachine(100, 500);
console.log(coffeeMachine.power);
console.log(Object.getOwnPropertyDescriptor(coffeeMachine, 'power'));