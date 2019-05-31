for ( let i = 2; i < 11; i++ ) {
    let okay = true;
    for ( let e = 2; e < i; e++ ) {
        if ( i % e == 0) {
            okay = false;
            continue;
        }
    }
    if (okay) {
        console.log(i);
    }
}