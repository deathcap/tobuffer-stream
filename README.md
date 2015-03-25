# tobuffer-stream

Stream to convert typed arrays and `ArrayBuffers` to `Buffer` objects

Usage:

    var toBufferStream = require('tobuffer-stream');

    somewhere.pipe(toBufferStream)

[Typed arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays?redirectlocale=en-US&redirectslug=JavaScript%2FTyped_arrays)
are converted with [typedarray-to-buffer](https://www.npmjs.com/package/typedarray-to-buffer), avoiding copying.

Useful for use with [browserify](https://www.npmjs.com/package/browserify), where browsers
may emit data using (unaugmented) `Uint8Array` (etc.), but the augmented [Buffer](https://www.npmjs.com/package/buffer)
object type is desired. See also [workerstream](https://www.npmjs.com/package/workerstream),
[websocket-stream](https://www.npmjs.com/package/websocket-stream).

## License

MIT

