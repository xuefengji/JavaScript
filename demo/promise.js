
let p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成Promise');
        resolve('要返回的数据可以任何数据例如接口返回数据');
    }, 2000);
});


//使用一个函数包裹 Promise 并返回该 Promise 对象
function automator(){
    return new Promise(function(resolve, reject){
        
    })
}