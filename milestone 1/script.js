document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggle-skills');
    var skills = document.getElementById('skills');
    // Check if both elements exist
    if (!toggleButton) {
        console.error('Error: Element with id="toggle-skills" not found.');
        return;
    }
    if (!skills) {
        console.error('Error: Element with id="skills" not found.');
        return;
    }
    // Ensure initial state
    if (!skills.style.display) {
        skills.style.display = 'block';
    }
    toggleButton.addEventListener('click', function () {
        skills.style.display = (skills.style.display === 'none') ? 'block' : 'none';
    });
});
