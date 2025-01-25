// Get refernces to the form and display area 
const form=document.getElementById('resume-form') as HTMLFormElement
const resumedisplayElement=document.getElementById('resume-form') as HTMLDivElement

//Handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();//prevent page load

    //Collect input values
    const name=(document.getElementById('name') as HTMLInputElement).value
    const email=(document.getElementById('email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const education=(document.getElementById('education') as HTMLInputElement).value
    const experience=(document.getElementById('experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    //Generate the resume content dynamically
    const resumeHTML=`
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name :${name}</p>
    <p><b>Name :${email}</p>
    <p><b>Name :${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</>

    <h3>Experience</h3>
    <p>${experience}</>

    <h3>Skills</h3>
    <p>${skills}</>
    `;
    //Display the generated resume
    if(resumedisplayElement){
        resumedisplayElement.innerHTML=resumeHTML
    } else{
        console.error('The resume display element is missing');
    }
    });