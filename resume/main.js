document.addEventListener('DOMContentLoaded', () => {
    let resume = document.querySelector('.btn-resume');
    let hireMe = document.querySelector('.btn-hire');
    resume.addEventListener('click', () => {
        window.location = './resume.pdf';
    });
    hireMe.addEventListener('click', () => {
        window.location = 'mailto:shivamg8797@gmail.com';
    });
});