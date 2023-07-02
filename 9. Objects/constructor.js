function Course(title, section, lecture) {
  this.title = title;
  this.section = section;
  this.lecture = lecture;
  this.enroll = function () {
    console.log("You IN...");
  };
}

// creating 1st object
let newCourse = new Course("Hello", 6, 10);
newCourse.enroll();
console.log(newCourse.section);

// creating 2nd object
let newCourse1 = new Course("Hello Dev", 7, 101);
newCourse1.enroll();
console.log(newCourse1.section);
console.log(newCourse1.lecture);
