class Parent {
    method1() {
        console.log("This is method of parent class")
    }
    method2() {
        console.log("Which can be accessed by child class!")
    }
    method3() {
        console.log("Also can be accessed by grandchild class!!")
    }
    method4() {
        console.log("Also can be accessed by great grandchild class!!!")
    }
}
class Child extends Parent {

}
class GrandChild extends Child {

}
class greatGrandChild extends Child {
}
let obj = new Child()
let obj1 = new GrandChild()
let obj2 = new greatGrandChild()
obj.method1()
obj1.method2()
obj2.method3()
obj.method4()