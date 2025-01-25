// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
// Handle form submission
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g;
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var username = ((_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var name = ((_b = document.getElementById('name')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var email = ((_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var phone = ((_d = document.getElementById('phone')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var education = ((_e = document.getElementById('education')) === null || _e === void 0 ? void 0 : _e.value) || '';
    var experience = ((_f = document.getElementById('experience')) === null || _f === void 0 ? void 0 : _f.value) || '';
    var skills = ((_g = document.getElementById('skills')) === null || _g === void 0 ? void 0 : _g.value) || '';
    // Save form data in localStorage with the username as the key
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
    if (username.trim()) {
        localStorage.setItem(username, JSON.stringify(resumeData)); // Save data locally
    }
    else {
        alert("Username is required to save the resume.");
        return;
    }
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2>Editable Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement)
        resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    if (shareableLinkContainer && shareableLinkElement) {
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    }
});
// Handle PDF download
downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener('click', function () {
    window.print(); // Open the print dialog to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
