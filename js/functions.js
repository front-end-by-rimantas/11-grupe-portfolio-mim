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
    let filterHTML = '';
    let listHTML = '';

    // gallery tag's
    let uniqueTags = [];
    for ( let i=0; i<list.length; i++) {
        const tags = list[i].tags;
        for ( let j=0; j<tags.length; j++) {
            const tag = tags[j];
            if ( uniqueTags.indexOf(tag) === -1 ) {
                uniqueTags.push(tag);
            }
        }
    }
    
    filterHTML += `<div class="item">All</div>`;
    filterHTML += `<div class="item">${uniqueTags[4]}</div>`;
    for ( let i=0; i<uniqueTags.length-1; i++) {
        filterHTML += `<div class="item">${uniqueTags[i]}</div>`;
    }
    console.log(uniqueTags);
    

    // gallery  be tag'u
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
                <div class="filter id="center">
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

