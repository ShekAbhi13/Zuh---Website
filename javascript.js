/*= menu icon for navbar =*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*= this part is for switching the active link in the navbar =*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    /*=== this is for the sticky navbar ===*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*=== this is to remove the menu icon when scrolling ===*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*== dark/light mode==*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}


/*== scroll reveal ==*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .gallery-box, video, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .footer a', { origin: 'right' });

function ValidateEmail (inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("You have entered a valid email address!");
             //The pop alert for a valid email address
        document.formValidate.textValidate.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
            //The pop up alert for an invalid email address
        document.formValidate.textValidate.focus();
        return false;
    }
}