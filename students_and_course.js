function Student(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function(){
  return `${this.firstName} ${this.lastName}`;
}

// console.log(studentA.name());

Student.prototype.enroll = function(course){
  if (!this.courses.includes(course) && !this.hasConflict(course)){
    this.courses.push(course);
    course.enrolledStudents.push(this);
  };
}

Student.prototype.hasConflict = function(course) {
  return this.courses.some((el) => el.conflictsWith(course));
}

Student.prototype.courseLoad = function(){
  let result = {};
  this.courses.forEach(function(course){
    let dept = course.department;
    result[dept] = 0;
  });

  this.courses.forEach(function(course){
    let dept = course.department;
    console.log(dept);
    result[dept] += course.numberOfCredits;
  });

  return result;
}

function Course(name, department, numberOfCredits, timeBlock, days){
  this.name = name;
  this.department = department;
  this.numberOfCredits = numberOfCredits;
  this.enrolledStudents = [];
  this.timeBlock = timeBlock;
  this.days = days;
}

Course.prototype.students = function() {
  return this.enrolledStudents.map((student) => student.name());
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}

Course.prototype.conflictsWith = function(otherCourse){
  let result = false;

  if (this.timeBlock === otherCourse.timeBlock){
    this.days.forEach(function(day){

      if (otherCourse.days.includes(day)){
        console.log(day);
        result = true;
      };
    });
  };

  return result;
}

studentA = new Student("Hi", "There");
studentB = new Student("Jim", "Curry");

course1 = new Course("Biology", "Science", 4, 3, ['mon', 'wed', 'fri']);
course2 = new Course("Perl", "CS", 9, 5, ['tue', 'wed']);
course3 = new Course("Java", "CS", 3, 3, ['mon', 'wed', 'fri']);

studentA.enroll(course1);
studentA.enroll(course2);
studentA.enroll(course3);

// console.log(course3.conflictsWith(course1));


// course3.addStudent(studentB);

// console.log(course3.students());

console.log(studentA.courses);
