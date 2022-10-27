module.exports = (arch)=>{
    fs.readFile(arch, 'utf8',  function (err, files) {
        if (err) throw err;
        process.stdout.write(files.split('\n').splice(0, 5).join('\n'));
        process.stdout.write("\nprompt > ");
    })
}