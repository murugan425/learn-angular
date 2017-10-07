function logMsg(message) {
    console.log(message);
}
var message = 'Your output is printed in the console';
logMsg(message);
var doLogSingleLineFn = function (msg) { return console.log(msg); };
var doLogMultiLineFn = function (msg1, msg2) { console.log(msg1); console.log(msg2); };
var doLogNoParamFn = function () { console.log('Hardcoded Messages'); };
doLogSingleLineFn('print some message');
doLogMultiLineFn('message1 printed', 'message2 printed');
doLogNoParamFn();
