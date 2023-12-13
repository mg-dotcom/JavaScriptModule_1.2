//3. create object by using Class
//javascript is a prototype based, not class base
//syntactic sugar

class Circle {
    constructor(r) {
      this.radius = r;
    }
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getRadius() {
      return this.radius;
    }
  }
  
  // เริ่มด้วย Constructor
  const c1 = new Circle(2);
  const c2 = new Circle(3);
  const c3 = new Circle(4);
  // ตามด้วย เรียกใช้ fuction
  console.log(c1.area());
  console.log(c2.area());
  console.log(c3.area());
  console.log(c1.getRadius());
  console.log(c2.getRadius());
  console.log(c3.getRadius());
  
  console.log(Object.prototype.isPrototypeOf(c1)); //true
  console.log(Circle.prototype.isPrototypeOf(c1)); //true