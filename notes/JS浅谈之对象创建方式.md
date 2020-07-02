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



#### 方式三：使用字面量方式创建
示例：
```
//方式三：使用字面量方式创建
o = {name:'Tom'}
console.log(o instanceof Object)    //true
o.age = 20
console.log(o.age)        //20
```
此方式类似于方式二

#### 方式四：使用工厂模式创建


#### 方式五：使用构造函数创建
示例：
```
//方式五：使用构造函数创建
function Person(name){
    this.name = name
}
o = new Person('Tom');
console.log(o instanceof Object)    //true
o.sysName = function (){
    console.log(this.name)    
}
o.sysName()   //Tom
o1 =  new Person('Bob');
console.log(o1 instanceof Object)   //true
o1.sysName = function (){
    console.log(this.name)
}
o1.sysName()     //Bob
```

#### 方式六：使用原型方式创建
```
function Person(){
    
}
Person.prototype.name = 'Tom'
Person.prototype.sysName = function(){
    console.log(this.name)
}

o = new Person()
o1 = new Person()

o.sysName()     //Tom
o1.sysName()   //Tom
```
使用原型创建对象时，多个对象得属性可以共享
缺点：如果共享的数据类型是引用性类型，则一个对象对此数据进行改变时，其他对象访问此数据时，将是被改变过的数据,如下：
```
function Person(){
    
}
Person.prototype.name = 'Tom'
Person.prototype.arry = [1,2,3]
Person.prototype.sysName = function(){
    console.log(this.name)
}

o = new Person()
o1 = new Person()
console.log(o.arry)      //[ 1, 2, 3 ]
console.log(o1.arry)     //[ 1, 2, 3 ]
o.arry.push(4)
console.log(o.arry)      //[ 1, 2, 3, 4 ]
console.log(o1.arry)     //[ 1, 2, 3, 4 ]
```

#### 方式七：使用原型+构造函数方式创建
```
function Person(arry){
     this.arry1 = arry
}
Person.prototype.name = 'Tom'
Person.prototype.sysName = function(){
    console.log(this.name)
}

o = new Person([1,2,3])
o1 = new Person([1,2,3])
o.sysName()
o1.sysName()
console.log(o.arry1)    //[1,2,3]
console.log(o1.arry1)   //[1,2,3]
o.arry1.push(4)
console.log(o.arry1)    //[1,2,3,4]
console.log(o1.arry1)   //[1,2,3]
```
