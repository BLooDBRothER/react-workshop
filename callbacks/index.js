const callbackApple = (cb) => {
    cb("apple")
}

const appleFn = (appleString) => {
    console.log(appleString);
}

callbackApple(appleFn);
