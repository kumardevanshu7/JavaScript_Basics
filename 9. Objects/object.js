// normal initializing
let lecture = 10;
let section = 3;
let title = "Boot-Strap Course";

// now creation of Object
// basic terminology
// course - Object
// lecture - property
const course = {
  lecture: 10,
  section: 3,
  title: "Boot-Strap Course",

  // nesting
  notes: {
    intro: "Welcome to Course",
  },

  // creation of function in Object
  enroll() {
    console.log("You are enrolled!");
  },
};

let ans = course.enroll();
console.log(ans);
console.log(course.section);
