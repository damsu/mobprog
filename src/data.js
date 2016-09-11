// Define some student data
var studentData = [{
                    id: 1,
                    name: "Michael Köhl",
                    address: "21 Jump Street",
                    group: "DIN22SP"
},
                {
                    id: 2,
                    name: "John Bon Java",
                    address: "22 Jump Street",
                    group: "DIN23SN"
                }];

// Define some course data
var courseData = [{
                    id: 1,
                    name: "Java For Noobs",
                    description: "You'all need to learn some Java yo, this course will help yo"
},
                {
                    id: 2,
                    name: "GoT History",
                    description: "Join to learn all about the god of tits and wine."
                }];


var gradeData = [];
//gradeData.id = 0;

for (var i = 0; i < studentData.length; i++) {
    for (var j = 0; j < courseData.length; j++) {

        gradeData.push({
            id: id++,
            studentID: studentData.id[i].value,
            courseID: courseData.id[j].value,
            grade: 0
        });

    }
}



// Define some book data
//var bookData = [{
//                    id: 22,
//                    name: "test book 1",
//                    author: 25
//                },
//                {
//                    id: 45,
//                    name: "test book 2",
//                    author: 445
//                }];


//// Define some author data
//var authorData = [
//    {
//        id: 25,
//        name: "John Doe"
//    },
//    {
//        id: 45,
//        name: "Max Tester"
//    }
//];                


// Public functions for other modules to use


//Students
exports.getAllStudents = function () {
    return studentData;
}

exports.getStudentById = function (id) {
    return studentData.filter(function (student) {
        if (student.id == id) {
            return student;
        }
    });
}

exports.addStudent = function (student) {
    studentData.push(student);
}


//Courses
exports.getAllCourses = function () {
    return courseData;
}

exports.getCourseById = function (id) {
    return courseData.filter(function (course) {
        if (course.id == id) {
            return course;
        }
    });
}

exports.addCourse = function (course) {
    courseData.push(course);
}

//Grades
exports.getAllGrades = function () {
    return gradeData;
}

//exports.getGradeById = function (id) {
//    return gradeData.filter(function (grade) {
//        if (grade.id == id) {
//            return grade;
//        }
//    });
//}

//exports.addGrade = function (grade) {
//    gradeData.push(grade);
//}

// Public functions for other modules to use
//exports.getAllBooks = function() 
//{
//    return bookData;
//}

//exports.getBookById = function(id)
//{
//    return bookData.filter(function(book){
//        if(book.id == id)
//        {
//            return book;
//        }
//    });
//}

//exports.addBook = function(book)
//{
//    bookData.push(book);
//}

//exports.getAuthors = function()
//{
//    return authorData;
//}