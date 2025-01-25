// Get refernces to the form and display area 
var form = document.getElementById('resume-form');
var resumedisplayElement = document.getElementById('resume-form');
//Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page load
    //Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name :".concat(name, "</p>\n    <p><b>Name :").concat(email, "</p>\n    <p><b>Name :").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</>\n    ");
    //Display the generated resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
