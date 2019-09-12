import * as Pinpoint from '..';
import * as Lab from '@hapi/lab';


const { expect } = Lab.types;


// location()

Pinpoint.location();
Pinpoint.location(1);

expect.type<Pinpoint.location.Location>(Pinpoint.location());
expect.type<string>(Pinpoint.location().filename);
expect.type<number>(Pinpoint.location().line);

expect.error(Pinpoint.location(1, 2));
expect.error(Pinpoint.location('1'));
