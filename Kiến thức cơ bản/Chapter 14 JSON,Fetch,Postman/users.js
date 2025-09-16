


var users = [
    {
        id: 1,
        name: "Kiên đàm"
    },
    {
        id: 2,
        name: "Sơn Đặng"
    },
    {
        id: 3,
        name: "Đăng Huy"
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hay quá a ơi'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Bình thường thôi em ơi'
    }
];

//1. Lấy comments
//2. Từ comments lấy ra user_id
//3. Từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise(function (resolve){
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    })
}
function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000)
    })
}
getComments()
    .then(function(comments) {
        //1. Lấy comments
        //2. Từ comments lấy ra user_id
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });
        //3. Từ user_id lấy ra user tương ứng
        var users = getUsersByIds(userIds);
    });