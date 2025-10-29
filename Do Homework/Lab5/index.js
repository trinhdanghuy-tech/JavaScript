const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            
            resolve("Trinh Dang Huy");
        }, 2000);
    });
};
// const test = myPromise();
// console.log("test: ", test);
// myPromise();
// setTimeout(() => {
//     console.log("test after 3s: ", test);
// }, 3000);

console.log(1);
myPromise().then(function(result) {
    console.log("result: ", result);
    
});

console.log(2);
