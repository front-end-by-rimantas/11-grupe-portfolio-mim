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
            const tag = tags[j].toLowerCase();
            if ( uniqueTags.indexOf(tag) === -1 ) {
                uniqueTags.push(tag);
            }
        }
    }
    
    filterHTML += `<div class="item active" data-tag="all">All</div>`;
    filterHTML += `<div class="item" data-tag="web">${uniqueTags[4]}</div>`;
    for ( let i=0; i<uniqueTags.length-1; i++) {
        filterHTML += `<div class="item" data-tag="${uniqueTags[i]}">${uniqueTags[i]}</div>`;
    }
    

    // gallery  be tag'u
    for ( let i=0; i<list.length; i++ ) {
        const work = list[i];

        listHTML += `<div class="work show">
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
    
    DOM.innerHTML = HTML;

    const filterItems = DOM.querySelectorAll('.filter > .item');
    
    for ( let i=0; i<filterItems.length; i++ ) {
        filterItems[i].addEventListener('click', updateGallery);
        filterItems[i].addEventListener('click', activeGallery);
    }
    return; 
}

function activeGallery( ev ) {
    const clicked = ev.target;
    const clickedTag = ev.target.dataset.tag;
    const DOMitem = document.querySelector('.gallery > .filter > .item.active');

    if ( clickedTag ) {
        DOMitem.classList.remove('active');
        clicked.classList.add('active');
    }
    return;
}

function updateGallery( event ) {
    const filter = event.target.dataset.tag;
    const DOMworks = document.querySelectorAll('.gallery > .list > .work');

    if ( filter === 'all') {
        for ( let i=0; i<DOMworks.length; i++ ) {
            DOMworks[i].classList.add('show');
        }
        return;
    }

    for ( let i=0; i<works.length; i++) {
        const work = works[i];
        let show = false;
        
        for ( let j=0; j<work.tags.length; j++ ) {
            const tag = work.tags[j].toLowerCase();

            if ( filter === tag ) {
                show = true;
            }
        }
        if ( show ) {
            DOMworks[i].classList.add('show');
        } else {
            DOMworks[i].classList.remove('show');
        }
    }
    return;
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

