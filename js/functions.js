"use strict";

// header

// hero

// clients

// about me

function generateProgress( data ) {
   let HTML = '';
   
   data.forEach( bar => {
       HTML += `<div class="progress-bar">
                    <div class="text">
                        <div class="title">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="full">
                        <div class="bar" style="width: ${bar.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    });
    
    return HTML;
}

// numbers

// skills

// latest work

// portfolio
function renderGallery( list ) {
    const DOM = document.querySelector('#gallery');
    let HTML = '';
    let filterHTML = 'Gallery filter';
    let listHTML = '';

    // gallety  be tag'u
    for ( let i=0; i<list.length; i++ ) {
        const work = list[i];

        listHTML += `<div class="work">
                        <img src="./img/work/${work.photo}">
                        <div class="ant">
                            <a href="#" class="btn-round fa fa-link"></a>
                            <div class="portfolio-title">
                                <a href="#" class="a-link">${work.name}</a>
                                <p>${work.description}</p>
                            </div>
                        </div>
                    </div>`;
    }
    HTML = `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="list">
                    ${listHTML}
                </div>
            </div>`;

    return DOM.innerHTML = HTML;
}


// services
function renderBlocks( list ) {
    let HTML = '';

    for ( let i=0; i<list.length; i++) {
        const item = list[i];
    
    if ( !item.icon ||
        !item.title ||
        !item.description ) {
       continue;
    }
    HTML += `<div class="block">
            <i class="fa fa-${item.icon}"></i>
            <h4>${item.title}</h4>
            <p>${item.description}</p>
            </div>`;
    }
    return document.querySelector('#services').innerHTML = HTML;
}

// testimonials
function renderTestimonials( list ) {
    const DOM = document.querySelector('#testimonials');
    let HTML = '';
    let listHTML = '';

    // testimonial 
    for ( let i=0; i<list.length; i++ ) {
        const monial = list[i];

        listHTML += `<div class="monial">
                        <img src="./img/${monial.image}">
                        <div class="testimonial-text">
                            <div class="name">${monial.name}</div>
                            <div class="duties">${monial.duties}</div>
                            <p>${monial.text}</p>
                        </div>
                    </div>`;
    }

    // controlsai

    // apjungimas
    HTML += `<div class="testimonials">
                <div class="list">
                    ${listHTML}
                </div>
                <div class="controls">
                ---
                </div>
            </div>`;

    // ikeliam i DOM'a
    document.querySelector('#testimonials').innerHTML = HTML;

    // click eventas


    return DOM.innerHTML = HTML;
}

// contact me

