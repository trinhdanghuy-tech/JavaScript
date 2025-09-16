var posts = 'http://localhost:3000/posts';

fetch(posts)
    .then(function (response) {
        return response.json();
    })
    .then(function (posts) {
        console.log(posts);
    })