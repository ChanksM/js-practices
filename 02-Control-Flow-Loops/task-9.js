for ( var i = 2; i < 11; i++ ) {
    var okay = true;
    for ( var e = 2; e < i; e++ ) {
        if ( i % e == 0) {
            okay = false;
            continue;
        }
    }
    if (okay) {
        console.log(i);
    }
}