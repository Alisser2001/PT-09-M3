const commands = require('./commands/index');

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var entrada = data.toString().trim().split(' '); // remueve la nueva línea
    if (commands.hasOwnProperty(entrada[0])) {
        cmd=entrada.shift()
        commands[cmd](entrada.join(' '))
    } else {
        process.stdout.write(`No se reconoce el comando ${entrada[0]}`)
    }
    process.stdout.write('\nprompt > ');
});