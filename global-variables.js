"use strict";

var SAMPLE_SIZE = 999999999;

function noop() {}

function theTime() {
    return new Date();
}

function opsSec(start, end) {
    return Math.floor(SAMPLE_SIZE / (end - start));
}

var i;

(function() {
    var startTime = theTime();
    for (i = 0; i < SAMPLE_SIZE; ++i) {
        noop();
    }
    var endTime = theTime();
    console.log("global loop ops/sec", opsSec(startTime, endTime));
})();

(function(noop, theTime) {
    var startTime = theTime();
    for (var j = 0; j < SAMPLE_SIZE; ++j) {
        noop();
    }
    var endTime = theTime();
    console.log("local scope loop ops/sec", opsSec(startTime, endTime));
})(noop, theTime);
