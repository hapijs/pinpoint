### `location(depth)`

Returns the filename and line number of the caller in the call stack where:

- `depth` - the distance from the `location()` function in the call stack. Defaults to `0` (immediate caller); each increment walks one frame further up.

Returns an object with the `filename` and `line` number.
