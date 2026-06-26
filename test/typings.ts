import { describe, expectTypeOf, it } from 'vitest';

import * as Pinpoint from '../lib/index.js';

describe('typings', () => {
    describe('location', () => {
        it('return type + signature compile', () => {
            expectTypeOf(Pinpoint.location).toBeFunction();
            expectTypeOf(Pinpoint.location()).toEqualTypeOf<Pinpoint.location.Location>();
            expectTypeOf(Pinpoint.location().filename).toBeString();
            expectTypeOf(Pinpoint.location().line).toBeNumber();
            expectTypeOf(Pinpoint.location(1)).toEqualTypeOf<Pinpoint.location.Location>();
        });

        it('invalid calls rejected', () => {
            // The @ts-expect-error directives are the assertion; the calls still run, so
            // wrap them — a non-numeric depth throws at runtime (the type errors are what we test).
            try {
                // @ts-expect-error depth takes at most one argument
                Pinpoint.location(1, 2);
                // @ts-expect-error depth must be a number
                Pinpoint.location('1');
            } catch {}
        });
    });
});
