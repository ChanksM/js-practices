class DB {
    constructor(){
        this.data = new Map();
    }

    validate(item, type, arg) {
        if ( typeof item !== type ) {
            throw new Error(`${arg} type must be a ${type}`);
        }
        return this;
    }

    create(obj) {
        if (typeof obj !== 'object') {
            throw new Error('create parameter must be an object')
        }
        const { name, age, country, salary } = obj;
        this.validate(name, 'string', 'Name')
            .validate(age, 'number', 'Age')
            .validate(country, 'string', 'Country')
            .validate(salary, 'number', 'Salary');

        let userID = new Date().getTime().toString();
        this.data.set(userID, obj);
        return userID;
    }
    
    read(id) {
        if (!id || typeof id !== 'string') {
            throw new Error('read parameter is required and must be a string')
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
            throw new Error('first parameter is required and must be a string');
        } else if(!obj || typeof obj !== 'object') {
            throw new Error('second parameter is required and must be an object');
        }

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
        } else if(!this.data.has(id)) {
            throw new Error('paramater doesn\'t exist a string');
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
