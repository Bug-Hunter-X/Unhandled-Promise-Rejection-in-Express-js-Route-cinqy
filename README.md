# Unhandled Promise Rejection in Express.js Route

This example demonstrates a common error in Express.js applications where asynchronous operations within routes fail silently due to unhandled promise rejections.  The server might appear to run without errors, but requests to the failing route will not produce a response, and you might not receive any error logs.

## Bug

The `bug.js` file contains an Express.js route that performs an asynchronous operation.  If this operation throws an error, the error is not caught, leading to an unhandled promise rejection.  This can result in unexpected server behavior and the application crashing without explicit error messages.

## Solution

The `bugSolution.js` file shows the corrected code.  A `.catch` block is added to explicitly handle errors, preventing silent failures.  The error can be logged or used to send an appropriate error response to the client.  For production applications, using a centralized error handler is best practice.