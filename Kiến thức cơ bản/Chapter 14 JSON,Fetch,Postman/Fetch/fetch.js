var postAPI = 'https://jsonplaceholder.typicode.com/users'

fetch(postAPI)
    .then(function(response){
        return response.json()
        // JSON.parse: JSON -> JS Type
    })
    .then(function(posts){  
        var htmls = posts.map(function(post){
            return `<li>
                <h2>${post.name}</h2>
                <p>${post.email}</p>
            </li>`
        })
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;
    })
    .catch(function(err){
        console.log('Lỗi: ' + err);
    });
