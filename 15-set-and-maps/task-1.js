class DB {
    constructor(){
        this.data = new Map();
    }

    create(obj) {
        if (typeof obj !== 'object') {
            throw new Error('create parameter must be an object')
        }
        let userID = new Date().getTime().toString();
        this.data.set(userID, obj);
        return userID;
    }
    
    read(id) {
        if (typeof id !== 'string') {
            throw new Error('read parameter must be a string')
        } else if (id.length === 0) {
            throw new Error('U should pass a parameter for read')
        } else {
            const user = this.data.get(id)
            if (user) {
                return {...user, id};
            } else {
                return null;
            }
        }
    }

    readAll() {
        if (arguments.length > 0) {
            throw new Error('Readll can\'t take any argument')
        } else {
            return Array.from(this.data.values())
        }
    }

    update(id, obj) {
        if (!id || typeof id !== 'string') {
            throw new Error('first paramater must be a string');
        } else if(!obj || typeof obj !== 'object') {
            throw new Error('second parameter must be a object');
        }

        // const user = this.data.get(id);
        if (this.data.get(id)) {
            this.data.set(id, {...this.data.get(id), ...obj})
            return id
        } else {
            throw new Error('user with this id not found')
        }
    }

    delete(id) {
        if (!id || typeof id !== 'string') {
            throw new Error('paramater must be a string');
        } else if(this.data.get(id)) {
            return this.data.delete(id);
        }
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true
console.log(id,'\n', customer, '\n', customers);
