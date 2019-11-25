"use strict";

// header

    // hamburger and exit buttons
    const ul = document.querySelector('ul');
    const hamburger = document.querySelector('.fa-bars');
    const close = document.querySelector('.fa-times');

    hamburger.addEventListener('click', ()=>{
        ul.classList.add('menu-show');
    });

    close.addEventListener('click', ()=>{
        ul.classList.remove('menu-show');
    });



    // navigation .active class       on scroll event

    window.addEventListener('scroll', headerScroll);
    headerScroll();
    
    window.addEventListener('scroll', fixedHeader);


// hero

// clients

// about me

document.querySelector('#right-bar').innerHTML = generateProgress(progress);

// numbers

// skills

// latest work

// portfolio
renderGallery( works );

// services
renderBlocks( services );

// testimonials
renderTestimonials( testimonials );

// contact me

// footer

