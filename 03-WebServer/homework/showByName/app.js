var fs  = require("fs")
var http  = require("http")

// Escribí acá tu servidor
http.createServer((req, res)=>{
    if (req.url==='/arcoiris%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/arcoiris_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
    else if (req.url==='/badboy%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/badboy_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
    else if (req.url==='/code%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/code_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
    else if (req.url==='/arcoiris%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/arcoiris_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
    else if (req.url==='/resaca%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/resaca_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
    else if (req.url==='/retrato%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/retrato_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
    else if (req.url==='/sexy%20doge'){
        res.writeHead(200, {'Content-Type':'image/jpg'});
        fs.readFile('./images/sexy_doge.jpg', (err, data)=>{
            if (!err) return res.end(data)
            throw new Error(err)
        })
    }
}).listen(1337, '127.0.0.1')