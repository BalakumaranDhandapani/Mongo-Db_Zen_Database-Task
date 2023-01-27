
//use students;

//users

db.users.insertOne({
    "userid": 1,
    "name": "Bharath",
    "email": "bharath@gmail.com",
    "mentorid": 1
})

db.users.insertMany([
    {
        "userid": 2,
        "name": "Raj",
        "email": "raj123@gmail.com",
        "mentorid": 1
    },
    {
        "userid": 3,
        "name": "Sudha",
        "email": "sudha125@gmail.com",
        "mentorid": 2
    },
    {
        "userid": 4,
        "name": "Anu",
        "email": "anushanmugam@gmail.com",
        "mentorid": 3
    },
    {
        "userid": 5,
        "name": "Manikandan",
        "email": "mani_nkandan@gmail.com",
        "mentorid": 2
    }
]);

//////////////////////////////////////////////////////////////////

//Code kata details insertion 

db.codekata.insertMany([
    {
        "userid": 1,
        "problems_solved": 15
    },
    {
        "userid": 2,
        "problems_solved": 25
    },
    {
        "userid": 3,
        "problems_solved": 17
    },
    {
        "userid": 4,
        "problems_solved": 38
    },
    {
        "userid": 5,
        "problems_solved": 52
    }
])

///////////////////////////////////////////////////////////////////

//attendance

db.attendance.insertMany([
    {
        "userid": 1,
        "topicid": 1,
        "class_attended": true
    },
    {
        "userid": 1,
        "topicid": 2,
        "class_attended": true
    },
    {
        "userid": 2,
        "topicid": 1,
        "class_attended": true
    },
    {
        "userid": 2,
        "topicid": 2,
        "class_attended": false
    },
    {
        "userid": 3,
        "topicid": 1,
        "class_attended": false
    },
    {
        "userid": 4,
        "topicid": 2,
        "class_attended": true
    },
    {
        "userid": 5,
        "topicid": 2,
        "class_attended": false
    },
    {
        "userid": 5,
        "topicid": 3,
        "class_attended": true
    },
    {
        "userid": 3,
        "topicid": 2,
        "class_attended": true
    },
    {
        "userid": 4,
        "topicid": 1,
        "class_attended": false
    }
]);

//Mentors
db.mentors.insertMany([
    {
        "mentorid": 1,
        "mentorname": "SaiMohan",
        "mentor_email": "saimohan@gmail.com"
    },
    {
        "mentorid": 2,
        "mentorname": "RajVasanthan",
        "mentor_email": "RajVasanthan213@gmail.com"
    },
    {
        "mentorid": 3,
        "mentorname": "Vishnu",
        "mentor_email": "vishnuvardhan@gmail.com"
    },
    {
        "mentorid": 4,
        "mentorname": "Raghav",
        "mentor_email": "Raghav888@gmail.com"
    }
])

//Topics

db.topics.insertMany([
    {
        "topicid": 1,
        "title": "HTML",
        "topic_date": new Date("01-oct-2020")
    },
    {
        "topicid": 2,
        "title": "CSS",
        "topic_date": new Date("08-oct-2020")
    },
    {
        "topicid": 3,
        "title": "JavaScript",
        "topic_date": new Date("12-oct-2020")
    },
    {
        "topicid": 4,
        "title": "React",
        "topic_date": new Date("21-oct-2020")
    },
    {
        "topicid": 5,
        "title": "MongoDB",
        "topic_date": new Date("28-oct-2020")
    },
    {
        "topicid": 6,
        "title": "Nodejs",
        "topic_date": new Date("01-Nov-2020")
    }
])


///

db.attendance.insertMany([
    {
        "userid": 1,
        "topicid": 4,
        "class_attended": true
    },
    {
        "userid": 2,
        "topicid": 4,
        "class_attended": true
    },
    {
        "userid": 3,
        "topicid": 4,
        "class_attended": false
    },
    {
        "userid": 4,
        "topicid": 4,
        "class_attended": false
    },
    {
        "userid": 5,
        "topicid": 4,
        "class_attended": true
    },
    {
        "userid": 1,
        "topicid": 5,
        "class_attended": false
    },
    {
        "userid": 2,
        "topicid": 5,
        "class_attended": true
    },
    {
        "userid": 3,
        "topicid": 5,
        "class_attended": true
    },
    {
        "userid": 5,
        "topicid": 5,
        "class_attended": true
    },
    {
        "userid": 1,
        "topicid": 6,
        "class_attended": true
    },
    {
        "userid": 2,
        "topicid": 6,
        "class_attended": false
    },
    {
        "userid": 3,
        "topicid": 6,
        "class_attended": true
    },
    {
        "userid": 5,
        "topicid": 6,
        "class_attended": true
    },
    {
        "userid": 4,
        "topicid": 6,
        "class_attended": true
    },
])

//Tasks

db.tasks.insertOne({
    "taskid": 1,
    "userid": 1,
    "topicid": 1,
    "task_name": "Basics of HTML",
    "submission_date": new Date("03-oct-2020"),
    "is_submitted": true
})

db.tasks.insertMany([
    {
        "taskid": 1,
        "userid": 2,
        "topicid": 1,
        "task_name": "Basics of HTML",
        "submission_date": new Date("03-oct-2020"),
        "is_submitted": false
    },
    {
        "taskid": 1,
        "userid": 3,
        "topicid": 1,
        "task_name": "Basics of HTML",
        "submission_date": new Date("03-oct-2020"),
        "is_submitted": false
    },
    {
        "taskid": 1,
        "userid": 4,
        "topicid": 1,
        "task_name": "Basics of HTML",
        "submission_date": new Date("03-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 2,
        "userid": 1,
        "topicid": 2,
        "task_name": "Overview of CSS",
        "submission_date": new Date("09-oct-2020"),
        "is_submitted": false
    },
    {
        "taskid": 2,
        "userid": 2,
        "topicid": 2,
        "task_name": "Overview of CSS",
        "submission_date": new Date("09-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 2,
        "userid": 3,
        "topicid": 2,
        "task_name": "Overview of CSS",
        "submission_date": new Date("09-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 2,
        "userid": 4,
        "topicid": 2,
        "task_name": "Overview of CSS",
        "submission_date": new Date("09-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 2,
        "userid": 5,
        "topicid": 2,
        "task_name": "Overview of CSS",
        "submission_date": new Date("09-oct-2020"),
        "is_submitted": false
    },
    {
        "taskid": 3,
        "userid": 1,
        "topicid": 3,
        "task_name": "Javascript-Functions",
        "submission_date": new Date("13-oct-2020"),
        "is_submitted": false
    },
    {
        "taskid": 3,
        "userid": 3,
        "topicid": 3,
        "task_name": "Javascript-Functions",
        "submission_date": new Date("13-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 3,
        "userid": 4,
        "topicid": 3,
        "task_name": "Javascript-Functions",
        "submission_date": new Date("13-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 4,
        "userid": 1,
        "topicid": 4,
        "task_name": "React-Hooks & States",
        "submission_date": new Date("21-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 4,
        "userid": 2,
        "topicid": 4,
        "task_name": "React-Hooks & States",
        "submission_date": new Date("21-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 4,
        "userid": 4,
        "topicid": 4,
        "task_name": "React-Hooks & States",
        "submission_date": new Date("21-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 4,
        "userid": 5,
        "topicid": 4,
        "task_name": "React-Hooks & States",
        "submission_date": new Date("21-oct-2020"),
        "is_submitted": false
    },
    {
        "taskid": 5,
        "userid": 3,
        "topicid": 5,
        "task_name": "MongoDB-Database",
        "submission_date": new Date("29-oct-2020"),
        "is_submitted": true
    },
    {
        "taskid": 5,
        "userid": 4,
        "topicid": 5,
        "task_name": "MongoDB-Database",
        "submission_date": new Date("29-oct-2020"),
        "is_submitted": true
    }
])

//Company Drives-Placement

db.company_drives.insertMany([
    {
        "userid": 1,
        "drive_date": new Date("12-oct-2020"),
        "Company": "Flipkart"
    },
    {
        "userid": 2,
        "drive_date": new Date("15-oct-2020"),
        "Company": "Amazon"
    },
    {
        "userid": 3,
        "drive_date": new Date("15-oct-2020"),
        "Company": "Amazon"
    },
    {
        "userid": 4,
        "drive_date": new Date("12-oct-2020"),
        "Company": "Flipkart"
    },
    {
        "userid": 1,
        "drive_date": new Date("20-oct-2020"),
        "Company": "Facebook"
    },
    {
        "userid": 1,
        "drive_date": new Date("20-oct-2020"),
        "Company": "Facebook"
    },
    {
        "userid": 5,
        "drive_date": new Date("20-oct-2020"),
        "Company": "Facebook"
    },
    {
        "userid": 4,
        "drive_date": new Date("27-oct-2020"),
        "Company": "GUVI"
    },
    {
        "userid": 1,
        "drive_date": new Date("27-oct-2020"),
        "Company": "GUVI"
    },
    {
        "userid": 2,
        "drive_date": new Date("27-oct-2020"),
        "Company": "GUVI"
    },
    {
        "userid": 3,
        "drive_date": new Date("31-oct-2020"),
        "Company": "KissFlow"
    },
    {
        "userid": 4,
        "drive_date": new Date("31-oct-2020"),
        "Company": "KissFlow"
    }
])