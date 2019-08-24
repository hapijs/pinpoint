'use strict';

const internals = {};


exports.location = function (depth = 1) {

    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (ignore, stack) => stack;

    const capture = {};
    Error.captureStackTrace(capture, this);
    const line = capture.stack[depth];

    Error.prepareStackTrace = orig;

    return {
        filename: line.getFileName(),
        line: line.getLineNumber()
    };
};
