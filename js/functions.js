"use strict";

// header
function headerScroll() {
    //kokiame aukstyje esu
    const headerHeight = document.querySelector('.header').offsetHeight; // pridedam header height prie bendro aukscio
    const height = window.scrollY + headerHeight + 50;


        //kokiame aukstyje yra tam tikra sekcija(kurios yra paminetos header nav)
        const DOMlinks = document.querySelectorAll('.navigation > a');

        let links = [];                            // susikuriame object kuriame issaugosime reikiamus linkus
        for (let i=0; i<DOMlinks.length; i++) {    // paleidziame loop kuris praeina pro visus DOMlinks narius
        const element = DOMlinks[i];               // susikuriam variable kuriame saugosime kiekviena DOMlinks [i] nari
        const href = element.href;                 // consoleje, prie kiekvieno elemento, randame 'href' ir ji issaugome variable href
        const split = href.split('#');             // splitiname 'href' nuoroda, kad gautume id nuoroda
        if ( split.length > 1 ) {
            links.push('#'+split[1]);               // prie link object pridedame # ir split antraji nari (id pavadinima)
        }
    }
        // susirandame sekciju poziciju aukscius 
        const sectionHeight = [];
        for (let i=0; i<links.length; i++) {        // loop 
            if (links[i] === '#') {                 // jei links[i] narys turi tik #, tuomet ji praleidziame
                sectionHeight.push(0);              // pushinam o, nes sukureme if kuris praleidzia # elementa
                continue;
            }
            const section = document.querySelector(links[i]);   // issaugome links[i] nario html syntaxe(nuoroda) i section variable
            sectionHeight.push(section.offsetTop);              // issaugome sekciju pozicija 'offsetTop' 
        }

        //kuri sekcija man artimiausia
        let currentSectionImIn = 0;                     // starte musu pozicija = 0        
        for ( let i=0; i<sectionHeight.length; i++) {        // jei sectionHeight [i] narys (pvz #portfoliot(2) kurio offsetTop yra 3200) 
            if ( sectionHeight[i] > height ) {                // yra didesnis uz mano dabartini auksti (pvz 2400), 
                break;                                      // tuomet if suveikia ir break; sustabdo loop'a.
            }                                               // reiskia 'currentSectionImIn' verte lieka 1 (#about)
            currentSectionImIn = i;
        }

        //tuomet atimame 'active' klase is tos kuri siuo metu ja turi
        document.querySelector('.header nav > a.active').classList.remove('active');

        //naujai sekcijai duodame klase active
        document.querySelector(`.header nav > a[href="${links[currentSectionImIn]}"]`)
        .classList.add('active');

        //contact sekcijai duodame klase active
        const contactHeight = document.querySelector('#contact').offsetTop + (-150);  // naudojant +(-150) gali viskas crashinti jei pasikeis sekciju dydziai
        if (window.scrollY > contactHeight) {
            document.querySelector('.contact').classList.add('active');
            document.querySelector('.blog').classList.remove('active');
        } 
        if ( window.scrollY < contactHeight) {
            document.querySelector('.contact').classList.remove('active');
        }
}
      
        //fixed header on scroll
        // logo scale on scroll
        function fixedHeader() {
            if (window.scrollY > 200) {
                document.querySelector('.header-content').classList.add('header-show');
                document.querySelector('.header-content > .logo').classList.add('logoScale');
            }
            if (window.scrollY === 0 ) {
                document.querySelector('.header-content').classList.remove('header-show');
                document.querySelector('.header-content > .logo').classList.remove('logoScale');
            }
        }

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

function barScroll() {
    const myPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = myPosition + windowHeight;
    
    const DOMbar = document.querySelector('#right-bar');
    const aboutPosition = DOMbar.offsetTop;
    const aboutTopMargin = parseFloat(getComputedStyle( DOMbar ).marginTop);
    const barHeight = DOMbar.querySelector('#right-bar > .progress-bar').offsetHeight;
    const barPosition = aboutPosition + aboutTopMargin + barHeight;
    console.log(aboutPosition, barPosition, scrollHeight);
    if ( barPosition < scrollHeight ) {
        const progressBars = DOMbar.querySelectorAll('#right-bar > .progress-bar');
        for ( let i=0; i<progressBars.length; i++ ) {
            const bar = progressBars[i];
            if ( !bar.classList.contains('animate') ) {
                bar.classList.add('animate');
            }
        }
    }
    
    return;
}

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
function renderTestimonials( list ) {
    const DOM = document.querySelector('#testimonials');
    let HTML = '';
    let listHTML = '';
    let dashHTML = '';
    
    if ( !Array.isArray(list) ) {
        return console.error('ERROR: nera saraso...');
    }
    if ( list.length === 0 ) {
        return console.error('ERROR: sarasas tuscias...');
    }

    // testimonial 
    for ( let i=0; i<list.length; i++ ) {
        const monial = list[i]; 

    /* const randomTestimonial = list[ Math.floor(Math.random() * list.length) ]; */
    
    listHTML += `<div class="monial data-index="${i}" style="width: ${100 / list.length}%;">
                    <img src="./img/${monial.image}">
                    <div class="testimonial-text">
                        <div class="name">${monial.name}</div>
                        <div class="duties">${monial.duties}</div>
                        <p>${monial.text}</p>
                    </div>
                </div>`;

    dashHTML += `<div class="dash ${i === 0 ? 'current-slide' : ''}"
                     data-cursor="${i}"></div>`;
    }
    // apjungimas
    HTML += `<div class="testimonials">
                <div class="list" style="width: ${100 * list.length}%;">
                    ${listHTML}
                </div>
                <div class="controls">
                    ${dashHTML}
                </div>
            </div>`;
   

    // ikeliam i DOM'a
    DOM.innerHTML = HTML;

   // click eventas
    const DOMlist = DOM.querySelector('.list');
    const DOMdash = DOM.querySelectorAll('.controls > .dash');
    for ( let i=0; i<DOMdash.length; i++ ) {
        DOMdash[i].addEventListener('click', (event) => {
           
            const cursor = parseInt(event.target.dataset.cursor);
            DOMlist.style.marginLeft = (cursor * -100) + '%';

            // active dash
            DOM.querySelector('.controls > .dash.current-slide').classList.remove('current-slide');
            event.target.classList.add('current-slide');
        })
    }
   
   return;
}