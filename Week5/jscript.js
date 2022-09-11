// Declare any necessary variables.
let student 

// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.querySelector('#print').addEventListener('click', function(){
    newStudent()
    fill()

})
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.querySelector('reset').addEventListener('click', function(){
document.querySelectorAll('text').reset()
})

// Create a function that instantiates a new student object with the input from the HTML form.
var newStudent = function(){
    querySelector('studentName').value
    querySelector('className').value
    querySelector('studentScores').value
    }

   

// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function fill(){
    document.querySelector('#certStudentName').innerHTML = student.studentName;
    document.querySelector('#certClassName').innerHTML = student.className;
    document.querySelector('#certGrade').innerHTML = student.calcGrade.toLocaleString()
}

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

