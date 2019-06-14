class Customers {
    constructor() {
        this.users = []
    }
    add(obj) {
        if(!obj || typeof obj !== 'object') {
            throw new Error('add parameter must be an object');
        }
        this.users.push(obj)
    }
    [Symbol.iterator] () {
        let i = 0;
        let lucky = this.users.filter(function(item) {
            if (item.verified) {
                return item;
            }
        });
        return {
            next() {
                const done = i >= lucky.length;
                const value = !done ? lucky[i++] : false;
    
                return {
                    value,
                    done
                }
            }
        }
    }
}

const customers = new Customers();

customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// console log
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }