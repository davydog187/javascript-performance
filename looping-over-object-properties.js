"use strict";

function theTime() {
    return new Date();
}

function opsSec(start, end) {
    return Math.floor(SAMPLE_SIZE / (end- start));
}

var exampleObject = {};
var SAMPLE_SIZE = 9999999;

for (var i = 0; i < SAMPLE_SIZE; ++i) {
    exampleObject["property" + i] = "test";
}

var times = 0;
var startTime = theTime();

Object.keys(exampleObject).forEach(function(key) {
    ++times;
});

var endTime = theTime();

console.log("Object.keys ops/sec", opsSec(startTime, endTime));

times = 0;
var startTime = theTime();

for (var key in exampleObject) {
    ++times;
}

var endTime = theTime();
console.log("for..in ops/sec", opsSec(startTime, endTime));
