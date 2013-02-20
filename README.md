A simplified version of a great library: https://github.com/dpweb/loghooks-node. Allows you to grab the Node global process.stdout and process.stderr pipes and listen in.

The API is straightforward. Using either the stderr or the stdout function of the hook library, just pass in a handler function. The optional second argument is a true/false which controls whether or not the data is copied to the original destination or completely intercepted.

        //  Import the library.
    var Hook = require('hook-stdfoo');

        //  Setup up a little container variable for stderr.
    var errors = [];

        //  Intercept messages passed to the stderr pipe and add them to the array of errors.
    Hook.stderr(errors.push, true);

    process.stderr.write('Something catastrophic!');

    //  Now errors == ['Something catastrophic!']

Or if you are running your javascript in the context of a [node-webkit](https://github.com/rogerwang/node-webkit) application:

        //  Import the library.
    var Hook = require('hook-stdfoo');

        //  Intercept messages passed to the stderr and stdout pipes and display them graphically.
    Hook.stdout(writeBlackTextToDOM, true);
    Hook.stderr(writeRedTextToDOM, true);

    function writeBlackTextToDOM (data) {
        document.getElementById('myconsole').innerHTML += '<p style="color:black;" >'+data+'</p>';
    };
    
    function writeRedTextToDOM (data) {
        document.getElementById('myconsole').innerHTML += '<p style="color:red;" >'+data+'</p>';
    };
