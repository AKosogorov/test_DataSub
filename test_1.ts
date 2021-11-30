abstract class AClass {

  Numbers: Array<number> = [];

  constructor(n: number) {
    this.fill(n);
  };

  private fill(num: number) {

    for (let i = 0; i < num; i++) {
      const randomNumber = Math.round(Math.random() * 10);
      this.Numbers.push(randomNumber);
    };
    
  };

  protected factorial() {    

    return this.Numbers.map((item, index) => {
      
      return getFactorial(item);      

      function getFactorial(num: number): number {        
        
        let factorial = 1;

        while (num) {
          factorial *= num--;
        };
        
        return factorial;
      };

    });    

  };

  abstract sort(): number[];

};

class Class1 extends AClass {  
  
  sort() {
    this.Numbers.sort((a, b) => a - b);
    return this.factorial();
  };
};

class Class2 extends AClass {
  
  sort() {
    this.Numbers.sort((a, b) => b - a);
    return this.factorial();
  };
};

const class1 = new Class1 (7);
console.log('Numbers 1:', class1.Numbers);
console.log('Отсортированный массив факториалов 1: ',class1.sort());

const class2 = new Class2 (5);
console.log('Numbers 2:', class2.Numbers);
console.log('Отсортированный массив факториалов 2: ',class2.sort());

