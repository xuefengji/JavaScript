#### Promise

Promise状态：
初始化状态：pending
异步操作成功状态：由 pending --》resolve状态
异步操作失败状态：由 pending --》reject状态

Promise 是一个构造函数，接收一个函数作为参数，可以创建Promise示例
```
let p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成Promise');
        resolve('要返回的数据可以任何数据例如接口返回数据');
    }, 2000);
});
```
可以发现使用 node 进行执行时，会过 2 秒中打印出来‘执行完成Promise'



#### async/await

await : 将一个Promise 对象转换成普通的对象

async：使用了 await 的必须要在包含的函数前添加 async ，否则会报错

