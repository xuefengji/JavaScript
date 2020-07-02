// 方式一：使用{}创建
// var o = {}
// o.name = 'Tom';
// o.age = '20';
// console.log(o instanceof Object);
// console.log(o.name);
// console.log(o.age);

// 方式二：使用new Object()创建
// var o = new Object()
// console.log(o instanceof Object)
// o.name = 'Tom'
// o.sysname = function(){
//     console.log(this.name)
// }
// o.sysname()


//方式三：使用字面量方式创建
// var o = {name:'Tom'}
// console.log(o instanceof Object)
// o.age = 20
// console.log(o.age)


//使用工厂模式创建
function createObject(){

}


//方式五：使用构造函数创建
// function Person(name){
//     this.name = name
// }
// o = new Person('Tom');
// console.log(o instanceof Object)
// o.sysName = function (){
//     console.log(this.name)
// }
// o.sysName()
// o1 =  new Person('Bob');
// console.log(o1 instanceof Object)
// o1.sysName = function (){
//     console.log(this.name)
// }
// o1.sysName()



// 方式六：使用原型方式创建
function Person(){
    
}
Person.prototype.name = 'Tom'
Person.prototype.arry = [1,2,3]
Person.prototype.sysName = function(){
    console.log(this.name)
}

o = new Person()
o1 = new Person()

// o.sysName()
// o1.sysName()
console.log(o.arry)
console.log(o1.arry)
o.arry.push(4)
console.log(o.arry)
console.log(o1.arry)





// 方式七：使用原型+构造函数方式创建