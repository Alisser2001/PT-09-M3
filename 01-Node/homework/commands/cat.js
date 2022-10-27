module.exports = (arch)=>{
    fs.readFile(arch, 'utf8',  function (err, files) {
        if (err) throw err;
        process.stdout.write(files);
        process.stdout.write("prompt > ");
    })
}