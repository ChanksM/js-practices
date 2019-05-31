let mix = (...args) => {

    let retVal;

    for (let f of args){
        if (typeof f != "function"){
            throw new Error("each parameter must be a function");
        } else {
            retVal = f(retVal);
        }
    }
    return retVal
}

console.log(mix(() => {
    return 0;
}, (prev) => {
    return prev + 1;
}, (prev) => {
    return prev * 2;
}))  // 2
