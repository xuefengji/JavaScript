// 方式一：使用{}创建
// o = {}
// o.name = 'Tom';
// o.age = '20';
// console.log(o instanceof Object);
// console.log(o.name);
// console.log(o.age);

// 方式二：使用new Object创建
o = new Object()
console.log(o instanceof Object)
o.name = 'Tom'
o.sysname = function(){
    console.log(this.name)
}
o.sysname()