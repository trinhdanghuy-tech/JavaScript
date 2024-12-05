//_____________________________________________//
//----------------Event Listener--------------//
// 1. Xử lý nhiều việc khi events xảy ra
// 2. Lắng nghe / hủy bỏ lắng nghe
var btn = document.querySelector('.btn');
function viec1() {
    console.log('Viec 1')
}
btn.addEventListener('click', viec1)
setTimeout(() => {
    btn.removeEventListener('click', viec1);
}, 4000)

