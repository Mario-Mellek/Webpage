//Global variable definition
const topButton = document.querySelector('.top');
const navButton = document.querySelector('.nav-button');
const nav= document.querySelector('.nav');

//upon clicking the button the function smoothly takes you to the top.
topButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


//button is only visible after scrolling down to 200px.
function buttonVisibility() {
    window.pageYOffset > 200 ?
        topButton.classList.add('visible')
        : topButton.classList.remove('visible')
};

//buttonVisibility function gets invoked upon scrolling.
document.addEventListener('scroll', ()=>{
    buttonVisibility();
});


navButton.addEventListener('click', ()=>{
    nav.classList.toggle('open');
});