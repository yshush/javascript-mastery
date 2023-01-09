// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('성훈', '양');
student.firstName = '엘리';
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';
