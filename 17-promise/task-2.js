function getCustomers(item1, item2) {
    let result;
    return new Promise(function (resolve, reject) {
        for (let i of item1) {
            for (let j of item2) {
                if (i.id === j.id && !!i.verified && !!j.verified) {
                    i.country = j.country
                    result = i
                } else if (!!item2.id) {
                    reject(`We don't have information about country for this customer: ${item2.name}`)
                }
            }
        }
        if (result) {
            resolve(result);
        } else {
            reject('error')
        }
    });
}
const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
        verified: true
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa',
        verified: true
    },
    {
        id: 'A2',
        country: 'poland',
        verified: true
    }
];

getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))