/**
 * 类
 * 类里的方法不要加function
 * 多个方法之间不需要逗号
 * @public
 */
class Person {
    // 实例属性
    name: string = "A";
    age: number = 18;
    // static 创建类属性
    static perporty: number = 10;
    // 只读属性
    readonly id: number = 100;
    // 方法前加static 也能变成类方法
    sayHi() {
        console.log("Hi");
    }
}

const p = new Person();
console.log(p.name);
console.log(Person.perporty);


/**
 * 构造函数：constructor
 * 
 */
class Dog {
    name: string;
    age: number;
    voice: string;

    constructor(name: string, age: number, voice: string) {
        this.name = name;
        this.age = age;
        this.voice = voice;
        console.log(
            "类似C++的构造函数,每次实例化都会调用"
        );
    }

    bark() {
        console.log(this.voice);
    }
}
const hsq = new Dog("哈士奇", 5, "汪汪");
hsq.bark();

/**
 * 继承：
 * extends：继承于父类。相当于copy一份父类的属性与方法。
 * super：就相当于父类。super.bark() = 调用父类的bark
 * 同名函数：子类会覆盖父类（方法重写）
 * 属性和函数 均为就近查找
 */

var that:any;
class Animal {
    name: string;
    age: number;
    voice: string;

    protected p1: number;

    constructior(name: string, age: number, voice: string, p1: number) {
        that = this; // 用全局变量接管this（储存实例化对象）

        // this指向实例化对象
        this.name = name;
        this.age = age;
        this.voice = voice;

        this.p1 = p1;

        var btn = document.createElement("button");
        btn.onclick = this.emit;
    }

    // 外面this指向方法调用者
    bark() {
        console.log(`我在${this.voice}`);
    }
    emit() {
        console.log(this); // 指向调用者 btn对象
        console.log(that.name); // 指向实例化对象
        console.log("btn clicked")
    }
}

class Cat extends Animal {
    p_cat: string; // 可以追加属性

    constructor(name: string, age: number, voice: string, p1: number, p_cat: string) {
        // 继承父类的函数等，要用父类的构造函数，就得super
        // 因为同名函数会被覆盖，构造函数也不例外
        // 不能直接用父类的函数（里面带this），因为父类的this指向父类
        super();  // 调用父类中的构造函数，把构建子类的数据传到父类

        // super 要在子类this之前（父类构造函数要在子类之前）
        this.name = name; // 子类自己的
        this.voice = voice + "hhh";  // 这里不要用super.voice，因为已经在调用构造函数了
    }

    bark(): void {
        console.log("喵喵喵喵");
        super.bark() // 调用父类函数
    }
}

// const cat = new Cat("英短", 18, "喵喵", 1, "a");
// console.log(cat.voice);
// cat.bark();

/**
 * 抽象类
 * abstract:一般只作为父类，不能被用于创建对象。
 * 
 * 抽象方法
 * 只能设置在抽象类里，子类必须重写它(有点像 C++ 的头文件)
 */
abstract class AA {
    abstract bark(): void;
}
// const aa = new AA(); // 报错


/**
 * 接口:定义一个类中 应该包含哪些属性和方法
 * 与自定义类型差不多，但是自定义类型只能定义1个，接口可以多个，内容属性会合并
 * 接口可以在定义类时，限制类的结构
 * 接口属性不能有实际值(像抽象类)
 */

type myType2 = {
    name: string;
    age: number;
}

interface myInerface {
    name: string;
    age: number;
}
interface myInerface {
    gender: string;
    age: number;
    fun1(): void;
}

const obj: myInerface = {
    name: "aa0",
    age: 11,
    gender: "男",
    fun1: void {

    }
}
console.log(obj)

/**
 * 定义类时，可以使类实现一个接口
 * 要把接口里的函数与属性都写上(这点接口又有点像抽象类)
 */
class MyClass implements myInerface {
    name: string;
    age: number;
    gender: string;
    fun1(): void {

    }

}
/**
 * public： 公有属性 任意位置 访问/修改
 * protected：当前类及其子类
 * private：私有属性 类内访问
 */
class PropertyType {

    public p1: string;
    private _p2: number;

    constructor(p1: string, _p2: number) {
        this.p1 = p1;
        this._p2 = _p2;
    }

    get_P2() {
        return this._p2;
    }
    set_P2(p2: number) {
        this._p2 = p2;
    }

    // 可以get后直接跟属性名（不带_也行），这样就可以用 .属性 获取了 *ES6语法


    get p2() {
        return this._p2;
    }
}
var p1 = new PropertyType("a", 10);
console.log(p1.p2)


/**
 * 简写法,不用在外面先定义 a:string了
 */
class P {
    constructor(public a: string) {

    }
}


/**
 * 泛型（有点像c++的template
 */

function fn<T, K>(a: T, b: K): T {
    return a;
}
fn(1012, 1); // 自定推断
fn<string, number>("hh", 2);  // 自行指定 


interface It {
    length: number;
}

// 必须是It的实现类（子类
function fn3<T extends It>(a: T) {

}
fn3({ length: 10 });

class C1<T>{
    name: T;
}
