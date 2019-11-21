"use strict";

// header
function headerScroll() {
    //kokiame aukstyje esu
    const height = Math.floor(window.scrollY);
    console.log(height);
}

        //kokiame aukstyje yra tam tikra sekcija(kurios yra paminetos header nav)
        const DOMlinks = document.querySelectorAll('.navigation > a');
        console.log(DOMlinks);

        let links = [];
        for (let i=0; i<DOMlinks.length; i++) {
        const element = DOMlinks[i];
        const href = element.hash;
        console.log(href);
        }
        
        //kuri sekcija man artimiausia
        //jeigu artimiausia sekcija yra pamineta header nav'e
        //tuomet atimame 'active' klase is tos kuri siuo metu ja turi
        //naujai sekcijai duodame klase active  


        
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

// contact me

