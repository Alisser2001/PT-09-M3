module.exports = () => {
    return process.stdout.write(process.mainModule.filename)
}