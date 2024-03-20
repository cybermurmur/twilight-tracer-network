# twilight-tracer-network

A lightweight network tracing library for node.js applications, designed to help developers understand and debug network request paths with ease.

## Installation

Install `twilight-tracer-network` using npm:

```
npm install twilight-tracer-network
```

## Usage

To use `twilight-tracer-network`, simply require and instantiate it, then call the `trace` method with a URL:

```javascript
const TwilightTracerNetwork = require('twilight-tracer-network');
const tracer = new TwilightTracerNetwork();

tracer.on('completed', (data) => {
console.log(`Trace completed to \${data.url}`);
console.log(`Status Code: \${data.statusCode}`);
console.log(`Duration: \${data.duration}ms`);
console.log(`IP Address: \${data.ipAddress}`);
});

tracer.on('error', (error) => {
console.error(`Trace failed: \${error.message}`);
});

tracer.trace('https://www.example.com');
```

## License

This project is licensed under the MIT License.
