"use strict";
const funcNew = (a, b, c) => {
    if (typeof c === "undefined") {
        return a * b;
    }
    return a * b * c;
};
funcNew(2, 3, 4);
//handling the above case using a defaulti parameter
const anotherFunc = (n, m, l = 20) => {
    return n * m * l;
};
anotherFunc(2, 3);
//REST OPERATOR
const restfunc = (...m) => {
    return m;
};
