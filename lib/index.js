import { fileURLToPath } from 'url';

export function location(depth = 0) {
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (ignore, stack) => stack;

    const capture = {};
    Error.captureStackTrace(capture);
    const line = capture.stack[depth + 1];

    Error.prepareStackTrace = orig;

    // Under ESM, CallSite.getFileName() returns a file:// URL; normalize back to a
    // filesystem path so the returned filename matches the CJS-era contract.
    const filename = line.getFileName();

    return {
        filename: filename && filename.startsWith('file://') ? fileURLToPath(filename) : filename,
        line: line.getLineNumber(),
    };
}
