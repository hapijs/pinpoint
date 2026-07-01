import { describe, expect, it } from 'vitest';

import * as Pinpoint from '../src/index.js';

describe('Pinpoint', () => {
    describe('location()', () => {
        it('returns the filename and line of the calling frame', () => {
            const first = Pinpoint.location();
            const second = Pinpoint.location(); // exactly one source line below `first`

            expect(first.filename).toContain('index.js');
            expect(first.filename.startsWith('file://')).toBe(false); // normalized to a path, not a URL
            expect(typeof first.line).toBe('number');

            // Adjacent calls report consecutive lines. Asserting the delta (not an
            // absolute line) is robust to any constant line offset a test runner's
            // module transform introduces.
            expect(second.line - first.line).toBe(1);
        });

        it('walks up the stack with depth', () => {
            const inner = () => Pinpoint.location(1); // depth 1 → inner's caller

            const mark = Pinpoint.location(); // depth 0 → this line
            const up = inner(); // inner() is one source line below `mark`

            expect(up.filename).toContain('index.js');

            // depth 1 resolves to where inner() was invoked — one line below `mark`.
            expect(up.line - mark.line).toBe(1);
        });
    });
});
