const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number = 25, basis = 10) {
    console.log(number * basis);
}

calcOrDouble(, 5);

