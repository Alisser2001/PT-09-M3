// const bodyParser = require("body-parser");
const express = require("express");
const { 
    createPost,
    createPostAuthor,
    readPost,
    readPostauthor,
    readPostAuthorTitle,
    deletePost,
    updatePost,
    deletePostsAuthor,
    posts 
} = require('../routes/post')


// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

//FRONT SIMULADO
// axios.post('/post', {
//     firstName: 'Bruce',
//     lastName: 'Wayne'
//   })
  

// TODO: your code to handle requests

server.route('/posts')
    .post(createPost)
    .get(readPost)
    .put(updatePost)
    .delete(deletePost)

server.get('/posts/:author', readPostauthor);

server.get('/posts/:author/:title', readPostAuthorTitle);

server.post('/posts/author/:author', createPostAuthor);


server.delete('/author', deletePostsAuthor);

module.exports = { posts, server };
