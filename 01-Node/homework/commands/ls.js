var fs = require('fs');
module.exports = () => {
    fs.readdir('.', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
            return process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    })
}