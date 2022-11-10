let posts = [];
let IdCounter = 0;
const STATUS_USER_ERROR = 422;


function Post(author, title, contents){
    this.id = 0;
    this.author = author;
    this.title = title;
    this.contents = contents;
    this.autoID();
}

Post.prototype.autoID = function (){
    IdCounter++;
    this.id = IdCounter;
}

const createPost = (req, res)=>{
    const {  author, title, contents } = req.body
    // console.log(body);
    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibieron los parámetros necesarios para crear el Post'});
    }
    let newPost = new Post(author, title, contents);
    posts.push(newPost);
    res.status(200).json(newPost);
}

const createPostAuthor = (req, res)=>{
    const { body } = req;
    const { author } = req.params;
    // console.log('BODY', body);
    // console.log('AUTH', author);
    if (!body.hasOwnProperty('title') || !body.hasOwnProperty('contents')) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibieron los parámetros necesarios para crear el Post'});
    }

    const newPost = new Post(author, body.title, body.contents);
    posts.push(newPost);
    res.status(200).json(newPost);
}

const readPost = (req, res)=>{
    const { query } = req
    // console.log(body);
    if (query.hasOwnProperty('term')) {
        return res.status(200)
            .json(posts.filter((post)=> post.title.includes(query.term) || post.contents.includes(query.term)));
    }
    res.status(200).json(posts);
}

const readPostauthor = (req, res)=>{
    const { author } = req.params
    // console.log(body);
    let results = posts.filter((post)=> post.author === author);
    if (results.length < 1) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No existe ningun post del autor indicado'});
    }
    res.status(200).json(results);
}

const readPostAuthorTitle = (req, res)=>{
    const { author, title } = req.params
    // console.log(body);
    let results = posts.filter((post)=> post.author === author && post.title === title);
    if (results.length < 1) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No existe ningun post con dicho titulo y autor indicado'});
    }
    res.status(200).json(results);
}

const deletePost = (req, res)=>{
    const { body } = req
    // console.log(body);
    if (!body.hasOwnProperty('id')) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibio parametro ID'});
    }
    let postFound = posts.find((post)=> post.id === parseInt(body.id));
    if (!postFound) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibio un ID valido'});
    }
    posts = posts.filter((post)=> post.id !== body.id);
    res.status(200).json({ success: true});
}

const deletePostsAuthor = (req, res)=>{
    const { body } = req
    // console.log(body);
    if (!body.hasOwnProperty('author')) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No existe el autor indicado'});
    }
    let postFound = posts.find((post)=> post.author === body.author);
    if (!postFound) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No existe el autor indicado'});
    }
    postsDeleted = posts.filter((post)=> post.author === body.author);
    posts = posts.filter((post)=> post.author !== body.author);
    res.status(200).json(postsDeleted);
}

const updatePost = (req, res)=>{
    const { body } = req
    // console.log(body);
    if (!body.hasOwnProperty('title') || !body.hasOwnProperty('contents') || !body.hasOwnProperty('id')) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibieron los parámetros necesarios para modificar el Post'});
    }
    let postFound = posts.find((post)=> post.id === parseInt(body.id));
    if (!postFound) {
        return res.status(STATUS_USER_ERROR)
            .json({ error: 'No se recibio un ID valido'});
    }
    postFound.title = body.title;
    postFound.contents = body.contents;
    res.status(200).json(postFound);
}

module.exports={
    posts,
    createPost,
    createPostAuthor,
    readPost,
    readPostauthor,
    readPostAuthorTitle,
    deletePost,
    deletePostsAuthor,
    updatePost,
}