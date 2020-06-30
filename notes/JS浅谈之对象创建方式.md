#### 方式一：使用{}创建
示例：
```
// 方式一：使用{}创建
o = {}
o.name = 'Tom';
o.age = '20';
console.log(o instanceof Object);   //true
console.log(o.name);               //Tom
console.log(o.age);               //20
```

此方法适用于创建简单的对象，而且创建的对象不能复用



#### 方式二：使用new Object()创建
示例：
```
// 方式二：使用new Object创建
o = new Object()
console.log(o instanceof Object)   //true
o.name = 'Tom'
o.sysname = function(){
    console.log(this.name)
}
o.sysname()   //Tom






```