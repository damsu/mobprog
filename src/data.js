// Define some student data
var studentData = [{
                    id: 1,
                    name: "JSon Derulo",
                    address: "21 Jump Street",
                    group: "DIN22SP"
},
                {
                    id: 2,
                    name: "John Bon Java",
                    address: "22 Jump Street",
                    group: "DIN23SN"
                }];
				
				var pictures = [{
        id: 0,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'You on your way?',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'http://wac.450f.edgecastcdn.net/80450F/tri1025.com/files/2013/05/normal_me1.jpg',
        likes: 3
    }, {
        id: 1,
        username: 'damien',
        userId: 5,
        caption: 'Hey, it\'s me',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://under30ceo.com/wp-content/uploads/2012/04/instagram.jpg',
        likes: 19
    }, {
        id: 2,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'I should buy a boat',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'https://s-media-cache-ak0.pinimg.com/736x/1e/93/28/1e9328a87eb6654e3a290645a9620c9d.jpg',
        likes: 5
    }, {
        id: 3,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'Look at my mukluks!',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'http://4.bp.blogspot.com/-F_6SfcFHKRE/UIjJKWfbt8I/AAAAAAAAA6w/AK5H_oGl9io/s1600/nature182.jpg',
        likes: 63
    }, {
        id: 4,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://imgs.abduzeedo.com/files/paul0v2/livefolk/livefolk-03.jpg',
        likes: 11
    }, {
        id: 5,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'https://katepattinson1994.files.wordpress.com/2014/04/free-people-2.jpg',
        likes: 11
    }, {
        id: 6,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'This is wicked good ice cream.',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'http://thetechpanda.com/wp-content/uploads/2012/07/instagram.jpg',
        likes: 11
    }, {
        id: 7,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://www.telegraph.co.uk/content/dam/fashion/DEC/Dec3/donatella-gigi-lead-large.jpg',
        likes: 11
    }, {
        id: 8,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'This is wicked good ice cream.',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'http://cdn.rsvlts.com/wp-content/uploads/2014/01/48.-Bruno-Mars.jpg',
        likes: 11
    }, {
        id: 9,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'This is wicked good ice cream.',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'http://thestylespy.com/wp/wp-content/uploads/3ee47de07e0711e3bbf50e7e7eef1a38_7.jpg',
        likes: 11
    }, {
        id: 10,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://data.whicdn.com/images/60119606/large.jpg',
        likes: 11
    }, {
        id: 11,
        username: 'Ben Sparrow',
        userId: 0,
        caption: 'This is wicked good ice cream.',
        face: 'http://kurld.com/images/wallpapers/profile-pictures/profile-pictures-14.jpg',
        pic: 'http://data.whicdn.com/images/63547742/large.jpg',
        likes: 11
    }, {
        id: 12,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://i.dailymail.co.uk/i/pix/2015/12/11/19/2F49AD8700000578-3356493-image-a-2_1449860985376.jpg',
        likes: 11
    }, {
        id: 13,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'http://sizlingpeople.com/wp-content/uploads/2016/02/Kendall-Jenner-Instagram.jpg',
        likes: 11
    }, {
        id: 14,
        username: 'damien',
        userId: 5,
        caption: 'This is wicked good ice cream.',
        face: 'https://scontent-ams3-1.xx.fbcdn.net/v/t1.0-9/10502074_10153145101446416_4071352603442079179_n.jpg?oh=72e67ed294c0bbb6c1bc585be5bf2c1b&oe=58654897',
        pic: 'https://ioneglobalgrind.files.wordpress.com/2012/10/instagram-lg.jpeg',
        likes: 11
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


//var gradeData = [{
//                    id: 1,
//                    studentId: 1,
//                    courseId: 1,
//                    grade: 2
//},
//                {
//                    id: 2,
//                    studentId: 1,
//                    courseId: 2,
//                    grade: 5
//                },
//                {
//                    id: 3,
//                    studentId: 2,
//                    courseId: 1,
//                    grade: 4
//                },
//                {
//                    id: 4,
//                    studentId: 2,
//                    courseId: 2,
//                    grade: 3
//                }];




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
    return pictures;
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

exports.removeStudentById = function (id) {
    var obj_position = null;
    studentData.forEach(function (student, index) {
        if (student.id == id) {
            obj_position = index;
        }
    });
    studentData.splice(obj_position, 1);
}

exports.updateStudentById = function (id, newcontent) {
    var obj_position = null;
    studentData.forEach(function (student, index) {
        if (student.id == id) {
            obj_position = index;
        }
    });
    studentData.splice(obj_position, 1);
    studentData.splice(obj_position, 0, newcontent);
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


exports.removeCourseById = function (id) {
    var obj_position = null;
    courseData.forEach(function (course, index) {
        if (course.id == id) {
            obj_position = index;
        }
    });
    courseData.splice(obj_position, 1);
}

exports.updateCourseById = function (id, newcontent) {
    var obj_position = null;
    courseData.forEach(function (course, index) {
        if (course.id == id) {
            obj_position = index;
        }
    });
    courseData.splice(obj_position, 1);
    courseData.splice(obj_position, 0, newcontent);
}



//Grades
//exports.getAllGradesByStudentId = function (id) {

//    //var gradeData = [];
//    //var iteration = 0;
//    //for (var i = 0; i < studentData.length; i++) {
//    //    for (var j = 0; j < courseData.length; j++) {

//    //        gradeData.push({
//    //            id: iteration,
//    //            student_ID: studentData[i].id,
//    //            course_ID: courseData[j].id,
//    //            grade: 0
//    //        });
//    //        iteration++;

//    //    }
//    //}
//    return gradeData.filter(function (grade) {
//        if (grade.studentId == id) {
//            return grade;
//        }
//    });
//}

////exports.getGradeById = function (id) {
////    return gradeData.filter(function (grade) {
////        if (grade.id == id) {
////            return grade;
////        }
////    });
////}

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