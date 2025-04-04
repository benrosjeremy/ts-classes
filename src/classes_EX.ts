/*Q1*/
class dog{

    name: string;
    age: number;    

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;        
    }   
     bark():string{
        return "woof woof";
    }
}

/*Q2*/
class bankAccount{
accountNumber: string;
balance: number;

constructor(accountNumber: string, balance: number) {
    this.accountNumber=accountNumber;
    this.balance=balance;
}

getbalance():number{
    return this.balance;
}  

}
/*Q3*/

class Vehicle {
    public brand: string;
    protected speed: number;
  
    constructor(brand: string, speed: number) {
      this.brand = brand;
      this.speed = speed;
    }
  
    move(): string {
      return "The vehicle is moving";
    }
  }
  
  class Car extends Vehicle {
    doors: number;
  
    constructor(brand: string, speed: number, doors: number) {
      super(brand, speed);
      this.doors = doors;
    }
  
    honk(): string {
      return "Beep Beep!";
    }
  }
  
  /*Q4*/
  interface Shape {
    getArea(): number;
  }
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }

  /*Q5*/
  class MathUtils {
    static PI: number = 3.14;
  
    static circleArea(radius: number): number {
      return MathUtils.PI * radius * radius;
    }
  }
//   console.log(MathUtils.PI);                 
// console.log(MathUtils.circleArea(5));     

 /*Q6*/

interface Printable {
    print(): string;
  }
  

  class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  }
  

  class Book extends Product implements Printable {
    author: string;
  
    constructor(name: string, price: number, author: string) {
      super(name, price); 
      this.author = author;
    }
  
    print(): string {
      return `Book: ${this.name}, Price: ${this.price}, Author: ${this.author}`;
    }
  }
  
/*Q7*/
class Library {
    private books: Book[];
  
    constructor() {
      this.books = [];
    }
  
    addBook(book: Book): void {
      this.books.push(book);
    }
  
    printAllBooks(): void {
      this.books.forEach((book) => {
        console.log(book.print());
      });
    }
  }
  const library = new Library();

  const book1 = new Book("Harry Potter", 30, "J.K. Rowling");
  const book2 = new Book("The Hobbit", 25, "J.R.R. Tolkien");
  const book3 = new Book("Clean Code", 45, "Robert C. Martin");
  
//   library.addBook(book1);
//   library.addBook(book2);
//   library.addBook(book3);
  
//   library.printAllBooks();