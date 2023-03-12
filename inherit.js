class Parent {
    m1() {
        console.log("This is parent class-1")
    }
    m2() {
        console.log("This is parent class-2")
    }
}
class Child extends Parent {
    m3() {
        console.log("This is child class")
    }
}
let pare1 = new Parent() 
pare1.m2()

let c1 = new Child() 
c1.m1()
c1.m2()
c1.m3()