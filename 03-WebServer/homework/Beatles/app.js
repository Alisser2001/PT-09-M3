var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer((req, res)=>{
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8', (err, data)=>{
      if (err) return new Error(err)
      return data
    });
    html = html.replace('{john}', beatles[0].name)
    html = html.replace('{paul}', beatles[1].name)
    html = html.replace('{george}', beatles[2].name)
    html = html.replace('{richard}', beatles[3].name)
    html = html.replace('{textJohn}', beatles[0].birthdate)
    html = html.replace('{textPaul}', beatles[1].birthdate)
    html = html.replace('{textGeorge}', beatles[2].birthdate)
    html = html.replace('{textRichard}', beatles[3].birthdate)
    html = html.replace('{imgJohn}', beatles[0].profilePic)
    html = html.replace('{imgPaul}', beatles[1].profilePic)
    html = html.replace('{imgGeorge}', beatles[2].profilePic)
    html = html.replace('{imgRichard}', beatles[3].profilePic)
    res.end(html)
  } 
  else if(req.url === '/api'){
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(beatles))
  }
  else if(req.url.substring(0, 5)==='/api/'){
    let searchWord = req.url.split('/').pop()
    let name = searchWord.replace('%20', ' ')
    let beatleFound = beatles.find((b)=>b.name===name)
    var html = fs.readFileSync(__dirname + '/beatle.html', 'utf8');
    html=html.replace('{name}', beatleFound.name)
    html=html.replace('{text}', beatleFound.birthdate)
    html=html.replace('{img}', beatleFound.profilePic)
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(html)
  }
  /*else if (req.url==='/api/John%20Lennon'){
    var html = fs.readFileSync(__dirname + '/beatle.html', 'utf8');
    res.writeHead(200, {'Content-Type':'text/html'})
    html = html.replace('{name}', beatles[0].name)
    html = html.replace('{text}', beatles[0].birthdate)
    var longitud = beatles[0].profilePic.split('')
    html = html.replace('{imgJohn}', beatles[0].profilePic)
    res.end(html)
  }
  else if (req.url==='/api/Paul%20McCartney'){
    var html = fs.readFileSync(__dirname + '/beatle.html', 'utf8');
    res.writeHead(200, {'Content-Type':'text/html'})
    html = html.replace('{name}', beatles[1].name)
    html = html.replace('{text}', beatles[1].birthdate)
    html = html.replace('{imgPaul}', beatles[1].profilePic)
    res.end(html)
  }
  else if (req.url==='/api/George%20Harrison'){
    var html = fs.readFileSync(__dirname + '/beatle.html', 'utf8');
    res.writeHead(200, {'Content-Type':'text/html'})
    html = html.replace('{name}', beatles[2].name)
    html = html.replace('{text}', beatles[2].birthdate)
    html = html.replace('{imgGeorge}', beatles[2].profilePic)
    res.end(html)
  }
  else if (req.url==='/api/Richard%20Starkey'){
    var html = fs.readFileSync(__dirname + '/beatle.html', 'utf8');
    res.writeHead(200, {'Content-Type':'text/html'})
    html = html.replace('{name}', beatles[3].name)
    html = html.replace('{text}', beatles[3].birthdate)
    html = html.replace('{imgRichard}', beatles[3].profilePic)
    res.end(html)
  }*/
  else{
    res.writeHead(404); //Ponemos el status del response a 404: Not Found
    res.end(); //No devolvemos nada más que el estado.
    }
}).listen(1337, '127.0.0.1');