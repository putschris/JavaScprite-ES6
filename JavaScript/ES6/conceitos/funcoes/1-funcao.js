function getName(){
    return 'Guilherme Cristiano Costa'
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);