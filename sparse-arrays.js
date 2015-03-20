"use strict";

var SAMPLE_SIZE = 9999999;

function noop() {}

function theTime() {
    return new Date();
}

function opsSec(start, end) {
    return Math.floor(SAMPLE_SIZE / (end - start));
}

function createBigAssArray() {
    var array = [];
    for (var i = 0; i < SAMPLE_SIZE; ++i) {
        array.push(Math.random());
    }
    return array;
}

function createBigAssSparseArray() {
    var array = [];
    for (var i = 0; i < SAMPLE_SIZE; ++i) {
        array[Math.floor(Math.random() * SAMPLE_SIZE)] = Math.floor(Math.random() * SAMPLE_SIZE);
    }
    return array;
}

var bigContiguousArray = createBigAssArray();
var startTime = theTime();

bigContiguousArray.forEach(function(value, index) {
    noop(bigContiguousArray[index]);
});

var endTime = theTime();
console.log("contiguous ops/sec", opsSec(startTime, endTime));

var bigSparseArray = createBigAssSparseArray();
var startTime = theTime();

bigSparseArray.forEach(function(value, index) {
    noop(bigSparseArray[index]);
});

var endTime = theTime();
console.log("sparse ops/sec", opsSec(startTime, endTime));
