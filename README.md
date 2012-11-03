loghooks-node
==================
###Simple helper to hook stdout, console log to remote clients, file, or custom function

#### Example

```javascript
var hook = require('loghooks-node');
hook.stdout(hook.tlsclient(8888, 'key.pem', 'cert.pem'), AlsoPrintToStdout=false);
```

See the test-* files for examples

There are many logging modules out there, but you may have used console.log, or stdout in
existing code, right?

You would have to go back and rework that..  OR..  Just hook stdout with this module.

Supported are:
TCP client (connect to you app for live log updates over telnet)
TLS client (like TCP but encrypted using tls/ssl)
File (just write to a file)
Uncaught (hook uncaught exceptions)
Custom functions (use your function to handle console.log)

