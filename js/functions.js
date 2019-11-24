"use strict";

// header
function headerScroll() {
    //kokiame aukstyje esu
    const headerHeight = document.querySelector('.header').offsetHeight; // pridedam header height prie bendro aukscio
    const height = window.scrollY + headerHeight + 50;


        //kokiame aukstyje yra tam tikra sekcija(kurios yra paminetos header nav)
        const DOMlinks = document.querySelectorAll('.navigation > a');

        let links = [];                            // susikuriame array kuriame issaugosime reikiamus linkus
        for (let i=0; i<DOMlinks.length; i++) {    // paleidziame loop kuris praeina pro visus DOMlinks narius
        const element = DOMlinks[i];               // susikuriam variable kuriame saugosime kiekviena DOMlinks [i] nari
        const href = element.href;                 // consoleje, prie kiekvieno elemento, randame 'href' ir ji issaugome variable href
        const split = href.split('#');             // splitiname 'href' nuoroda, kad gautume id nuoroda
        links.push('#'+split[1]);                  // prie link object pridedame # ir split antraji nari (id pavadinima)
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
        for (let i=0; i<sectionHeight.length; i++) {        // jei sectionHeight [i] narys (pvz #portfoliot(2) kurio offsetTop yra 3200) 
            if (sectionHeight[i] > height) {                // yra didesnis uz mano dabartini auksti (pvz 2400), 
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

// blog page

function renderBlog(data) {
    let HTML = '';

    for (let i=0; i<data.length; i++) {
        HTML += '<div class="renderBlock"> <img src="./img/blog/'+ data[i].image +'" alt="post 1 image" class="post">\
                 <div class="right">\
                 <i class="fa fa-clock-o"></i>\
                  <span>'+ data[i].date +'</span>\
                  <h2>'+ data[i].name +'</h2>\
                  <p>'+ data[i].text +'</p>\
                  <a href="#" class="btn">'+ data[i].button +'</a></div></div>'; 
            }  
    document.getElementById('render').innerHTML = HTML;
    return;
}

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

