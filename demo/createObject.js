// 方式一：使用{}创建
// o = {}
// o.name = 'Tom';
// o.age = '20';
// console.log(o instanceof Object);
// console.log(o.name);
// console.log(o.age);

// 方式二：使用new Object()创建
// o = new Object()
// console.log(o instanceof Object)
// o.name = 'Tom'
// o.sysname = function(){
//     console.log(this.name)
// }
// o.sysname()


//方式三：使用字面量方式创建
o = {name:'Tom'}
console.log(o instanceof Object)
o.age = 20
console.log(o.age)
