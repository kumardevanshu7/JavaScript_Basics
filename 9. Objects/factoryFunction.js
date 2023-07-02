function createCourse() {
  let course = {
    lecture: 10,
    section: 3,
    title: "Boot-Strap Course",
    notes: {
      intro: "Welcome to Course!",
    },
    enroll() {
      console.log("You are in...");
    },
  };

  return course;
}

let ans = createCourse();
ans.enroll();
console.log(ans.section);
