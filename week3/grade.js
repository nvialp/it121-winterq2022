var grades = "jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27";

var average;
var grade = [];
var highest;
var lowest;
var person = [];
var sum = 0;
var totalStudents;
var updated = [];

var students = grades.split(", ");

for (let i = 0; i < students.length; i++) {
    let temp = students[i].split("|");
    person[i] = temp[0];
    grade[i] = temp[1];
}

for (let i = 0; i < students.length; i++) {
    sum += parseInt(grade[i]);
}

lowest = grade[0];
highest = grade[0];

for (let i = 0; i < person.length; i++) {
    person[i] = person[i].charAt(0).toUpperCase() + person[i].slice(1);
    updated[i] = person[i] + " - " + grade[i];
    if (grade[i] < lowest) {
        lowest = grade[i];
    }

    if (grade[i] > highest) {
        highest = grade[i];
    }
}

updated.sort();

totalStudents = students.length;
average = sum/students.length;

document.getElementById("1").innerHTML = updated[0];
document.getElementById("2").innerHTML = updated[1];
document.getElementById("3").innerHTML = updated[2];
document.getElementById("4").innerHTML = updated[3];
document.getElementById("5").innerHTML = updated[4];
document.getElementById("6").innerHTML = updated[5];
document.getElementById("7").innerHTML = updated[6];
document.getElementById("8").innerHTML = updated[7];
document.getElementById("9").innerHTML = updated[8];
document.getElementById("10").innerHTML = updated[9];

document.getElementById("total").innerHTML = totalStudents;
document.getElementById("highest").innerHTML = highest;
document.getElementById("lowest").innerHTML = lowest;
document.getElementById("average").innerHTML = average;
