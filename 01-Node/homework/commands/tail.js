module.exports = (arch)=>{
    fs.readFile(arch, 'utf8', function(err, files){
        if (err) throw err;
        let long = files.split('\n').length
        process.stdout.write(files.split('\n').splice(long-6).join('\n'));
        process.stdout.write("\nprompt > ");
    })
}