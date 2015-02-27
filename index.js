module.exports = {

    stderr: function(callback, addl) {
        oldstderr = process.stderr.write;
        process.stderr.write = (function(write) {
            return function(string, encoding, fd) {
                if(addl) write.apply(process.stderr, arguments)
                callback(string, encoding, fd)
            }
        })(process.stderr.write)

		return function() {
			process.stderr.write = oldstderr;
		}
    },

    stdout: function(callback, addl) {
        oldstdout = process.stdout.write;
        process.stdout.write = (function(write) {
            return function(string, encoding, fd) {
                if(addl) write.apply(process.stdout, arguments)
                callback(string, encoding, fd)
            }
        })(process.stdout.write)

		return function() {
			process.stdout.write = oldstdout;
		}
    }

};

