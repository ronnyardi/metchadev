document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            alert('More details about the project.');
        });
    });
});
