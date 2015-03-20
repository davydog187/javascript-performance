"use strict";

var SAMPLE_SIZE = 999999;

function noop() {}

function theTime() {
    return new Date();
}

function opsSec(start, end) {
    return Math.floor(SAMPLE_SIZE / (end - start));
}

function MyClass(value) {
    this.myValue = value;
}

MyClass.prototype.logValue = function() {
    console.log(this.myValue);
};

var startTime = theTime();

var myClass = new MyClass(5);
for (var i = 0; i < SAMPLE_SIZE; ++i) {
    // Accesses non-existent property, but does NOT create
    myClass["newProperty" + i];
    var test = "property";
    noop(myClass);
}

var endTime = theTime();
console.log("Unmodified object ops/sec", opsSec(startTime, endTime));

var myClass = new MyClass(5);
for (var i = 0; i < SAMPLE_SIZE; ++i) {
    // Creates non-existent property, and assigns
    myClass["newProperty" + i] = "property";
    noop(myClass);
}

var endTime = theTime();
console.log("Modified object ops/sec", opsSec(startTime, endTime));
