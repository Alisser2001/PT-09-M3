var request = require('request');
var date = require('./date');
var pwd = require('./pwd');
var ls = require('./ls');
var echo = require('./echo');
var cat = require('./cat');
var head = require('./head');
var tail = require('./tail');
var curl = require('./curl');
var fs = require('fs');

module.exports = {
    date,
    pwd,
    ls,
    echo,
    cat,
    head,
    tail,
    curl
}